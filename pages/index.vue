<template>
  <app-layout>
    <template #content>
      <section-layout id="#">
        <app-landing></app-landing>
      </section-layout>
      <section-layout id="about" class="slanted" bgColor="bg-blue-900">
        <template #title> Who, Me? </template>
        <app-about></app-about>
      </section-layout>
      <section-layout id="skills">
        <template #title> Skills </template>
        <app-skills></app-skills>
      </section-layout>
      <section-layout id="testing" class="slanted" bgColor="bg-indigo-900">
        Section Testing
      </section-layout>

      <section-layout id="resume">
        <iframe
          class="mx-auto"
          src="https://drive.google.com/file/d/13fR9a1kTlyQtHKRe60S_YbUUE2mvOq3L/preview"
          width="80%"
          height="350"
        ></iframe>
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
export default {
  components: {
    AppLayout,
    SectionLayout,
    AppLanding,
    AppAbout,
    AppSkills,
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* html {
  scroll-behavior: smooth;
} */

.slanted {
  padding: 4rem 0;
  margin: 6rem 0 4rem 0;
  transform: skewY(-3deg);
  transform-origin: 0;
}

.slanted > div {
  transform: translateZ(0) skewY(3deg);
}

/* @screen lg {
  .slanted {
    padding: 6rem 0;
    margin: 8rem 0;
  }
} */
</style>
