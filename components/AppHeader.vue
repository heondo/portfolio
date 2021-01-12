<template>
  <header class="py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- <h1 class="text-3xl font-bold text-white"> -->
      <slot></slot>
      <!-- </h1> -->
    </div>
  </header>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Heondo Kim',
    },
  },
}
</script>
