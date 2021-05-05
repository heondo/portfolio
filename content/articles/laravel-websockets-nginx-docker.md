---
title: Deploying with Docker Compose, Laravel, Websockets, NGINX, and Let's Encrypt.
subject: Dev Ops
createdAt: 04 May 2021 00:00:00 PDT
updatedAt: 04 May 2021 00:00:00 PDT
inProgress: true
description: "The harrowing journey of configuring NGINX to work with Docker containers, websockets, and Let's Encrypt. Having exhausted every article regarding this issue, maybe this blog can appear somewhere and help another developer out."
---

### So, I just got through the process of deploying a Docker application with Websockets, Nginx, Let's Encrypt.

<div class="caption">
To put it lightly, it was rough. Lots of hair pulling days and nights of little to no progress, but a whole lot of lessons on what does not work.
</div>

After many days of going four search results deep with all purple links, my coworker joked that I should write an article on deploying with this configuration. Given the amount of work it required, I think it should be documented for others who might be running a similar configuration.

### Project layout and structure

If you are here, I am assuming you have a <span class="tech-word">Dockerized Laravel</span> application that you are attempting to deploy to some server like <span class="tech-word">AWS EC2, Digital Ocean, GCP, Azure</span>, etc. But what's this, your Nginx configuration is causing issues with SSL/Websockets? Well I hope this can help a bit.

### The primary bits

<ul>
    <li>
        nginx configuration file
    </li>
    <li>
        docker compose file
    </li>
    <li>
        environment variables file
    </li>
</ul>

These are the configuration files pre-deploment, some oddities:

<div class="caption">Mapping port 6001 to our local machine to connect to websockets, I think I need to configure the nginx proxy for that too but it's easier in development to just do localhost. It will be fixed in production, along with only exposing port 443</div>

```yml[docker-compose.yml]
version: '3.7'
services:
  myapp-app:
    build:
      args:
        user: sgadmin
        uid: 1000
      context: ./
      dockerfile: Dockerfile
    image: myapp
    container_name: myapp-app
    restart: unless-stopped
    working_dir: /var/www/
    volumes:
      - ./:/var/www
    networks:
      - myapp

  myapp-db:
    image: mariadb
    container_name: myapp-db
    depends_on:
      - myapp-redis
    restart: unless-stopped
    environment:
      MYSQL_DATABASE: ${DB_DATABASE}
      MYSQL_ROOT_PASSWORD: ${DB_PASSWORD}
      MYSQL_PASSWORD: ${DB_PASSWORD}
      MYSQL_USER: ${DB_USERNAME}
      SERVICE_TAGS: dev
      SERVICE_NAME: mysql
    volumes:
      - ./docker-compose/mysql:/docker-entrypoint-initdb.d
    networks:
      - myapp

  myapp-websockets:
    image: myapp
    command: ['php', 'artisan', 'websockets:serve']
    container_name: myapp-websockets
    restart: unless-stopped
    working_dir: /var/www/
    volumes:
      - ./:/var/www
    ports:
      - ${LARAVEL_WEBSOCKETS_PORT}:6001
    networks:
      - myapp

  myapp-nginx:
    image: nginx:alpine
    container_name: myapp-nginx
    restart: unless-stopped
    ports:
      - ${APP_PORT}:80
    volumes:
      - ./:/var/www
      - ./docker-compose/nginx/local:/etc/nginx/conf.d/
    networks:
      - myapp

networks:
  myapp:
    driver: bridge
```

```nginx[docker-compose/nginx/local/nginx.conf]
server {
    listen 80;
    index index.php index.html;
    error_log  /var/log/nginx/error.log;
    access_log /var/log/nginx/access.log;
    root /var/www/public;
    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass myapp-app:9000;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
    }
    location / {
        try_files $uri $uri/ /index.php?$query_string;
        gzip_static on;
    }
}

```

```env[.env]
APP_NAME=MyApp
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost
APP_PORT=8000 other if you have conflict

NODE_ENV=development

SANCTUM_STATEFUL_DOMAINS=localhost,127.0.0.1,localhost:8000,127.0.0.1:8000 # update if port changes

LARAVEL_WEBSOCKETS_HOST=localhost
LARAVEL_WEBSOCKETS_PORT=6001
LARAVEL_WEBSOCKETS_SSL_LOCAL_CERT=
LARAVEL_WEBSOCKETS_SSL_LOCAL_PK=
LARAVEL_WEBSOCKETS_SSL_PASSPHRASE=

BROADCAST_DRIVER=pusher

PUSHER_APP_ID=myapp-websockets-channel
PUSHER_APP_KEY=myapp-wbsocks
PUSHER_APP_SECRET=myapp@@
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
MIX_PUSHER_APP_TLS="false"

# All other env variables...
```

With this configuration, locally, websockets works fine. My client app can listen in and react to real time events. However, once we attempt to deploy we run into a whole bunch of issues.

### Beginning the deployment process

