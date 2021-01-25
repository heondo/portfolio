<template>
  <div>
    <!-- <div>All - React - Vue - Angular</div> -->
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
