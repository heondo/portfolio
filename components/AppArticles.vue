<template>
  <div>
    <div
      class="grid grid-cols-1 gap-4 sm:gap-6 justify-center mb-4"
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
          <p>
            {{
              $formatDate(new Date(article.createdAt), 'EEEE - MMMM dd, yyyy')
            }}
          </p>
          <nuxt-link
            class="
              hover:text-gray-400
              transition
              duration-300
              ease-in-out
              sm:text-lg
              font-bold
            "
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
    <nuxt-link
      to="articles"
      class="
        hover:text-gray-400
        duration-300
        ease-in-out
        transform
        text-center
        block
      "
    >
      <p class="inline underline">to articles</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 inline"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </nuxt-link>
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
  background: #314485;
  background: -webkit-linear-gradient(top, #314485, #243364);
  background: -moz-linear-gradient(top, #314485, #243364);
  background: linear-gradient(to bottom, #314485, #243364);
  @apply p-4 rounded-lg shadow-lg;
}

article {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
  -moz-line-clamp: 4; /* number of lines to show */
  -moz-box-orient: vertical;
  line-clamp: 4;
  box-orient: vertical;
}

.read-more {
  @apply text-right transition duration-300 ease-in-out;
}

.read-more:hover {
  @apply text-gray-400;
}
</style>
