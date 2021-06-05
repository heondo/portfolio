<template>
  <div>
    <li v-for="p in projects" :key="p.slug" class="list">
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
}
</script>
<style scoped></style>
