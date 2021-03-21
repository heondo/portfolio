<template>
  <app-layout>
    <template #content>
      <section-layout>
        <app-landing></app-landing>
      </section-layout>
      <section-layout bgColor="bg-indigo-800">
        <div id="about">Section two</div>
      </section-layout>
      <section-layout bgColor="bg-blue-800">
        <div id="skills">Section two</div>
      </section-layout>
      <section-layout bgColor="bg-purple-800">
        <div id="resume">
          <div class="d-flex justify-content-center">
            <iframe
              style="border-radius: 1%"
              src="https://drive.google.com/file/d/13fR9a1kTlyQtHKRe60S_YbUUE2mvOq3L/preview"
              width="80%"
              height="350"
            ></iframe>
          </div>
        </div>
      </section-layout>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from '~/layouts/AppLayout'
import SectionLayout from '~/layouts/SectionLayout'
import AppLanding from '~/components/AppLanding'
export default {
  components: {
    AppLayout,
    SectionLayout,
    AppLanding,
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
html {
  scroll-behavior: smooth;
}
</style>
