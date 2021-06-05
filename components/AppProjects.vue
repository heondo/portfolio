<template>
  <div>
    <li v-for="p in projects" :key="p.slug" class="list-none">
      <!-- <img class="h-24 w-24" :src="p.thumbnail" /> -->
      man this image thing sucks
      {{ p.slug }}
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
  data() {},
}
</script>
<style scoped></style>
