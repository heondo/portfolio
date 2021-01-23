<template>
  <section class="my-2">
    <h2 class="section-header">Skill</h2>
    <span class="flex gap-1 text-sm">
      <!-- <div>Vue</div>
      <div>React</div> -->
      <div :key="skill" v-for="skill in skills">
        {{ skill.name }} - {{ skill.icon }}
      </div>
    </span>
    <!-- <div class="about-image justify-content-center">
        <img
          class="m-auto object-contain border-2 border-solid border-gray-800 rounded-md p-2"
          src="~/assets/ezgif.com-gif-maker.webp"
          alt="profile picture for heondo kim"
        />
      </div> -->
  </section>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        { name: 'React', icon: 'someicon' },
        { name: 'Angular', icon: 'someicon' },
        { name: 'Vue', icon: 'someicon' },
        { name: 'Laravel', icon: 'someicon' },
        { name: 'Express', icon: 'someicon' },
        { name: 'Node.js', icon: 'someicon' },
        { name: 'Postgres', icon: 'someicon' },
        { name: 'MySQL', icon: 'someicon' },
        { name: 'MongoDB', icon: 'someicon' },
        { name: 'Docker', icon: 'someicon' },
        { name: 'React Native', icon: 'someicon' },
        { name: 'PHP', icon: 'someicon' },
      ],
    }
  },
}
</script>
