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
<style>
.nuxt-content h1 {
  @apply text-5xl;
}
.nuxt-content h2 {
  @apply text-4xl;
}
.nuxt-content h3 {
  @apply text-3xl;
}
.nuxt-content h4 {
  @apply text-2xl;
}
.nuxt-content h5 {
  @apply text-xl;
}
.nuxt-content h6 {
  @apply text-lg;
}

.nuxt-content table {
  border-collapse: collapse;
  border: 1px solid white;
}

.nuxt-content table td {
  border: 1px solid white;
  padding: 2rem;
}
</style>
