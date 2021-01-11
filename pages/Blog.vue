<template>
  <app-layout>
    <template #title>Blogs</template>
    <template #content>
      <!-- <div>
        {{ articles[0] }}
      </div> -->
      <div v-for="article in articles" :key="article.slug">
        {{ article.title }}
      </div>
      <!-- <div>Hello {{ articles.length }}</div> -->
    </template>
  </app-layout>
</template>
<script>
import AppLayout from '~/layouts/AppLayout'
export default {
  components: {
    AppLayout,
  },
  async asyncData({ $content }) {
    const articles = await $content('articles').fetch()

    return {
      articles,
    }
  },
}
</script>
