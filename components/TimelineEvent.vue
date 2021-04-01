<template>
  <li class="mb-2">
    <div class="flex items-center mb-1">
      <div :class="[circleColor]" class="rounded-full h-8 w-8 z-20 p-1">
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
    <div class="ml-12 event text-sm sm:text-base">
      <ul
        class="list-container"
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
  <!-- <span class="grid grid-cols-12 gap-2 gap-y-5 relative">
    <div
      v-if="!hideTimeline"
      :class="[lineClasses]"
      class="timeline-line transform"
    ></div>

    <div class="date">
      <div class="circle">
        <svg
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
      <div><slot name="date"></slot></div>
    </div>
    <div class="event relative">
      <div>
        <slot></slot>
      </div>
      <div class="absolute w-full expand-container">
        <svg
          v-if="!eventExpanded"
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
          v-else
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
  </span> -->
</template>
<script>
export default {
  props: {
    hideTimeline: {
      type: Boolean,
      default: false,
    },
    lineClasses: {
      type: String,
      default: '',
    },
    circleColor: {
      type: String,
      default: 'bg-green-500',
    },
  },
  data() {
    return {
      eventExpanded: false,
    }
  },
}
</script>
<style scoped>
/* .event .expand-container > svg {
  @apply transition opacity-0 duration-300 ease-in-out;
}

.event:hover .expand-container > svg {
  @apply transform opacity-100 -translate-y-1 scale-110;
} */

.event {
  background-color: #3b4252;
  @apply col-span-9 p-4 text-white rounded-lg shadow-lg relative;
}

.event > h3 {
  @apply font-semibold uppercase;
}

@screen sm {
  .event {
  }

  .event > h3 {
    @apply text-lg;
  }

  .timeline-line {
    left: 2rem;
  }
}

@screen md {
  .event {
    @apply col-span-10;
  }
  .timeline-line {
    left: 2rem;
  }
}

.list-container {
  max-height: 50rem;
  @apply list-disc pl-4  transform transition duration-300 ease-in-out;
}
</style>
