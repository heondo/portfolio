<template>
  <section :class="{ [bgColor]: true }" class="py-12 md:py-16">
    <div :class="[width]" class="mx-auto py-6 px-6 sm:px-8">
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
    width: {
      type: String,
      default: 'max-w-4xl',
    },
  },
}
</script>
<style scoped></style>
