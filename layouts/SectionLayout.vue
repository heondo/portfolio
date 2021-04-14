<template>
  <section
    v-observe-visibility="{ once: true, callback: visibilityChanged }"
    :class="{ [bgColor]: true }"
    class="py-12 md:py-16"
  >
    <div :class="[width]" class="mx-auto py-6 px-4 sm:px-6 md:px-8">
      <h3 v-if="$slots.title" class="text-xl uppercase font-bold mb-4">
        <slot name="title"></slot>
      </h3>
      <!-- <transition
        enter-active-class="transition ease-out duration-300"
        enter-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-300"
        leave-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      > -->
      <div
        class="px-2 sm:px-0 transition transform opacity-0 duration-1000 ease-in-out"
        :class="[visible ? 'opacity-100 translate-x-0' : ' -translate-x-6']"
      >
        <slot> </slot>
      </div>
      <!-- </transition> -->
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
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    visibilityChanged(isVisible) {
      this.visible = isVisible
      // console.log('i just viewed this component')
    },
  },
}
</script>
<style scoped></style>
