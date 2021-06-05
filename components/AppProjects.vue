<template>
  <div>
    <li
      v-for="p in projects"
      :key="p.slug"
      class="list-none flex sm:flex-row flex-col gap-4"
    >
      <!-- thumbnail -->
      <nuxt-link
        class="m-auto sm:h-60 h-48 w-auto overflow-hidden flex justify-center items-center"
        :to="{ name: 'projects-slug', params: { slug: p.slug } }"
      >
        <nuxt-img
          provider="cloudinary"
          class="object-cover rounded-md"
          :src="p.thumbnail"
        />
      </nuxt-link>
      <!-- end thumbnail -->
      <div class="flex flex-col">
        <nuxt-link
          class="text-lg font-bold uppercase hover:text-gray-300 ease-in-out duration-300"
          :to="{ name: 'projects-slug', params: { slug: p.slug } }"
        >
          {{ p.title }}
        </nuxt-link>
        <p class="mb-2">
          {{ p.description }}
        </p>
        <span class="flex-grow">{{ '' }}</span>
        <span>
          Stack:
          <p class="italic inline font-semibold">{{ p.stack }}</p>
        </span>
      </div>
    </li>
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
<style scoped></style>
