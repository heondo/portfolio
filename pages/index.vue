<template>
  <app-layout>
    <template #title>
      <app-header>
        <div
          :class="{ 'opacity-100': headerVisible }"
          class="flex flex-col items-center transition duration-700 ease-linear opacity-0"
        >
          <h2 class="text-3xl sm:text-6xl font-bold text-white">Heondo Kim</h2>
          <span class="text-xl sm:text-3xl text-blue-200"
            >Software Engineer</span
          >
        </div>
      </app-header>
    </template>
    <template #content>
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
      <div>what is up my guys</div>
      <div>what is up my guys</div>
    </template>
  </app-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import AppLayout from '~/layouts/AppLayout.vue'
import AppHeader from '~/components/AppHeader.vue'
export default Vue.extend({
  components: {
    AppLayout,
    AppHeader,
  },
  data() {
    return {
      headerVisible: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.headerVisible = true
    }, 200)
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
