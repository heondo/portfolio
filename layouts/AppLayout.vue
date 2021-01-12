<template>
  <div>
    <div class="bg-gray-800 pb-32">
      <nav-bar></nav-bar>
      <slot name="title"></slot>
    </div>
    <main class="-mt-32">
      <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <slot name="content"></slot>
        </div>
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
