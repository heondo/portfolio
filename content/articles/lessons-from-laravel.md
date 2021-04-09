---
title: Lessons from Laravel
subject: Web Dev
description: 'Why building a web application with Laravel was the best learning experience I could have asked for.'
---

1. [A Brief Intro](#a-brief-intro)
1. [PHP? But why?](#php-but-why)
1. [Vue, Tailwind](#example2)

## A Brief Intro

<div>
I am a self taught developer who worked primarily with <span class="tech-word">React</span> and <span class="tech-word">Express.js</span> when I first began. Early on in my development journey, I relied on videos from channels like <a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" target="__blank">NetNinja</a> and <a href="https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w" target="__blank">Academind</a> to watch tutorials for how to bootstrap a full stack web application with Express and React together, leaving me with a repo that often looks like the following.
<img src="https://imgur.com/Iy4UUyy.png">
<div class="caption">And I was very excited to begin creating my full stack app with this!</div>
 That combination got me quite far in learning the basics of CRUD and REST operations, interaction between the front-end and back-end but they always felt <span class="italic font-semibold">amateurish</span> and that bugged me. I struggled to wrap my head around pagination, caching, job queueing, proper authentication, and other real world application problems.

####

When I was asked to create a full stack web application for my work using a tech stack of <span class="tech-word">Laravel</span>, <span class="tech-word">Vue</span>, <span class="tech-word">MySQL</span>, and <span class="tech-word">Docker</span>, I realized that I shouldn't have to create solutions for all of those issues. Those are problems that every enterprise application has run into with well documented and tested libraries for enabling those features in your application. As someone who learns well through example and connecting the dots by seeing things in action, Laravel has broken down a lot of the perceived complexities of these features (caching, queueing, etc).

<div class="caption" >
And Laravel showed me a really great way to do it (for small to medium sized companies). I am not bashing on Express, it's extremely simple and that allows teams to build their API exactly the way they want it but for smaller teams there's <span class="not-italic font-semibold"> no benefit to writing solutions for extremely common issues like pagination, caching, authentication. </span>
</span>

</div>

## But its written in PHP, and therefore you lost me and my respect

<!-- ![Alt Text](https://i.kym-cdn.com/entries/icons/original/000/034/772/Untitled-1.png) -->

<img src="https://i.kym-cdn.com/entries/icons/original/000/034/772/Untitled-1.png" class="h-48 w-auto ">

I'm not going to and can't argue that learning PHP is really worth your time based on your local job market. There are without a doubt PHP and Laravel jobs out there (although PHP can often mean Wordpress and other CMS platforms) but it's understandable if you are not interested in working through a new language, especially one this archaic.

<div class="caption">
If that is the case, check out other production-level REST frameworks for your language of choice. If you want to use <span class="tech-word">Node.js</span> to keep the language for your client and server side code the same (which is a super valid reason), check out <a href="https://nestjs.com/">Nest.js</a> or <a href="https://adonisjs.com/">AdonisJs</a>.</div>

## Laravel is a monolith

<span>You won't understand Laravel within a week, by the end of the second week you might finally start to understand all of the pieces. There is a lot happening under the hood and Laravel's documentation while great cannot demonstrate more complex examples or abstractions.

ddd</span>
