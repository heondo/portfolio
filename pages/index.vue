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
            ( hē &middot; ôn &middot; dōh )</sub
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
        <section-layout id="about">
          <template #header> About </template>
          <template #sectionContent>
            <app-about-me></app-about-me>
          </template>
        </section-layout>
        <!-- <app-about-me id="about"></app-about-me> -->
        <divider></divider>
        <section-layout id="projects">
          <template #header> Projects </template>
          <template #sectionContent>
            <app-projects></app-projects>
          </template>
        </section-layout>
        <divider></divider>
        <section-layout id="tools">
          <template #header> Languages, Frameworks, and Libraries </template>
          <template #sectionContent>
            <app-skills></app-skills>
          </template>
        </section-layout>
        <divider></divider>
        <!-- Resume -->
        <section-layout id="resume">
          <template #header> Resume </template>
          <template #sectionContent>
            <div class="flex justify-center">
              <iframe
                class="rounded-xl mb-2"
                src="https://drive.google.com/file/d/13fR9a1kTlyQtHKRe60S_YbUUE2mvOq3L/preview"
                width="80%"
                height="400"
              ></iframe>
            </div>
          </template>
        </section-layout>
        <divider></divider>
        <!-- End of resume -->
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
import AppSkills from '~/components/SkillsSection.vue'
import Divider from '~/components/Divider.vue'
import SectionLayout from '~/layouts/SectionLayout.vue'

export default Vue.extend({
  components: {
    AppLayout,
    AppHeader,
    AppAboutMe,
    AppProjects,
    Divider,
    AppSkills,
    SectionLayout,
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
