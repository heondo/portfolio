<template>
  <app-layout>
    <template #content>
      <section-layout id="#">
        <app-landing></app-landing>
      </section-layout>
      <section-layout id="about" class="slanted" bgColor="bg-blue-900">
        <app-about></app-about>
      </section-layout>
      <section-layout id="skills"> Section Skills </section-layout>
      <section-layout id="resume" bgColor="bg-purple-900">
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
export default {
  components: {
    AppLayout,
    SectionLayout,
    AppLanding,
    AppAbout,
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
  margin: 5rem 0;
  transform: skewY(-4deg);
  transform-origin: 0;
}

.slanted > div {
  transform: translateZ(0) skewY(4deg);
}
</style>
