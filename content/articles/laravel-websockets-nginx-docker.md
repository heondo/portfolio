---
title: Deploying with Docker Compose, Laravel, Websockets, NGINX, and Let's Encrypt.
subject: Dev Ops
createdAt: 04 May 2021 00:00:00 PDT
updatedAt: 04 May 2021 00:00:00 PDT
inProgress: true
description: 'The harrowing journey of configuring NGINX to work with Docker containers, websockets, and SSL. Having exhausted every article regarding this issue, maybe this blog can appear somewhere and help another developer out.'
---

### So, I just went through the process of deploying an application.

<div class="caption">
To put it lightly, it was rough. Lots of hair pulling days and nights of little to no progress, but a whole lot of lessons on what does not work.
</div>

After many days of going four search results deep with all purple links, my coworker joked that I should write an article on deploying with this configuration. Given the amount of work it required, I think it should be documented for others who might be running a similar configuration.

### Project layout and structure

If you are here, I am assuming you have a <span class="tech-word">Dockerized Laravel</span> application that you are attempting to deploy to some server like <span class="tech-word">AWS EC2, Digital Ocean, GCP, Azure</span>, etc. But what's this, your Nginx configuration is causing issues with SSL/Websockets? Well I hope this can help a bit.
