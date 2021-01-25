<template>
  <div>
    <div>
      When I first started developing I deployed quite a few projects, I wanted
      to practice the process of starting an application from scratch each time
      and to try something new each time. I would try one project with no
      styling libraries, Angular, MongoDB, Redux, and just whatever seemed
      useful. I feel like taking them down was only appropriate and any future
      applications would be a more serious endeavor using the proper tools for
      each. Old projects can be seen in my
      <a href="https://github.com/heondo" class="underline">Github</a>.
    </div>
    <div class="flex flex-col gap-3">
      <span
        v-for="project in projects"
        :key="project.name"
        class="border-1 p-2 flex justify-between"
      >
        <div>
          <a :href="project.baseUrl">
            <p class="font-bold uppercase text-xl">{{ project.name }}</p>
          </a>
          <p>{{ project.description }}</p>
        </div>
        <div class="flex">
          <span>Project Image</span>
        </div>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Qi 361',
          baseUrl: 'https://github.com/heondo/qi361',
          github: 'https://github.com/heondo/qi361',
          description:
            'React Native application to help memorize accupuncture points',
        },
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
