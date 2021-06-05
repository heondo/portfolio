<template>
  <app-layout>
    <template #content>
      <section-layout id="#">
        <app-landing></app-landing>
      </section-layout>
      <section-layout id="about" class="slanted" bgColor="bg-indigo-900">
        <template #title class="underline"> Who, Me? </template>
        <app-about></app-about>
      </section-layout>
      <section-layout id="projects" class="slanted">
        <template #title class="underline"> Projects </template>
        <app-projects :projects="projects"></app-projects>
      </section-layout>
      <section-layout id="skills" class="slanted" bgColor="bg-indigo-900">
        <template #title> Skills </template>
        <app-skills></app-skills>
      </section-layout>
      <section-layout id="timeline" class="slanted" :threshold="0.2">
        <template #title> Timeline</template>
        <app-timeline></app-timeline>
      </section-layout>

      <section-layout id="resume" class="slanted" bgColor="bg-indigo-900">
        <template #title> Resume </template>
        <iframe
          loading="lazy"
          class="mx-auto rounded-lg shadow-xl"
          src="https://drive.google.com/file/d/13fR9a1kTlyQtHKRe60S_YbUUE2mvOq3L/preview"
          width="80%"
          height="350"
        ></iframe>
      </section-layout>
      <section-layout id="articles-comp">
        <template #title> articles</template>
        <app-articles :articles="articles"></app-articles>
      </section-layout>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from '~/layouts/AppLayout'
import SectionLayout from '~/layouts/SectionLayout'
import AppLanding from '~/components/AppLanding'
import AppAbout from '~/components/AppAbout'
import AppSkills from '~/components/AppSkills'
import AppTimeline from '~/components/AppTimeline'
import AppArticles from '~/components/AppArticles'
import AppProjects from '~/components/AppProjects'
export default {
  components: {
    AppLayout,
    SectionLayout,
    AppLanding,
    AppAbout,
    AppSkills,
    AppTimeline,
    AppArticles,
    AppProjects,
  },
  async asyncData({ $content }) {
    const getArticles = async () =>
      await $content('articles').sortBy('createdAt', 'desc').limit(3).fetch()
    const getProjects = async () =>
      await $content('projects').sortBy('createdAt', 'desc').fetch()
    const [articles, projects] = await Promise.all([
      getArticles(),
      getProjects(),
    ])

    return { articles, projects }
  },
}
</script>

<style>
.slanted {
  transform: skewY(-3deg);
  transform-origin: 0;
}

.slanted > div {
  transform: skewY(3deg);
}
</style>
