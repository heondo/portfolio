<template>
  <div>Hello for a new project</div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('projects', params.slug).fetch()

    return {
      article,
    }
  },
}
</script>
