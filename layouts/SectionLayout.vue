<template>
  <section>
    <div class="section-header">
      <slot name="header"></slot>
    </div>
    <div class="section-content">
      <slot name="sectionContent"></slot>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style>
.section-header {
  @apply text-lg font-semibold mb-4 text-gray-700;
  @screen md {
    @apply text-xl;
  }
}

.section-content {
  @apply text-gray-700;
}
</style>
