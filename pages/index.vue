<template>
  <app-layout>
    <template #title>
      <app-header>
        <!-- <transition
          enter-class="transform ease-out duration-300 transition"
          enter-active-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
          leave-class="transition ease-in duration-100"
          leave-active-class="opacity-100"
          leave-to-class="opacity-0"
        > -->
        <div
          :class="{
            'opacity-100 translate-y-0': headerVisible,
            '-translate-y-6': !headerVisible,
          }"
          class="flex flex-col items-center transition duration-500 ease-linear opacity-0 transform"
        >
          <h2 class="text-3xl sm:text-5xl font-bold text-white">Heondo Kim</h2>
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
      <!-- <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div>
      <div>what is up my guys</div> -->
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
