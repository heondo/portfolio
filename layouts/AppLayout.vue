<template>
  <div class="overflow-hidden bg-gray-300">
    <div class="bg-gray-800 pb-32 z-10">
      <nav-bar></nav-bar>
      <slot name="title"></slot>
    </div>
    <main class="-mt-32 px-2 md:px-4">
      <div class="max-w-6xl mx-auto pb-12">
        <!-- Replace with your content -->
        <div
          class="bg-white rounded-md shadow-xl text-gray-800 px-4 sm:px-7 md:px-10 relative z-10 py-2 sm:py-4 sm:px-6"
        >
          <slot name="content"></slot>
        </div>
        <!-- /End replace -->
      </div>
    </main>
    <!-- <div class="absolute bottom-0 z-0">Hello</div> -->
    <app-footer></app-footer>
  </div>
</template>
<script>
import NavBar from '~/components/Navbar'
import AppFooter from '~/components/Footer'
export default {
  components: {
    NavBar,
    AppFooter,
  },
}
</script>
<style>
/* .section-header {
  @apply text-lg font-semibold mb-4 text-gray-700;
  @screen md {
    @apply text-xl;
  }
} */

/* .section-header:md {
  @apply text-2xl;
} */
</style>
