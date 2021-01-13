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
      <div class="relative">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-500"></div>
        </div>
        <div class="relative flex justify-center">
          <span class="bg-white px-2 text-gray-700">
            <svg
              class="h-5 w-5 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fill="#6B7280"
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
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
