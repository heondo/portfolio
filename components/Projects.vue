<template>
  <div>
    <div class="mb-2">
      When I first started developing I deployed quite a few projects, I wanted
      to practice the process of starting an application from scratch each time
      and to try something new each time. I would try one project with no
      styling libraries, Angular, MongoDB, Redux, and just whatever seemed
      useful. I feel like taking them down was only appropriate and any future
      applications would be a more serious endeavor using the proper tools for
      each. Old projects can be seen in my
      <a href="https://github.com/heondo" class="underline">Github</a>.
    </div>
    <div>Trying to find the time again to work on some new projects.</div>
    <div class="flex flex-col gap-3 px-4">
      <span
        v-for="project in projects"
        :key="project.name"
        class="border-1 p-2 grid grid-cols-1 md:grid-cols-2 justify-between mx-auto max-w-3xl"
      >
        <!-- Left hand side -->
        <div class="flex flex-col gap-2 pr-4">
          <!-- Mobile App Icon -->
          <svg
            v-if="project.target === 'mobile'"
            class="w-12 h-12 p-1 rounded-md text-gray-200 bg-blue-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="#2c5282"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <div class="text-xl font-bold">
            {{ project.name }}
          </div>
          <div>
            Mobile application to help memorize the dreadful accupuncture
            points.
          </div>
          <button class="w-auto bg-gray-200 rounded-sm">More Info</button>
        </div>
        <!-- Right hand project image -->
        <div>Hello again</div>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        // {
        //   name: 'Qi 361',
        //   baseUrl: 'https://github.com/heondo/qi361',
        //   github: 'https://github.com/heondo/qi361',
        //   target: 'mobile',
        //   description:
        //     'React Native application to help memorize accupuncture points',
        // },
        // {
        //   name: 'One More',
        //   github: 'https://github.com/heondo/qi361',
        //   description:
        //     'React Native application to help memorize accupuncture points',
        // },
      ],
    }
  },
}
</script>
