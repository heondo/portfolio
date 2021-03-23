<template>
  <section :class="{ [bgColor]: true }" class="">
    <div class="max-w-4xl mx-auto py-6 px-6 sm:px-8">
      <h3 v-if="$slots.title" class="text-xl uppercase font-bold mb-4">
        <slot name="title"></slot>
      </h3>
      <div class="px-2 sm:px-0">
        <slot> </slot>
      </div>
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
