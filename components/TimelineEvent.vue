<template>
  <span class="grid grid-cols-12 gap-2 gap-y-5 relative">
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
      <div :class="[eventExpanded ? '' : 'h-24 overflow-y-hidden']">
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
  </span>
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
  },
  data() {
    return {
      eventExpanded: false,
    }
  },
}
</script>
<style scoped>
.expand-container svg {
  @apply transition duration-300 ease-in-out;
}

.expand-container:hover svg {
  @apply transform -translate-y-1 scale-105 shadow-xl font-bold;
}

.timeline-line {
  content: '';
  height: 115%;
  left: 1.2rem;
  top: 52%;
  z-index: 0;
  width: 2px;
  @apply absolute bg-gray-200;
}

.date {
  @apply col-span-3 flex items-center rounded-2xl p-1 gap-2 z-10;
}

.event {
  background-color: #3b4252;
  @apply col-span-9 p-4 text-white rounded-lg shadow-lg;
}

.event > h3 {
  @apply font-semibold uppercase;
}

@screen sm {
  .date {
    @apply p-4;
  }

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
  .date {
    @apply col-span-2 p-4;
  }

  .event {
    @apply col-span-10;
  }
  .timeline-line {
    left: 2rem;
  }
}

.circle {
  @apply bg-green-500 h-8 w-8 rounded-2xl p-1 shadow-xl;
}

.date > div:last-child {
  @apply text-sm font-semibold;
}
</style>
