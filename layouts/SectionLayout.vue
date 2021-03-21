<template>
  <section :class="{ [bgColor]: true }" class="">
    <div class="max-w-4xl mx-auto py-6 px-2 sm:px-6 lg:px-8">
      <slot> </slot>
    </div>
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
