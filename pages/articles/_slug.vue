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
            <article-modal v-if="article.inProgress" :defaultState="true">
            </article-modal>
          </h2>
          <div class="content">
            <div
              class="text-gray-200 mt-2 mb-4 pl-2 border-l-4 border-indigo-400"
            >
              Heondo Kim -
              {{
                $formatDate(
                  new Date(article.updatedAt),
                  "MMM d, yyyy 'at' hh:mm aaa"
                )
              }}
            </div>
            <markdown-content :document="article"></markdown-content>
          </div>
        </article>
      </div>
    </template>
  </app-layout>
</template>
<script>
import AppLayout from '~/layouts/AppLayout'
import MarkdownContent from '~/layouts/MarkdownContent'
import ArticleModal from '~/components/ArticleModal'

export default {
  components: { AppLayout, ArticleModal, MarkdownContent },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return {
      article,
    }
  },
}
</script>
