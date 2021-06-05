<template>
  <div>
    <li class="list-none" v-for="p in projects" :key="p.slug">
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
