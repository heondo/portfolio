<template>
  <section :class="classes" class="px-4 sm:px-8 md:px-12 py-6 md:py-10">
    <div>
      <div class="section-header">
        <slot name="header"></slot>
      </div>
      <!-- <div class="absolute h-full w-full bg-blue-300 z-10"></div> -->
      <div class="section-content">
        <slot name="sectionContent"></slot>
      </div>
    </div>
    <!-- <svg
      :class="bgColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path fill-opacity="1" d="M0,32L1440,256L1440,320L0,320Z"></path>
    </svg> -->
  </section>
</template>
<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: 'bg-gray-700',
    },
    textColor: {
      type: String,
      default: 'bg-gray-150',
    },
  },
  computed: {
    classes() {
      return `${this.bgColor} ${this.textColor}`
    },
  },
}
</script>
<style scoped>
.section-header {
  @apply text-lg font-semibold max-w-6xl text-gray-100 mx-auto mb-4;
  @screen md {
    @apply text-xl;
  }
}

.section-content {
  @apply text-gray-100 max-w-6xl mx-auto;
}
</style>
