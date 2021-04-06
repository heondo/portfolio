<template>
  <app-layout>
    <template #content>
      <section-layout>
        <template #title> Articles </template>
        <ul>
          <li v-for="article in articles" :key="article.slug">
            <nuxt-link
              :to="{ name: 'articles-slug', params: { slug: article.slug } }"
            >
              {{ article.title }}</nuxt-link
            >
          </li>
        </ul>
      </section-layout>
    </template>
  </app-layout>
</template>
<script>
import AppLayout from '~/layouts/AppLayout.vue'
import SectionLayout from '~/layouts/SectionLayout.vue'
export default {
  components: { AppLayout, SectionLayout },
  async asyncData({ $content }) {
    const articles = await $content('articles').fetch()

    return { articles }
  },
}
</script>
