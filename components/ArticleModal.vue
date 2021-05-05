<template>
  <modal :defaultState="true">
    <template #icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
        />
      </svg>
    </template>
    <template #title> Article currently in progress </template>
    <template #description>
      I'm a slow writer and I like to publish unfinished drafts/progress. Hope
      you can bear with me.
    </template>
    <template #buttonText> Got it, thanks! </template>
    <template #trigger>
      <span
        class="text-base hover:text-gray-400 transition duration-300 ease-in-out"
      >
        (in progress)</span
      >
    </template>
  </modal>
</template>
<script>
import Modal from '~/layouts/Modal'
export default {
  components: {
    Modal,
  },
  props: {
    defaultState: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: this.defaultState,
    }
  },
}
</script>
