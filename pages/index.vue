<template>
  <app-layout>
    <template #content>
      <section-layout>
        <app-landing></app-landing>
      </section-layout>
      <section-layout class="slanted" bgColor="bg-blue-900">
        <div id="about">I really want a slanted div right here</div>
      </section-layout>
      <section-layout>
        <div id="skills">Section two</div>
      </section-layout>
      <section-layout bgColor="bg-purple-900">
        <div id="">
          <iframe
            class="mx-auto"
            src="https://drive.google.com/file/d/13fR9a1kTlyQtHKRe60S_YbUUE2mvOq3L/preview"
            width="80%"
            height="350"
          ></iframe>
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

.slanted {
  padding: 4rem 0;
  margin: 3rem 0;
  transform: skewY(-4deg);
  transform-origin: 0;
}

.slanted > div {
  transform: skewY(4deg);
}
</style>
