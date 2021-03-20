<template>
  <div>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">Pic</div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a
                  href="#"
                  class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Dashboard</a
                >

                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Team</a
                >

                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Projects</a
                >

                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Calendar</a
                >

                <a
                  href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Reports</a
                >
              </div>
            </div>
          </div>

          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              class="bg-gray-700 inline-flex items-center justify-center p-2 rounded-3xl text-gray-500 hover:text-white hover:bg-gray-600 transition duration-150 ease-in-out"
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="menuOpen = !menuOpen"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div v-show="menuOpen" class="md:hidden" id="mobile-menu">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        I wnat a pop up here with a transition instead
      </div>
    </nav>

    <main class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <slot name="content"></slot>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuOpen: false,
    }
  },
}
</script>
<style scoped></style>
