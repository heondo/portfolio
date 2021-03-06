<template>
  <div class="bg-gray-800 text-white min-h-screen">
    <nav class="fixed bg-gray-800 z-10 w-full shadow-md">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a class="app-logo" href="/">HK</a>
            <!-- Desktop nav -->
            <nav class="hidden md:block">
              <div class="ml-10 flex items-baseline">
                <div class="lg:ml-6 flex lg:space-x-4">
                  <a
                    href="/#about"
                    class="desktop-nav-link border-transparent"
                    :class="{
                      'border-blue-400': $route.hash === '#about',
                    }"
                  >
                    About
                  </a>
                  <a
                    href="/#projects"
                    class="desktop-nav-link border-transparent"
                    :class="{
                      'border-blue-400': $route.hash === '#projects',
                    }"
                  >
                    Projects
                  </a>
                  <a
                    href="/#skills"
                    class="desktop-nav-link border-transparent"
                    :class="{
                      'border-blue-400': $route.hash === '#skills',
                    }"
                  >
                    Skills
                  </a>
                  <a
                    href="/#timeline"
                    class="desktop-nav-link border-transparent"
                    :class="{
                      'border-blue-400': $route.hash === '#timeline',
                    }"
                  >
                    Timeline
                  </a>
                  <a
                    href="/#resume"
                    class="desktop-nav-link border-transparent"
                    :class="{
                      'border-blue-400': $route.hash === '#resume',
                    }"
                  >
                    Resume
                  </a>
                  <a
                    href="/articles"
                    class="desktop-nav-link border-transparent"
                    :class="{
                      'border-blue-400': $route.path.startsWith('/articles'),
                    }"
                  >
                    Articles
                  </a>
                </div>
              </div>
            </nav>
          </div>

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              type="button"
              class="
                text-white
                inline-flex
                items-center
                justify-center
                p-1
                rounded-md
                hover:text-white hover:bg-gray-700
                transition
                duration-150
                ease-in-out
              "
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="menuOpen = !menuOpen"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-5 w-7"
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
      <transition
        enter-active-class="ease-out duration-300"
        enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="ease-in duration-200"
        leave-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div v-show="menuOpen" class="md:hidden fixed inset-0 overflow-y-auto">
          <div class="flex pt-4 px-2 text-center">
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
              class="
                z-20
                bg-gray-900
                text-white
                rounded-lg
                px-2
                py-2
                mx-auto
                max-w-2xl
                shadow-xl
                transition-all
              "
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div class="flex flex-wrap w-full justify-evenly">
                <a
                  href="/#about"
                  :class="{
                    'bg-gray-700': $route.hash === '#about',
                  }"
                  class="nav-link"
                >
                  About
                </a>
                <a
                  href="/#projects"
                  :class="{
                    'bg-gray-700': $route.hash === '#projects',
                  }"
                  class="nav-link"
                >
                  Projects
                </a>
                <a
                  href="/#skills"
                  :class="{
                    'bg-gray-700': $route.hash === '#skills',
                  }"
                  class="nav-link"
                >
                  Skills
                </a>
                <a
                  href="/#timeline"
                  :class="{
                    'bg-gray-700': $route.hash === '#timeline',
                  }"
                  class="nav-link"
                >
                  Timeline
                </a>
                <a
                  href="/#resume"
                  :class="{
                    'bg-gray-700': $route.hash === '#resume',
                  }"
                  class="nav-link"
                >
                  Resume
                </a>
                <a
                  href="/articles"
                  :class="{
                    'bg-gray-700': $route.path.startsWith('/articles'),
                  }"
                  class="nav-link"
                >
                  Articles
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </nav>

    <main class="">
      <div class="">
        <div class="pt-16">
          <slot name="content"></slot>
        </div>
      </div>
    </main>

    <footer>
      <div class="max-w-4xl mx-auto px-6 sm:px-8 pb-8">
        <app-footer></app-footer>
      </div>
    </footer>
  </div>
</template>
<script>
import AppFooter from '~/components/AppFooter'
export default {
  components: {
    AppFooter,
  },
  data() {
    return {
      menuOpen: false,
    }
  },
}
</script>
<style scoped>
.app-logo {
  @apply transform;
  @apply duration-300;
  @apply text-xl;
  @apply ease-in-out;
  @apply flex-shrink-0;
  @apply text-white;
  @apply font-bold;
}

.app-logo:hover {
  @apply transition;
  @apply scale-125;
  @apply text-blue-300;
}

.nav-link {
  @apply px-3;
  @apply py-2;
  @apply rounded-md;
  @apply text-sm;
  @apply font-medium;
  @apply transition;
  @apply ease-in-out;
  @apply duration-300;
}

.nav-link:hover {
  @apply bg-gray-600;
}

.desktop-nav-link {
  @apply border-b-2;
  @apply inline-flex;
  @apply items-center;
  @apply px-1;
  @apply py-2;
  @apply text-sm;
  @apply font-medium;
  @apply transition;
  @apply ease-in-out;
  @apply duration-300;
}

.desktop-nav-link:hover {
  @apply border-gray-300;
  @apply text-gray-300;
}
</style>
