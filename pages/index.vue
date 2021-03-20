<template>
  <app-layout>
    <template #content>
      <section-layout> Heondo Kim </section-layout>
      <section-layout bgColor="bg-indigo-800"> Section two</section-layout>
      <section-layout bgColor="bg-indigo-800"> Section two</section-layout>
      <section-layout bgColor="bg-indigo-800"> Section two</section-layout>
      <section-layout bgColor="bg-indigo-800"> Section two</section-layout>
      <section-layout bgColor="bg-indigo-800"> Section two</section-layout>
      <section-layout bgColor="bg-indigo-800"> Section two</section-layout>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from '~/layouts/AppLayout'
import SectionLayout from '~/layouts/SectionLayout'
export default {
  components: {
    AppLayout,
    SectionLayout,
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  /* margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}
</style>
