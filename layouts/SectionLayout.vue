<template>
  <section
    :class="{ 'slanted-div': isSlanted, [slantOrigin]: true, [bgColor]: true }"
    class="max-w-7xl mx-auto"
  >
    <div class="py-6 sm:px-6 lg:px-8"><slot> </slot></div>
  </section>
</template>
<script>
export default {
  props: {
    isSlanted: {
      type: Boolean,
      default: true,
    },
    slantOrigin: {
      type: String,
      default: 'bottom-left',
    },
    bgColor: {
      type: String,
      default: 'bg-gray-800',
    },
  },
}
</script>
<style scoped>
.slanted-div {
  position: relative;
  /* padding: 200px 0; */
  overflow: visible;
  z-index: 1;
  @apply mb-20;
}

/* where the magic happens */
.slanted-div:after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background: inherit;
  z-index: -1;
  bottom: 0;
  transform: skewY(3deg);
}

/* displays the content inside, as these settings in the parent breaks the effect */
.slanted-div div {
  text-align: center;
  font-size: 1.5em;
  line-height: 1.5;
}

.top-left:after {
  transform-origin: left top;
}
.top-right:after {
  transform-origin: right top;
}
.bottom-left:after {
  transform-origin: left bottom;
}
.bottom-right:after {
  transform-origin: right bottom;
}
</style>
