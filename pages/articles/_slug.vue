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
        <article class="pl-0 sm:pl-3 md:pl-6">
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
article {
  border: none;
}

@screen sm {
  article {
    border-left: 1px solid;
    @apply border-gray-700;
  }
}

.nuxt-content h1 {
  @apply text-5xl;
}
.nuxt-content h2 {
  @apply text-4xl;
}
.nuxt-content h3 {
  @apply text-3xl;
}
.nuxt-content h4 {
  @apply text-2xl;
}
.nuxt-content h5 {
  @apply text-xl;
}
.nuxt-content h6 {
  @apply text-lg;
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
  /* @apply: ml-2; */
  padding-left: 1rem;
}

.nuxt-content ul > li {
  list-style-type: disc;
}
.nuxt-content ol > li {
  list-style-type: decimal;
}
</style>
