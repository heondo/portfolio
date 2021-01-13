<template>
  <!-- <div class=""> -->
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="border-b border-gray-700">
        <div class="flex items-center justify-between h-16 px-4 sm:px-0">
          <div class="flex items-center">
            <nuxt-link to="/" class="flex-shrink-0 text-white"
              >Heondo</nuxt-link
            >

            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <nuxt-link
                  :class="{
                    active: isCurrentRoute('/', '#about'),
                  }"
                  to="/#about"
                  class="navbar-link"
                  >About</nuxt-link
                >
                <nuxt-link
                  :class="{
                    active: isCurrentRoute('/', '#projects'),
                  }"
                  to="/#projects"
                  class="navbar-link"
                  >Projects</nuxt-link
                >
                <nuxt-link
                  :class="{
                    active: isCurrentRoute('/', '#resume'),
                  }"
                  to="/#resume"
                  class="navbar-link"
                  >Resume</nuxt-link
                >
                <nuxt-link
                  :class="{
                    active: isCurrentRoute('/', '#contact'),
                  }"
                  to="/#contact"
                  class="navbar-link"
                  >Contact</nuxt-link
                >
                <nuxt-link
                  :class="{
                    active: isCurrentRoute('/blogs'),
                  }"
                  to="/blogs"
                  class="navbar-link"
                  >Blog</nuxt-link
                >
              </div>
            </div>
          </div>

          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <nuxt-link
              :class="{
                active: isCurrentRoute('/blogs'),
              }"
              to="/blogs"
              class="navbar-link"
              >Blog</nuxt-link
            >
            <button
              class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              @click="toggleMenu()"
            >
              <span class="sr-only">Open main menu</span>
              <!--
                  Heroicon name: menu

                  Menu open: "hidden", Menu closed: "block"
                -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!--
                  Heroicon name: x

                  Menu open: "block", Menu closed: "hidden"
                -->
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--
        Mobile menu, toggle classes based on menu state.

        Open: "block", closed: "hidden"
      -->
    <div v-show="isOpen" class="border-b border-gray-700 md:hidden">
      <div class="px-2 py-3 space-y-1 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <nuxt-link
          :class="{
            active: isCurrentRoute('/', '#about'),
          }"
          to="/#about"
          class="navbar-link"
          >About</nuxt-link
        >
        <nuxt-link
          :class="{
            active: isCurrentRoute('/', '#projects'),
          }"
          to="/#projects"
          class="navbar-link"
          >Projects</nuxt-link
        >
        <nuxt-link
          :class="{
            active: isCurrentRoute('/', '#resume'),
          }"
          to="/#resume"
          class="navbar-link"
          >Resume</nuxt-link
        >
        <nuxt-link
          :class="{
            active: isCurrentRoute('/', '#contact'),
          }"
          to="/#contact"
          class="navbar-link"
          >Contact</nuxt-link
        >
        <!-- <nuxt-link
          :class="{
            active: isCurrentRoute('/blogs'),
          }"
          to="/blogs"
          class="navbar-link"
          >Blog</nuxt-link
        > -->
      </div>
    </div>
  </nav>
  <!-- <header class="py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-white">Dashboard</h1>
      </div>
    </header> -->
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    currentPath() {
      return this.$route.path
    },
    currentHash() {
      return this.$route.hash
    },
  },
  //   mounted() {
  //     console.log(this.$route)
  //   },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    isCurrentRoute(path = '', hash = '') {
      if (hash === '#about' && !this.currentHash && this.currentPath === '/')
        return true
      if (this.currentPath === path && this.currentHash === hash) {
        return true
      }
      return false
    },
  },
}
</script>
<style>
.navbar-link {
  @apply text-gray-300 block px-3 py-2 rounded-md text-base font-medium;
}
.navbar-link:hover {
  @apply bg-gray-700 text-white;
}

.navbar-link.active {
  @apply bg-gray-600 text-white block px-3 py-2 rounded-md text-base font-medium;
}
</style>
