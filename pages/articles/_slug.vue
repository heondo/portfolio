<template>
  <app-layout>
    <template #content>
      <section-layout>
        <template #title>
          {{ article.title }}
        </template>
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
