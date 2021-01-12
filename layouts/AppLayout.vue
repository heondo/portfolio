<template>
  <div class="overflow-hidden">
    <div class="bg-gray-800 pb-32">
      <nav-bar></nav-bar>
      <slot name="title"></slot>
    </div>
    <main class="relative -mt-32 px-2 sm:px-0">
      <div class="max-w-6xl mx-auto pb-12">
        <!-- Replace with your content -->
        <div class="bg-white shadow px-10 relative z-10 py-2 sm:py-4 sm:px-6">
          <slot name="content"></slot>
        </div>
        <div class="rotated-block"></div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>
<script>
import NavBar from '~/components/Navbar'
export default {
  components: {
    NavBar,
  },
}
</script>
<style>
.rotated-block {
  @apply absolute bg-gray-300 py-2 left-0 z-0;
  height: 200vh;
  width: 200vw;
  margin-top: -40vh;
  -ms-transform: rotate(-10deg); /* IE 9 */
  -webkit-transform: rotate(-10deg); /* Safari */
  transform: rotate(-10deg);
}
</style>
