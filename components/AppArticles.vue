<template>
  <div
    class="grid grid-cols-1 gap-4 sm:gap-6 justify-center"
    :class="[`sm:grid-cols-${articles.length}`]"
  >
    <section
      v-for="(article, i) in massagedArticles"
      :key="article.slug"
      class="article-container"
      :class="{
        elevated: articles.length >= 3 && i === 1,
      }"
    >
      <span class="flex flex-col gap-2 h-full">
        <header class="font-semibold">
          {{ article.subject }}
        </header>
        <nuxt-link
          class="hover:text-gray-400 transition duration-300 ease-in-out font-bold"
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        >
          {{ article.title }}
        </nuxt-link>
        <article>
          {{ article.description }}
        </article>
        <div class="flex-grow"></div>
        <nuxt-link
          class="read-more"
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </nuxt-link>
      </span>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  computed: {
    massagedArticles() {
      if (this.articles.length < 3) {
        return [...this.articles]
      }
      // if more than 3 articles, put the newest article in the center.
      return [this.articles[0], this.articles[2], this.articles[1]]
    },
  },
}
</script>
<style scoped>
@screen sm {
  .elevated {
    transform: scale(1.12);
    @apply text-sm;
  }
}

.article-container {
  background: #4f51be;
  background: -webkit-linear-gradient(top, #4f51be, #3c3d9c);
  background: -moz-linear-gradient(top, #4f51be, #3c3d9c);
  background: linear-gradient(to bottom, #4f51be, #3c3d9c);
  @apply p-4 rounded-lg shadow-lg;
}

.read-more {
  @apply text-right  transition duration-300 ease-in-out;
}

.read-more:hover {
  @apply transform -translate-y-1 text-gray-400;
}
</style>
