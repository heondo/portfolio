<template>
  <app-layout>
    <template #title>
      <app-header>
        <h1 class="text-3xl font-bold text-white">Blogs</h1>
      </app-header>
    </template>
    <template #content>
      <p>
        Thank you so much for clicking visting this section. I do not currently
        plan on writing any tutorials or the like, but I hope to write blurbs
        about specific issues I was able to work around or new tools that I love
        to work with.
      </p>
      <div v-for="blog in blogs" :key="blog.slug">
        <div class="flex items-center gap-1 sm:gap-3">
          <nuxt-link
            :to="{ path: `blogs/${blog.slug}` }"
            class="font-bold italic"
            >{{ blog.title }}</nuxt-link
          >
          <time class="break-words text-sm italic">
            Created: {{ formatDate(blog.createdAt) }}
          </time>
        </div>
        <span>{{ blog.description }}</span>
      </div>
    </template>
  </app-layout>
</template>
<script>
import AppLayout from '~/layouts/AppLayout'
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppLayout,
    AppHeader,
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
