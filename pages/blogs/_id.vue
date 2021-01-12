<template>
  <app-layout>
    <template #title>
      <app-header>
        <h1 class="text-3xl font-bold text-white">
          {{ blog.title }}
        </h1>
      </app-header>
      <!-- <h3 class="text-xl">{{ blog.title }}</h3> -->
    </template>
    <template #content>
      <nuxt-content :document="blog"></nuxt-content>
    </template>
  </app-layout>
</template>
<script>
import AppLayout from '~/layouts/AppLayout'
import AppHeader from '~/components/AppHeader'
export default {
  components: {
    AppLayout,
    AppHeader,
  },
  async asyncData({ $content, params }) {
    // const a
    const blog = await $content('blogs', params.id).fetch()
    return { blog }
    // return {
    //   thing: 'hello',
    // }
  },
  data() {
    return {
      slug: this.$route.params.id,
    }
  },
}
</script>
