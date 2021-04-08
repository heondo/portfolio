<template>
  <app-layout>
    <template #content>
      <div class="max-w-4xl mx-auto py-6 px-4 sm:px-8">
        <nav class="flex text-lg mb-3">
          <nuxt-link
            to="/articles"
            class="text-blue-400 hover:text-white transition duration-150 ease-in-out font-semibold"
          >
            Articles
          </nuxt-link>
          <span class="mx-2"> / </span>
          <span class="text-white">
            {{ article.subject }}
          </span>
        </nav>
        <article class="pl-0 sm:pl-2 md:pl-4">
          <h2 class="text-3xl sm:text-5xl font-bold">
            {{ article.title }}
          </h2>
          <div
            class="text-gray-200 mt-2 mb-4 pl-2 border-l-4 border-indigo-400 text-sm sm:text-base"
          >
            Heondo Kim -
            {{
              $formatDate(
                new Date(article.createdAt),
                "MMM d, yyyy 'at' hh:mm aaa"
              )
            }}
          </div>
          <nuxt-content :document="article" />
        </article>
      </div>
    </template>
  </app-layout>
</template>
<script>
import AppLayout from '~/layouts/AppLayout.vue'

export default {
  components: { AppLayout },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return {
      article,
    }
  },
}
</script>
<style>
.nuxt-content .caption {
  @apply border-l-4 border-indigo-400 pl-2 my-4 text-gray-300;
}

.nuxt-content img {
  @apply mx-auto my-6;
}

article {
  border: none;
  @apply text-base;
}

@screen sm {
  article {
    border-left: 1px dashed;
    @apply border-gray-700 text-lg;
  }
}

.nuxt-content h1 {
  @apply text-4xl;
}
.nuxt-content h2 {
  @apply text-3xl;
}
.nuxt-content h3 {
  @apply text-2xl;
}
.nuxt-content h4 {
  @apply text-xl;
}
.nuxt-content h5 {
  @apply text-lg;
}
.nuxt-content h6 {
}

.nuxt-content h1,
.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
  scroll-margin-top: 2em;
  @apply text-blue-300 my-4;
  /* thank you 
  https://gomakethings.com/how-to-prevent-anchor-links-from-scrolling-behind-a-sticky-header-with-one-line-of-css/ 
  */
}

.nuxt-content a {
  @apply underline text-lg;
}

.nuxt-content .tech-word {
  @apply text-blue-300 font-semibold;
}

.nuxt-content code {
}

.nuxt-content table {
  border-collapse: collapse;
  border: 1px solid white;
}

.nuxt-content table td {
  border: 1px solid white;
  padding: 2rem;
}

.nuxt-content ul,
.nuxt-content ol {
  padding-left: 1rem;
}

.nuxt-content ul > li {
  list-style-type: disc;
  @apply my-1;
}
.nuxt-content ol > li {
  list-style-type: decimal;
  @apply my-1;
}
</style>
