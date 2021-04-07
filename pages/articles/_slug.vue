<template>
  <app-layout>
    <template #content>
      <section-layout>
        <template #title>
          <h2 class="text-2xl sm:text-4xl">
            {{ article.title }}
          </h2>
        </template>
        <div class="text-lg mb-4">
          Heondo Kim -
          {{
            $formatDate(
              new Date(article.createdAt),
              "MMMM dd, yyyy 'at' hh:mm aaa"
            )
          }}
        </div>
        <article>
          <nuxt-content :document="article" />
        </article>
      </section-layout>
    </template>
  </app-layout>
</template>
<script>
import AppLayout from '~/layouts/AppLayout.vue'
import SectionLayout from '~/layouts/SectionLayout.vue'
export default {
  components: { AppLayout, SectionLayout },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return {
      article,
    }
  },
}
</script>
