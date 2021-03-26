<template>
  <div class="flex flex-col gap-5">
    <timeline-event>
      <template #date> 04/20 </template>
      <h3 class="flex flex-wrap items-center gap-2 mb-1">
        Data Analyst, Carpe Data
        <span
          ><p class="text-sm inline">- Santa Barbara</p>
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
        </span>
      </h3>
      <ul class="list-disc pl-4">
        <li>
          Start by creating regular expressions to flag risk characteristics for
          businesses.
        </li>
        <li>
          Use Python to automate various job tasks like CSV formatting, data
          cleansing, and other ad hoc solutions.
        </li>
        <li>
          Learned SQL to find business areas where product coverage and accuracy
          was most lacking in a DB of over 10 million records.
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
        Web Dev Student, LFZ
        <span
          ><p class="text-sm inline">- Irvine, CA</p>
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
          <li>
            Begin with learning HTML, CSS, and JavaScript (ES5), Flexbox ftw,
            and jQuery.
          </li>
          <li>
            Learn React and ES6 once familiarizing ourself with vanilla
            JavaScript, trying to understand the basics of web dev.
          </li>
          <li>
            Taught SQL and PHP for developing backends for our applications. I
            was familiar with SQL so that was straightforward, PHP was
            interesting and learned Express.js as a challenge for my final
            project
          </li>
        </ul>
      </span>
    </timeline-event>
    <timeline-event>
      <template #date> 01/20 </template>
      <h3 class="flex flex-wrap items-center gap-2 mb-1">
        Data Science Instructor, Tae Coding
      </h3>
      <span>
        <ul class="list-disc pl-4">
          <li>
            Learned Angular, MongoDB, and AWS Amplify to assist in the
            development of an internal application for class management.
          </li>
          <li>
            Brushing up my Pandas and Python skills to teach high schoolers
            preparing for programming olympiads.
          </li>
          <li>
            Private tutor and lead group classes for statistics and data
            science.
          </li>
          <li>
            Help more than 20 students receive one or more certificates from
            Edx.
          </li>
        </ul>
      </span>
    </timeline-event>
    <timeline-event :hideTimeline="true">
      <template #date> 08/20 </template>
      <h3 class="flex flex-wrap items-center gap-2 mb-1">
        Software Engineer, SmartSpace AI
        <span
          ><p class="text-sm inline">- Costa Mesa, CA</p>
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
          <p class="text-sm inline text-blue-300">(Current)</p></span
        >
      </h3>
      <span>
        <ul class="list-disc pl-4">
          <li>
            Use Angular and D3.js to create over 30+ reusable visualizations of
            time series data.
          </li>
          <li>
            Use Python and AWS Sagemaker to create over 1000+ computer vision
            training data labeling jobs.
          </li>
          <li>
            Develop full stack application consisting of Laravel, Vue.js, and
            MariaDB. Using Docker/Docker Compose and various services like
            Nginx, websockets, and PhpMyAdmin.
          </li>
          <li>
            Assist in devops by maintaining migrations/seeders, setting up CI/CD
            pipeline using Bitbucket actions.
          </li>
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
