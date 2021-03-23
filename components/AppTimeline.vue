<template>
  <span class="grid grid-cols-12 gap-2 gap-y-5 relative">
    <div class="timeline-line">,</div>
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
      <div>04/18</div>
    </div>
    <div class="event">
      <h3>Data Analyst, Carpe Data</h3>
      <span> Description of event </span>
    </div>
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
      <div>08/19</div>
    </div>
    <div class="event">
      <h3>Learning Web Dev</h3>
      LFZ
    </div>
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
      <div>01/20</div>
    </div>
    <div class="event">
      <h3>Data Science Instructor</h3>
      <span> Tae coding </span>
    </div>
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
      <div>08/20</div>
    </div>
    <div class="event">
      <h3>Software Developer</h3>
      <span> Smartspace ai </span>
    </div>
  </span>
</template>
<script>
export default {
  components: {},
}
</script>
<style scoped>
.timeline-line {
  content: '';
  height: 85%;
  left: 4.7%;
  top: 6.2%;
  z-index: 0;
  opacity: 0.8;
  width: 2px;
  @apply absolute bg-gray-300;
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
    left: 3.65%;
    top: 7%;
    height: 85%;
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

.circle {
  @apply bg-green-500 h-8 w-8 rounded-2xl p-1 shadow-xl;
}

.date > div:last-child {
  @apply text-sm font-semibold;
}
</style>
