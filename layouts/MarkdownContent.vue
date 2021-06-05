<template>
  <NuxtContent class="prose lg:prose-lg mx-auto" :document="document" />
</template>
<script>
export default {
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style>
@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

article > .content {
  animation: 1s ease-out 0s 1 slideInFromLeft;
}

.nuxt-content .photo {
  @apply mx-auto my-6;
}

.nuxt-content a {
  @apply underline;
}

.nuxt-content .tech-word {
  @apply text-blue-300 font-semibold;
}

.nuxt-content pre.line-numbers {
  background-color: aliceblue;
}

.nuxt-content .token.operator {
  @apply bg-transparent;
}

.nuxt-content table {
  border-collapse: collapse;
  border: 1px solid white;
}

.nuxt-content table td {
  border: 1px solid white;
  padding: 2rem;
}

.nuxt-content ul,
.nuxt-content ol {
  @apply pl-4;
}

.nuxt-content ul > li {
  list-style-type: disc;
  @apply my-1 p-0;
}
.nuxt-content ol > li {
  list-style-type: decimal;
  @apply my-1 p-0;
}

.nuxt-content .caption {
  @apply border-l-4 border-indigo-400 italic pl-2 my-4 text-gray-200;
}

.nuxt-content h1,
.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5,
.nuxt-content h6 {
  scroll-margin-top: 2em;
  animation: 1s ease-out 0s 1 slideInFromLeft;
  @apply text-blue-300 my-2;
}

@screen sm {
  .nuxt-content h1,
  .nuxt-content h2,
  .nuxt-content h3,
  .nuxt-content h4,
  .nuxt-content h5,
  .nuxt-content h6 {
    /* scroll-margin-top: 1em; */
    @apply text-blue-300;
  }
}

.nuxt-content h1 {
  @apply text-4xl;
}
.nuxt-content h2 {
  @apply text-3xl;
}
.nuxt-content h3 {
  @apply text-2xl;
}
.nuxt-content h4 {
  @apply text-xl;
}
.nuxt-content h5 {
  @apply text-lg;
}
.nuxt-content h6 {
}
</style>
