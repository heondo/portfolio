<template>
  <span class="flex flex-col gap-3">
    <div class="flex justify-between">
      <span class="text-lg font-semibold pl-2 border-l-4 border-indigo-400">
        {{ article.subject }}
      </span>
      <span class="text-gray-300">
        {{ $formatDate(new Date(article.updatedAt), 'EEEE - MMMM dd, yyyy') }}
      </span>
    </div>
    <!-- Start of desc and content -->
    <div>
      <h2 class="text-xl md:text-2xl">
        <nuxt-link
          class="hover:text-gray-400 transition duration-300 ease-in-out text-white font-bold"
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        >
          {{ article.title }}
        </nuxt-link>
      </h2>
      <div>
        {{ article.description }}
      </div>
    </div>
    <span class="w-auto">
      <nuxt-link
        class="hover:text-white read-more text-blue-400 transition duration-300 ease-in-out"
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
    <!-- End of desc and content -->
  </span>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // formatDate() {
    //   return new Date(this.date)
    // },
  },
}
</script>
<style scoped>
/* read-more svg {
  @apply 
} */

.read-more svg {
  @apply transition duration-300 ease-in-out text-xl;
}

.read-more:hover svg {
  @apply transform translate-x-1 scale-110;
}
</style>
