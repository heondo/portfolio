<template>
  <div>
    <li
      v-for="p in projects"
      :key="p.slug"
      class="list-none flex sm:flex-row flex-col gap-4 my-3"
    >
      <!-- thumbnail -->
      <nuxt-link
        class="
          m-auto
          h-36
          w-auto
          overflow-hidden
          flex
          justify-center
          items-center
          rounded-md
        "
        :to="{ name: 'projects-slug', params: { slug: p.slug } }"
      >
        <nuxt-img
          provider="cloudinary"
          class="object-cover object-top rounded-md"
          :src="p.thumbnail"
        />
      </nuxt-link>
      <!-- end thumbnail -->
      <div class="flex flex-col gap-1">
        <nuxt-link
          class="
            text-lg
            font-bold
            uppercase
            hover:text-gray-300
            ease-in-out
            duration-300
          "
          :to="{ name: 'projects-slug', params: { slug: p.slug } }"
        >
          {{ p.title }}
        </nuxt-link>
        <p class="mb-2">
          {{ p.description }}
        </p>
        <span class="flex-grow">{{ '' }}</span>
        <span>
          Role:
          <p class="italic inline font-semibold">{{ p.role }}</p>
        </span>
        <span>
          Stack:
          <p class="italic inline font-semibold">{{ p.stack }}</p>
        </span>
      </div>
    </li>
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-500"></div>
      </div>
      <div class="relative flex justify-center mt-6">
        <span
          class="
            inline-flex
            items-center
            shadow-sm
            px-4
            py-1
            border border-gray-500
            text-sm
            leading-5
            font-medium
            rounded-full
            text-gray-800
            bg-white
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          <div class="flex justify-center">
            To view the rest of my
            <a
              href="https://github.com/heondo"
              target="__blank"
              class="hover:text-gray-600 duration-300 ease-in-out mx-1"
            >
              <p class="inline underline">Github</p>
              <svg
                class="h-5 w-5 inline mx-1"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>GitHub icon</title>
                <path
                  fill="currentColor"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
}
</script>
