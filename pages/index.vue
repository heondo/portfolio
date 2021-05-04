<template>
  <app-layout>
    <template #content>
      <section-layout id="#">
        <app-landing></app-landing>
      </section-layout>
      <section-layout id="about" class="slanted" bgColor="bg-blue-900">
        <template #title class="underline"> Who, Me? </template>
        <app-about></app-about>
      </section-layout>
      <section-layout id="skills" class="anchor">
        <template #title> Skills </template>
        <app-skills></app-skills>
      </section-layout>
      <section-layout
        id="timeline"
        class="slanted"
        :threshold="0.2"
        bgColor="bg-blue-900"
      >
        <template #title> Timeline</template>
        <app-timeline></app-timeline>
      </section-layout>

      <section-layout id="resume" class="slanted">
        <template #title> Resume </template>
        <iframe
          class="mx-auto rounded-lg shadow-xl"
          src="https://drive.google.com/file/d/13fR9a1kTlyQtHKRe60S_YbUUE2mvOq3L/preview"
          width="80%"
          height="350"
        ></iframe>
      </section-layout>
      <section-layout id="articles-comp" class="slanted" bgColor="bg-blue-900">
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
export default {
  components: {
    AppLayout,
    SectionLayout,
    AppLanding,
    AppAbout,
    AppSkills,
    AppTimeline,
    AppArticles,
  },
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .sortBy('date', 'desc')
      .limit(3)
      .fetch()

    return { articles }
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
