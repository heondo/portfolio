<template>
  <section :class="{ [bgColor]: true }" class="max-w-7xl mx-auto">
    <div class="py-6 sm:px-6 lg:px-8"><slot> </slot></div>
  </section>
</template>
<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: 'bg-gray-800',
    },
  },
}
</script>
<style scoped></style>
