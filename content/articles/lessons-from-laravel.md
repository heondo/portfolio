---
title: Lessons from Laravel
subject: Web Dev
createdAt: 04 April 2021 00:00:00 PDT
updatedAt: 04 April 2021 00:00:00 PDT
description: 'Why building a web application with Laravel was the best learning experience I could have asked for. From basic routing libraries to monolith frameworks and the valuable lessons along the way.'
---

1. [A Brief Intro](#a-brief-intro)
1. [PHP? But why?](#but-php)
1. [It'll take a while, but it's worth it](#takes-a-while)

<h2 id="a-brief-intro">A Brief Intro</h2>

I am a self-taught developer who worked primarily with <span class="tech-word">React</span> and <span class="tech-word">Express.js</span> when I first began. Early on in my development journey, I relied on videos from channels like <a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" target="__blank">NetNinja</a> and <a href="https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w" target="__blank">Academind</a> to watch tutorials for how to bootstrap a full-stack web application with Express and React together, leaving me with a repo that often began looking like the following.
<img src="https://imgur.com/Iy4UUyy.png">

<div class="caption">And I was very excited to begin creating my full-stack app with this!</div>
 That combination got me quite far in learning the basics of CRUD and REST operations, the interaction between the front-end and back-end but they always felt <span class="italic font-semibold">amateurish</span> and that bugged me. I struggled to wrap my head around pagination, caching, job queueing, proper authentication, and other real-world application problems.

####

When I was asked to create a full-stack web application for my work using a tech stack of <span class="tech-word">Laravel</span>, <span class="tech-word">Vue</span>, <span class="tech-word">MySQL</span>, and <span class="tech-word">Docker</span>, I stopped looking at new features as a challenge and just picked the best solution, often existing packages. As someone who learns well through example and connecting the dots by seeing things in action, Laravel has broken down a lot of the perceived complexities of certain features (caching, queueing, etc).

<div class="caption" >
And Laravel showed me a great way to do it (for small to medium-sized companies). I am not bashing on Express, it's extremely simple and that allows teams to build their API exactly the way they want it but for smaller teams there's <span class="not-italic font-semibold">no benefit to writing solutions for extremely common issues like pagination, caching, authentication.</span>
</span>

</div>

<h2 id="but-php">
But Laravel uses PHP, and therefore you lost me and my respect
</h2>

<!-- ![Alt Text](https://i.kym-cdn.com/entries/icons/original/000/034/772/Untitled-1.png) -->

<img src="https://i.kym-cdn.com/entries/icons/original/000/034/772/Untitled-1.png" class="h-48 w-auto ">

I'm not going to and can't argue that learning PHP is worth your time based on your local job market. There are without a doubt PHP and Laravel jobs out there (although PHP can often mean WordPress and other CMS platforms) but it's understandable if you are not interested in working through a new language, especially one this archaic.

<div class="caption">
If that is the case, check out other production-level REST frameworks for your language of choice. If you want to use <span class="tech-word">Node.js</span> to keep the language for your client and server-side code the same (which is a super valid reason), check out <a href="https://nestjs.com/">Nest.js</a> or <a href="https://adonisjs.com/">AdonisJs</a>.</div>

<h2 id="takes-a-while">Laravel has a lot going on, and it will take time</h2>

<span>My first few weeks learning Laravel were pretty frustrating, I felt like anytime I wanted to understand one concept I had to look up two or three additional terms.

<div class="italic">
Within a month I was comfortable with most of the terminology and after two I could comfortable create a new web page with data pre-loaded from the server in minutes. Thanks to Vue and the great tooling surrounding Laravel.
</div>
<br>
Coming from working largely with Express and some GraphQL, this ecosystem was an eye-opener. I realized this is how I should have been making APIs the entire time. I am sure some articles or research papers would have told me the same thing but I cannot guarantee I would understand them. Laravel was a very practical way of learning some common standards and best practices in web development. On top of providing a strong MVC structure, Laravel broke down the following concepts for me:

#### Pagination

```php
return Posts::paginate(15);
```

Here's the simplest way to paginate results from one table. After viewing the JSON response

```json
{
  "current_page": 1,
  "data": [...]
  "next_page_url": null,
  "path": "http://localhost:8000/api/posts",
  "per_page": 15,
  "prev_page_url": "null",
  "to": 25,
  "total": 25
}
```

it was clear to me what is necessary to get pagination working. So if you were to implement pagination from scratch the only two things you have to know from the client are:

- what page is being requested (current page)
- The number of results per page (set by a user or hard-coded like example)

#### Request Caching

I always wondered, isn't implementing caching for a website extremely complicated? Well, yes and no. All you have to do is specify the key-value pair of your cached data, and how long you want to cache it for. The simplest way to get started is a database but you could imagine a route working like this:

```php
Route::get(function() {
  $users = Cache::remember('users', 60, function () {
    return DB::table('users')->get();
  });

  return $users;
});
```

<div class="caption">
  This route serve the users in the database. If there is data in the cache that has not expired we will serve that old set of users data or else we will run a query to get the users. That's the gist of it, I thought there was so much more to caching but that was it. 
</div>

#### Managing your Database

Previously, when I just built everything on my own to "learn" I would probably have a SQL data dump after configuring my database for the first time. As I built out my tables I would occasionally dump the newest version of the database so I could recreate it. This led to a variety of issues, for a variety of reasons. I was terrified to modify my schema because it meant modifying my database and dumping it or writing a large SQL query. Neither were preferable and both were impossible to roll back easily.
<br>
Laravel taught me about the wonderful world of migrations, factories, and seeders that showed me the way for backend development. I won't even bother starting a project without first configuring that portion of my database so I can regularly refresh my database and version control my changes.

Migration files define our database schema.

###### To create a table in our database we would need this file

```php
# users_migration.php
Schema::create('users', function (Blueprint $table) {
    $table->id();

    $table->string('name');
    $table->string('email')->unique();
    $table->timestamp('email_verified_at')->nullable();
    $table->string('password');
    $table->rememberToken();
    $table->foreignId('current_team_id')->nullable();
    $table->text('profile_photo_path')->nullable();

    $table->timestamps();
});
```

##### If we want to modify our database

```php
# modify_users_table.php

# to add a birthYear column to our users table
Schema::table('users', function (Blueprint $table) {
    $table->integer('birthYear')->default(1900);
});

# to remove an existing column, for example profile photo path
Schema::table('users', function (Blueprint $table) {
    $table->dropColumn('birthYear');
});
```

<div class="caption">
And thanks to learning about this I make drastic changes to my database with confidence and that allows my application and development process to be very fluid. Also in large part to seeders, and factories when necessary.
</div>

<h2>The Point</h2>

In all honesty, if you have a <span class="tech-word" >smaller development team</span> and need to implement a <span class="tech-word">feature-rich web application</span>, Laravel will work wonderfully. Nearly all services or features of modern web applications are accounted for in this framework along with a strong community and documentation.

So, I've loved my time using Laravel. PHP isn't perfect, and I wasn't super keen on brushing up on it but I learned so much in the process that I am extremely grateful I have.

<div class="caption">
I hope to work with Spark, Django/Flask, and Nest.js and see how each one stacks up against one another, what the advantages and disadvantages may be.</div>

<span>
Thanks for reading! Writing is tough for me, but I hope to just use this website as a place to document my thoughts and development/recreational experiences.
  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mb-2 text-red-500 inline" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
  </svg>
</span>

</span>
