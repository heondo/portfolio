<template>
  <div>
    <nav class="fixed bg-gray-800 text-white z-10 w-full">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a class="flex-shrink-0 text-white font-bold" href="#">HK</a>
            <!-- Desktop nav -->
            <nav class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <div class="lg:ml-6 lg:flex lg:space-x-8">
                  <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-300" -->
                  <a
                    href="#about"
                    class="desktop-nav-link border-transparent"
                    :class="{
                      'border-blue-400': $route.hash === '#about',
                    }"
                  >
                    About
                  </a>
                  <a
                    href="#skills"
                    class="desktop-nav-link border-transparent"
                    :class="{
                      'border-blue-400': $route.hash === '#skills',
                    }"
                  >
                    Skills
                  </a>
                  <a
                    href="#timeline"
                    class="desktop-nav-link border-transparent"
                    :class="{
                      'border-blue-400': $route.hash === '#timeline',
                    }"
                  >
                    Timeline
                  </a>
                  <a
                    href="#resume"
                    class="desktop-nav-link border-transparent"
                    :class="{
                      'border-blue-400': $route.hash === '#resume',
                    }"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </nav>
          </div>

          <!-- Mobile menu button -->
          <div class="-mr-2 flex md:hidden">
            <button
              type="button"
              class="bg-white bg-opacity-25 text-white inline-flex items-center justify-center p-1 rounded-md text-gray-500 hover:text-white hover:bg-gray-600 transition duration-150 ease-in-out"
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="menuOpen = !menuOpen"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-5 w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <transition
        enter-active-class="ease-out duration-300"
        enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="ease-in duration-200"
        leave-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div v-show="menuOpen" class="md:hidden fixed inset-0 overflow-y-auto">
          <div class="flex pt-4 px-4 text-center">
            <!-- background overlay -->
            <div
              class="fixed inset-0 transition-opacity"
              aria-hidden="true"
              @click="menuOpen = !menuOpen"
            >
              <div class="absolute inset-0"></div>
            </div>
            <!-- actual content -->
            <div
              class="z-20 bg-gray-700 text-white rounded-lg px-4 py-2 mx-auto max-w-2xl shadow-xl transition-all"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div class="flex space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a
                  href="#about"
                  :class="{
                    'bg-gray-600': $route.hash === '#about',
                  }"
                  class="nav-link"
                  >About</a
                >
                <a
                  href="#skills"
                  :class="{
                    'bg-gray-600': $route.hash === '#skills',
                  }"
                  class="nav-link"
                  >Skills</a
                >
                <a
                  href="#timeline"
                  :class="{
                    'bg-gray-600': $route.hash === '#timeline',
                  }"
                  class="nav-link"
                  >Timeline</a
                >
                <a
                  href="#resume"
                  :class="{
                    'bg-gray-600': $route.hash === '#resume',
                  }"
                  class="nav-link"
                  >Resume</a
                >
              </div>
            </div>
          </div>
        </div>
      </transition>
    </nav>

    <main class="bg-gray-800 text-white">
      <div class="">
        <!-- Replace with your content -->
        <div class="pt-16 pb-8">
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
<style scoped>
.nav-link {
  @apply px-3 py-2 rounded-md text-sm font-medium transition ease-in-out duration-300;
}

.nav-link:hover {
  @apply bg-gray-600;
}

.desktop-nav-link {
  @apply border-b-2 inline-flex items-center px-2 py-2 text-sm font-medium transition ease-in-out duration-300;
}

.desktop-nav-link:hover {
  @apply border-gray-300 text-gray-300;
}
</style>
