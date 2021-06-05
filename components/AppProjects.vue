<template>
  <div>
    <li v-for="p in projects" :key="p.slug" class="list-none">
      <nuxt-img provider="cloudinary" class="h-32 w-32" :src="p.thumbnail" />
    </li>
  </div>
</template>
<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped></style>
