<template>
  <div class="relative max-w-4xl mx-auto">
    <div
      class="border-gray-500 z-10 absolute h-full timeline-line"
      style="left: 15px"
    ></div>
    <ul class="list-none m-0 p-0 flex flex-col gap-4">
      <timeline-event>
        <template #title> Apr 2018 - Data Analyst, Carpe Data </template>
        <template #list>
          <li>
            Start by creating regular expressions to flag risk characteristics
            for businesses.
          </li>
          <li>
            Use Python to automate various job tasks like CSV formatting, data
            cleansing, and other ad hoc solutions.
          </li>
          <li>
            Learned SQL to find business areas where product coverage and
            accuracy was most lacking in a DB of over 10 million records.
          </li>
          <li>
            Created data collection process for DA team using Python and SQL.
            Designed new process for validating and storing data to more
            accurately assess our product and increase validation speed.
          </li>
        </template>
      </timeline-event>
      <timeline-event>
        <template #title> Sep 2019 - Web Dev Student, LearningFuze </template>
        <template #list>
          <li>
            Begin with learning HTML, CSS, and JavaScript (ES5), Flexbox ftw,
            and jQuery.
          </li>
          <li>
            Learned React and ES6 once familiarizing ourself with vanilla
            JavaScript, trying to understand the basics of web dev.
          </li>
          <li>
            Used SQL and PHP initially for developing our backends, it was
            straightforward, but found out that Node.js was very popular and
            would let me utilize my existing JavaScript knowledge.
          </li>
        </template>
      </timeline-event>
      <timeline-event>
        <template #title>
          Jan 2020 - Data Science Instructor, Tae Coding
        </template>
        <template #list>
          <li>
            Developed an application for class management using Angular,
            MongoDB, and AWS Amplify to assist in the development.
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
        </template>
      </timeline-event>
      <timeline-event>
        <template #title>
          Aug 2020 - Software Engineer, SmartSpace AI
          <p class="ml-1 text-blue-300 inline">(Current)</p>
        </template>
        <template #list>
          <li>
            Develop and deploy full stack application consisting of Laravel,
            Vue.js, and MariaDB. Using Docker Compose and various services like
            Nginx, websockets, certbot.
          </li>
          <li>
            Assist in devops by maintaining migrations/seeders, setting up CI/CD
            pipeline using Bitbucket actions.
          </li>
          <li>
            Developer over 30+ reusable visualizations of time series data using
            Angular, D3.js, and Chart.js.
          </li>
          <li>
            Create over 1000+ computer vision training data labeling jobs using
            Python and AWS Sagemaker.
          </li>
        </template>
      </timeline-event>
    </ul>
  </div>
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

.timeline-line {
  top: 2rem;
  border-right-width: 2px;
}

@screem sm {
  .timeline-line {
    top: 0;
  }
}
</style>
