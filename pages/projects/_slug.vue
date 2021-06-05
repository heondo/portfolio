<template>
  <app-layout>
    <template #content>
      <div class="max-w-4xl mx-auto py-6 px-4 sm:px-8">
        <nav class="flex text-lg mb-3">
          <nuxt-link
            to="/articles"
            class="text-blue-400 hover:text-white transition duration-150 ease-in-out font-semibold"
          >
            Project
          </nuxt-link>
          <span class="mx-2"> / </span>
          <span class="text-white">
            {{ project.type }}
          </span>
        </nav>
        <article class="pl-0 sm:pl-2 md:pl-4">
          <h2 class="text-3xl sm:text-5xl font-bold">
            {{ project.title }}
          </h2>
          <div class="content">
            <div
              class="text-gray-200 mt-2 mb-4 pl-2 border-l-4 border-indigo-400"
            >
              Heondo Kim -
              {{
                $formatDate(
                  new Date(project.updatedAt),
                  "MMM d, yyyy 'at' hh:mm aaa"
                )
              }}
            </div>
            <nuxt-img
              provider="cloudinary"
              :src="project.banner"
              class="h-auto w-full overflow-hidden object-cover object-top rounded-lg shadow-md"
            />
            <div class="text-gray-200 my-4 pl-2 border-l-4 border-indigo-400">
              <span v-if="project.private" class="italic">
                Private application, code cannot be shared
                <p class="inline not-italic">😔</p>
              </span>
              <span v-else-if="project.repo" class="italic">
                {{ project.repo }}
              </span>
            </div>
            <markdown-content
              class="prose lg:prose-lg mx-auto"
              :document="project"
            />
          </div>
        </article>
      </div>
    </template>
  </app-layout>
</template>
<script>
import AppLayout from '~/layouts/AppLayout'
import MarkdownContent from '~/layouts/MarkdownContent'
export default {
  components: {
    AppLayout,
    MarkdownContent,
  },
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()
    return {
      project,
    }
  },
}
</script>
