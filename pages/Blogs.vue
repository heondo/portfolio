<template>
  <app-layout>
    <template #content>
      <section-layout>
        <template #title> Hello </template>
        Is this the rest of the content
      </section-layout>
    </template>
  </app-layout>
</template>
<script>
import AppLayout from '~/layouts/AppLayout.vue'
import SectionLayout from '~/layouts/SectionLayout.vue'

export default {
  components: { AppLayout, SectionLayout },
}
</script>
