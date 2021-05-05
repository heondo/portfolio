<template>
  <span>
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      :class="{
        hidden: !isOpen,
      }"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      v-show="isOpen"
    >
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="ease-in duration-200"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            @click="isOpen = !isOpen"
          ></div
        ></transition>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <transition
          enter-active-class="ease-out duration-300"
          enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="ease-in duration-200"
          leave-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            v-show="isOpen"
            class="inline-block align-bottom bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6 max-w-md"
          >
            <div class="flex flex-col gap-4">
              <div
                class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-700"
              >
                <slot name="icon"> </slot>
              </div>
              <div class="text-center">
                <h3 class="text-lg leading-6 font-medium">
                  <slot name="title"> </slot>
                </h3>
                <div class="mt-4">
                  <p class="text-sm text-gray-400">
                    <slot name="description"> </slot>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                @click="isOpen = !isOpen"
              >
                <slot name="buttonText"> </slot>
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <button @click="isOpen = !isOpen">
      <slot name="trigger"> </slot>
    </button>
  </span>
</template>
<script>
export default {
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
