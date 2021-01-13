<template>
  <app-layout>
    <template #title>
      <app-header>
        <div
          :class="{
            'opacity-100 translate-y-0': headerVisible,
            '-translate-y-6': !headerVisible,
          }"
          class="flex flex-col items-center transition duration-500 ease-linear opacity-0 transform"
        >
          <h2
            class="text-3xl sm:text-4xl font-bold text-white transition ease-in-out duration-300"
          >
            Heondo Kim
          </h2>
          <span class="text-xl sm:text-2xl italic font-semibold text-blue-200"
            >Software Engineer</span
          >
        </div>
        <!-- </transition> -->
      </app-header>
    </template>
    <template #content>
      <app-about-me id="about"></app-about-me>
      <app-projects id="projects"></app-projects>
    </template>
  </app-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import AppLayout from '~/layouts/AppLayout.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppAboutMe from '~/components/AboutMe.vue'
import AppProjects from '~/components/Projects.vue'
export default Vue.extend({
  components: {
    AppLayout,
    AppHeader,
    AppAboutMe,
    AppProjects,
  },
  data() {
    return {
      headerVisible: false,
    }
  },
  mounted() {
    // setTimeout(() => {
    this.headerVisible = true
    // }, 200)
    // this.headerVisible = true
  },
})
</script>

<style></style>
