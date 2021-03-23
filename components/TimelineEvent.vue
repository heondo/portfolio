<template>
  <div class="grid grid-cols-12 gap-2">
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
    <div class="event">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.date {
  @apply col-span-4 flex items-center rounded-2xl p-1 gap-2 z-10;
}

.event {
  background-color: #3b4252;
  @apply col-span-8 p-4 text-white rounded-lg;
}

@screen sm {
  .date {
    @apply col-span-3 p-4;
  }

  .event {
    @apply col-span-9;
  }

  .timeline-line {
    left: 1.9rem;
    top: 1.9rem;
  }
}

@screen md {
  .date {
    @apply col-span-2 p-4;
  }

  .event {
    @apply col-span-10;
  }
}

.date > .circle {
  @apply bg-blue-400 h-8 w-8 rounded-2xl p-1;
}

.date > div:last-child {
  @apply text-sm;
}
</style>
