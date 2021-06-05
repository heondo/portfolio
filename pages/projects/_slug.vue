<template>
  <app-layout>
    <template #content>
      <div class="max-w-4xl mx-auto py-6 px-4 sm:px-8">
        <nav class="flex text-lg mb-3">
          <nuxt-link
            to="/articles"
            class="
              text-blue-400
              hover:text-white
              transition
              duration-150
              ease-in-out
              font-semibold
            "
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
              class="
                h-64
                w-full
                overflow-hidden
                object-cover object-top
                rounded-lg
                shadow-md
              "
            />
            <div class="my-4 flex flex-col gap-2">
              <!-- Private, project urls, or other -->
              <span
                v-if="project.private"
                class="italic text-gray-200 pl-2 border-l-4 border-indigo-400"
              >
                Private application, code cannot be shared
                <p class="inline not-italic">😔</p>
              </span>
              <span v-else-if="project.repo" class="italic">
                <!-- If there were a repo, and there should be LOL -->
                <!-- Create a component  for the product links. Maybe remove it from the caption section? -->
                {{ project.repo }}
              </span>
              <!-- end of ifs -->
              <div>Stack: {{ project.stack }}</div>
              <section>
                <h4 class="font-semibold text-lg">Description</h4>
                {{ project.description }}
              </section>
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
