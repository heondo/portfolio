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
          <div
            class="text-3xl sm:text-4xl font-bold text-white transition ease-in-out duration-300"
          >
            Heondo Kim
          </div>
          <sub class="text-white font-semibold text-lg sm:text-xl mt-1 mb-4">
            ( hē &middot; ôn &middot; dō )</sub
          >
          <span class="text-xl sm:text-2xl italic font-semibold text-blue-200"
            >Software Engineer</span
          >
        </div>
        <!-- </transition> -->
      </app-header>
    </template>
    <template #content>
      <div
        :class="{
          'opacity-100 translate-x-0': headerVisible,
          '-translate-x-6': !headerVisible,
        }"
        class="transition duration-500 ease-linear opacity-0 transform"
      >
        <app-about-me id="about"></app-about-me>
        <divider></divider>
        <app-projects id="projects"></app-projects>
      </div>
    </template>
  </app-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import AppLayout from '~/layouts/AppLayout.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppAboutMe from '~/components/AboutMe.vue'
import AppProjects from '~/components/Projects.vue'
import Divider from '~/components/Divider.vue'

export default Vue.extend({
  components: {
    AppLayout,
    AppHeader,
    AppAboutMe,
    AppProjects,
    Divider,
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
  head() {
    return {
      title: 'Heondo Kim',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Heondo Kim, Software Engineer ',
        },
      ],
    }
  },
})
</script>

<style></style>
