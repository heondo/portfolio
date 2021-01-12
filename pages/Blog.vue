<template>
  <app-layout>
    <template #title>
      <h1 class="text-xl mb-4">Blogs</h1>
    </template>
    <template #content>
      <div v-for="article in articles" :key="article.slug">
        <h4 class="font-bold italic">{{ article.title }}</h4>
        <sub> {{ article.description }} </sub>
      </div>
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
