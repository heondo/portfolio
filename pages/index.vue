<template>
  <app-layout>
    <template #content> Content placed here </template>
  </app-layout>
</template>

<script>
import AppLayout from '~/layouts/AppLayout'
export default {
  components: {
    AppLayout,
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