It was simple at first, buy a server, clone the repo, spin up the containers like I do locally. Yay! Well, http does which is unacceptable in any modern website.

So I did what any developer does, Google how to do X with Y. After failing, I looked up how to do X with Y and Z, and X with ❅. More failing, until I stumbled upon a wonderful [article](https://pentacent.medium.com/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71) with many claps and a [Github Repo](https://github.com/wmnnd/nginx-certbot) for the script file with many stars to go with it.

I followed them to a T and what do you know, I was able visit my HTTPS website, with a wonderful lock. Fiddle with your .env files and Laravel configuration to match the new production/HTTPS environment. Now, here is where the `403 email invalid signature` appeared and my client to throw various errors when attempting to connect to the websockets channel.

### 403 Invalid Signature and Email Verification

When testing the email verification feature, I ran into the same issue as [here](https://stackoverflow.com/questions/52917152/laravel-5-7-email-verification-throws-403). I couldn't figure it out until I realized I did not modify the nginx configuration file to fully work through HTTPS.

So I created a new Nginx configuration file `./docker-compose/nginx/prod/nginx.conf` with the contents

```{1,3,5}conf[./docker-compose/nginx/prod/nginx.conf]
server {
    listen 80;
    listen [::]:80;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    return 301 https://$host$request_uri;
}


server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    root /var/www/public;
    server_tokens off;

    access_log /var/log/nginx/access.log;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.html index.php;


    location / {
        try_files $uri $uri/ /index.php?$query_string;
        gzip_static on;
    }

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass myapp-app:9000;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
    }

    client_max_body_size 20M;

    gzip on;
    gzip_disable "msie6";

    tcp_nopush on;
    tcp_nodelay on;

    charset utf-8;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;


}
```

<span class="caption">
Once all traffic was forwarded directly to 443, instead of processing a request through HTTP first and then forwarding it to HTTPS after, the invalid signature went away. This was because passing through two proxies cause the signature to change and thus we received an invalid signature error. 
</span>
<div>
I praise <a href="https://www.linkedin.com/in/travisjryan/" target="_blank">Travis Ryan</a> for helping me figure this out. Before him my life was this Google page
</div>

<img class="w-auto h-80" src="https://i.imgur.com/w1JnsQX.png" alt="purple-google-results">

So that was solved, but I realized my websockets connection kept failing. It took weeks to diagnose and resolve this issue, but it was also done.

### For this, it was actually extremely simple...

<span class="caption">
    The only exposed port in our application is 443, all traffic is reverse proxied
</span>

```
version: '3.7'
services:
  ...
  myapp-websockets:
    image: myapp
    command: ['php', 'artisan', 'websockets:serve']
    container_name: myapp-websockets
    restart: unless-stopped
    working_dir: /var/www/
    volumes:
      - ./:/var/www
    # remove port mapping
    networks:
      - myapp

  myapp-nginx:
    image: nginx:alpine
    container_name: myapp-nginx
    depends_on:
      - myapp-certbot
    restart: unless-stopped
    ports:
      - 443:443
    volumes:
      - ./:/var/www
      - ./docker-compose/nginx/prod:/etc/nginx/conf.d/
      - ./docker-compose/certbot/conf:/etc/letsencrypt
      - ./docker-compose/certbot/www:/var/www/certbot
    command: '/bin/sh -c ''while :; do sleep 6h & wait $${!}; nginx -s reload; done & nginx -g "daemon off;"'''
    networks:
      - myapp

  myapp-certbot:
    image: certbot/certbot
    container_name: myapp-certbot
    volumes:
      - ./docker-compose/certbot/conf:/etc/letsencrypt
      - ./docker-compose/certbot/www:/var/www/certbot
    entrypoint: "/bin/sh -c 'trap exit TERM; while :; do certbot renew; sleep 12h & wait $${!}; done;'"
    networks:
      - myapp

networks:
  myapp:
    driver: bridge
volumes:
  db-data:
    driver: local
    driver_opts:
      o: bind
      type: none
      device: ${DB_DATA}
```

```diff
server {
    listen 80;
    listen [::]:80;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    return 301 https://$host$request_uri;
}


server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    ...
    # your other configuration stuff here
    ...

    location /app/ {
        proxy_pass             http://myapp-websockets:6001;
        # THIS IS IMPORTANT, host is not localhost anymore
        proxy_read_timeout     60;
        proxy_connect_timeout  60;
        proxy_redirect         off;

    #     Allow the use of websockets
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
     }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    location ~ \/.ht {
        deny all;
    }
}
```

```diff[.env]
LARAVEL_WEBSOCKETS_HOST=myapp-websockets # from localhost to docker container name
LARAVEL_WEBSOCKETS_PORT=6001
LARAVEL_WEBSOCKETS_SSL_LOCAL_CERT=
+ LARAVEL_WEBSOCKETS_SSL_LOCAL_PK=
LARAVEL_WEBSOCKETS_SSL_PASSPHRASE=

# All other env variables...
```
