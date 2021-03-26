<template>
  <div class="flex flex-col gap-5">
    <timeline-event>
      <template #date> 04/12 </template>
      <h3 class="flex flex-wrap items-center gap-2 mb-1">
        Data Analyst, Carpe Data -
        <span
          ><p class="text-sm inline">Santa Barbara</p>
          <svg
            class="map-marker"
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
            /></svg
        ></span>
      </h3>
      <ul class="list-disc pl-4">
        <li>
          Start by creating regular expressions to flag risk characteristics for
          businesses
        </li>
        <li>
          Use Python to automate various job tasks like CSV formatting, data
          cleansing, and other ad hoc solutions
        </li>
        <li>
          Learned SQL to find business areas where product coverage and accuracy
          was most lacking in a DB of over 10 million records
        </li>
        <li>
          Created data collection process for DA team using Python and SQL.
          Designed new process for validating and storing data to more
          accurately assess our product and increase validation speed.
        </li>
      </ul>
    </timeline-event>
    <!-- <span class="grid grid-cols-12 gap-2 gap-y-5 relative">
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
        <h3 class="flex flex-wrap items-center gap-2 mb-1">
          Data Analyst, Carpe Data -
          <svg
            class="map-marker"
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
          <ul class="list-disc pl-4">
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </span> -->
    <timeline-event>
      <template #date> 09/19 </template>
      <h3 class="flex flex-wrap items-center gap-2 mb-1">
        Web Dev Student, LFZ -
        <span
          ><p class="text-sm inline">Irvine, CA</p>
          <svg
            class="map-marker"
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
            /></svg
        ></span>
      </h3>
      <span>
        <ul class="list-disc pl-4">
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
        </ul>
      </span>
    </timeline-event>
    <timeline-event>
      <template #date> 01/20 </template>
      <h3 class="flex flex-wrap items-center gap-2 mb-1">
        Data Analyst, Carpe Data -
        <span
          ><p class="text-sm inline">Santa Barbara</p>
          <svg
            class="map-marker"
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
            /></svg
        ></span>
      </h3>
      <span>
        <ul class="list-disc pl-4">
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
        </ul>
      </span>
    </timeline-event>
    <timeline-event :hideTimeline="true">
      <template #date> 04/20 </template>
      <h3 class="flex flex-wrap items-center gap-2 mb-1">
        Data Analyst, Carpe Data -
        <span
          ><p class="text-sm inline">Santa Barbara</p>
          <svg
            class="map-marker"
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
            /></svg
        ></span>
      </h3>
      <span>
        <ul class="list-disc pl-4">
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
        </ul>
      </span>
    </timeline-event>
  </div>
  <!-- <span class="grid grid-cols-12 gap-2 gap-y-5 relative">
    <div class="timeline-line">,</div>
    
   
   
  </span> -->
</template>
<script>
import TimelineEvent from '~/components/TimelineEvent'
export default {
  components: {
    TimelineEvent,
  },
}
</script>
<style scoped>
.map-marker {
  @apply h-4 w-4 inline;
}
</style>
