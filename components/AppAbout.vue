<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-2">
    <div class="md:cols-span-1">
      I graduated from
      <p>UC Santa Barbara</p>
      in
      <p>2018</p>
      with a Bachelors in Financial Mathematics and Statistics. Even the school
      wasn't sure what it was given that it stopped being offered during my time
      there, but I did get to take some
      <p>programming</p>
      and
      <p>data science courses</p>
      that put me on this path.
    </div>
    <div class="md:cols-span-1">
      I fell in love with programming after automating various job functions as
      a
      <p>Data Analyst</p>
      primarily using
      <p>Python</p>
      . It was making scripts to process data and the like but I wanted to
      create complete appliciations, from the interface to the functionality. I
      enjoy creating
      <p>full stack</p>
      web applications using
      <p>SQL, Laravel, NodeJs, Vue, React, and Angular</p>
      .
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
span > div > p {
  @apply inline text-blue-300 font-semibold;
}
/* .content {
  column-count: 1;
} */

/* @screen md {
  .content {
    column-count: 2;
    column-gap: 2rem;
  }
} */
</style>
