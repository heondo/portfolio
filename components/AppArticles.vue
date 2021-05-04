<template>
  <table class="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center">
    <tr
      v-for="(article, i) in articles"
      :key="article.slug"
      class="article-container"
      :class="{
        elevated: articles.length === 3 && i === 1,
      }"
    >
      <td class="flex flex-col gap-2">
        <header class="font-semibold">
          {{ article.subject }}
        </header>
        <h3 class="sm:text-lg">
          {{ article.title }}
        </h3>
        <article>
          {{ article.description }}
        </article>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped>
.elevated {
  transform: scale(1.17);
  @apply text-sm;
}

.article-container {
  background: #4f51be;
  background: -webkit-linear-gradient(top, #4f51be, #3c3d9c);
  background: -moz-linear-gradient(top, #4f51be, #3c3d9c);
  background: linear-gradient(to bottom, #4f51be, #3c3d9c);
  @apply p-4 rounded-lg shadow-lg;
}
</style>
