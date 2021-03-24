<template>
  <div class="flex flex-col gap-5">
    <span class="grid grid-cols-12 gap-2 gap-y-5 relative">
      <div class="timeline-line"></div>
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
        <h3>
          Data Analyst, Carpe Data -
          <svg
            class="h-6 w-6 inline"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p class="text-sm inline">Santa Barbara</p>
        </h3>
        <span>
          <ul class="list-decimal">
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </span>
      </div></span
    >
    <span class="grid grid-cols-12 gap-2 gap-y-5 relative">
      <div class="timeline-line translate-y-4 transform"></div>
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
    </span>
    <span class="grid grid-cols-12 gap-2 gap-y-5 relative">
      <div class="timeline-line translate-y-4 transform"></div>

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
    </span>
    <span class="grid grid-cols-12 gap-2 gap-y-5 relative">
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
  </div>
  <!-- <span class="grid grid-cols-12 gap-2 gap-y-5 relative">
    <div class="timeline-line">,</div>
    
   
   
  </span> -->
</template>
<script>
export default {
  components: {},
}
</script>
<style scoped>
.timeline-line {
  content: '';
  height: 100%;
  left: 1.2rem;
  top: 42.5%;
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
    left: 3.7%;
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
