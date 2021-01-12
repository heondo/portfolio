<template>
  <app-layout>
    <template #title> Blog title goes here </template>
    <template #content>
      <nuxt-content :document="blog"></nuxt-content>
    </template>
  </app-layout>
</template>
<script>
import AppLayout from '~/layouts/AppLayout'
export default {
  components: {
    AppLayout,
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
