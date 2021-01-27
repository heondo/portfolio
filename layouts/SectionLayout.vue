<template>
  <section :class="classes">
    <div class="section-header px-2 sm:mx-4 md:px-6 z-20">
      <slot name="header"></slot>
    </div>
    <!-- <div class="absolute h-full w-full bg-blue-300 z-10"></div> -->
    <div class="section-content px-2 sm:mx-4 md:px-6 z-20">
      <slot name="sectionContent"></slot>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: 'bg-white',
    },
    textColor: {
      type: String,
      default: 'text-gray-700',
    },
  },
  computed: {
    classes() {
      return `relative ${this.bgColor} ${this.textColor} py-4`
    },
  },
}
</script>
<style>
.section-header {
  @apply text-lg font-semibold max-w-6xl mb-4 text-gray-700 mx-auto;
  @screen md {
    @apply text-xl;
  }
}

.section-content {
  @apply text-gray-700 max-w-6xl mx-auto;
}
</style>
