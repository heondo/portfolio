<template>
  <app-layout>
    <template #title>
      <h1 class="applayout-header">Blogs</h1>
    </template>
    <template #content>
      <div v-for="blog in blogs" :key="blog.slug">
        <div class="flex items-center gap-3">
          <nuxt-link
            :to="{ path: `blogs/${blog.slug}` }"
            class="font-bold italic"
            >{{ blog.title }}</nuxt-link
          >
          <sub>Last updated: {{ formatDate(blog.updatedAt) }}</sub>
        </div>
        <span>{{ blog.description }}</span>
      </div>
      <!-- <div>{{ blogs }}</div> -->
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
    const blogs = await $content('blogs').fetch()

    return {
      blogs,
    }
  },
  methods: {
    formatDate(date) {
      const dateo = new Date(date)
      return `${dateo.toLocaleDateString()}, ${dateo.toLocaleTimeString()}`
    },
  },
}
</script>
<style>
.applayout-header {
  @apply text-xl mb-2;
}
</style>
