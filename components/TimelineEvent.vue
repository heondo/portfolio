<template>
  <li
    v-observe-visibility="{
      once: true,
      callback: visibilityChanged,
      intersection: {
        threshold: 0.6,
      },
    }"
    class="px-2 sm:px-0 mb-2 transition transform opacity-0 duration-1000 ease-in-out"
    :class="[visible ? 'opacity-100 translate-x-0' : ' -translate-x-6']"
  >
    <div class="flex items-center mb-1">
      <div :class="[circleColor]" class="rounded-full h-8 w-8 z-30 p-1">
        <svg
          class="h-auto w-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <h3 class="flex-1 ml-4 font-medium">
        <slot name="title"> </slot>
      </h3>
    </div>
    <div class="list-container">
      <ul
        class="list-disc pl-4 transform transition duration-300 ease-in-out"
        :class="[eventExpanded ? '' : 'h-24 overflow-y-hidden']"
      >
        <slot name="list"></slot>
      </ul>
      <div class="absolute w-full expand-container">
        <svg
          v-show="!eventExpanded"
          class="h-6 w-6 mt-2 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click="eventExpanded = !eventExpanded"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
        <svg
          v-show="eventExpanded"
          class="h-6 w-6 mt-2 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click="eventExpanded = !eventExpanded"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          />
        </svg>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    circleColor: {
      type: String,
      default: 'bg-green-600',
    },
  },
  data() {
    return {
      visible: false,
      eventExpanded: false,
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
<style scoped>
.list-container {
  background: #4f51be;
  background: -webkit-linear-gradient(top, #4f51be, #3c3d9c);
  background: -moz-linear-gradient(top, #4f51be, #3c3d9c);
  background: linear-gradient(to bottom, #4f51be, #3c3d9c);
  @apply ml-12 p-4 text-white rounded-md relative text-sm shadow-md;
}

@screen sm {
  .list-container {
    @apply text-base;
  }
}
/* .list-container {
  @apply ;
} */
</style>
