<template>
  <app-layout>
    <template #content>
      <div class="max-w-4xl mx-auto py-6 px-4 sm:px-6 md:px-8">
        <h3 class="text-xl uppercase font-bold mb-4">Articles</h3>
        <div class="px-2 sm:px-0">
          <ul>
            <li v-for="article in articles" :key="article.slug" class="my-12">
              <!-- <nuxt-link
              :to="{ name: 'articles-slug', params: { slug: article.slug } }"
            > -->
              <article-list-item :article="article"> </article-list-item>
              <!-- {{ article }} -->
            </li>
          </ul>
        </div>
      </div>
    </template>
  </app-layout>
</template>
<script>
import AppLayout from '~/layouts/AppLayout.vue'
import ArticleListItem from '~/components/ArticleListItem'
export default {
  components: { AppLayout, ArticleListItem },
  async asyncData({ $content }) {
    const articles = await $content('articles').sortBy('date', 'desc').fetch()

    return { articles }
  },
}
</script>
