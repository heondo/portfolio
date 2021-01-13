<template>
  <div class="overflow-hidden bg-gray-300">
    <div class="bg-gray-800 pb-32 z-10">
      <nav-bar></nav-bar>
      <slot name="title"></slot>
    </div>
    <main class="-mt-32 px-2 md:px-4">
      <div class="max-w-6xl mx-auto pb-12">
        <!-- Replace with your content -->
        <div
          class="bg-white rounded-md shadow-xl px-4 sm:px-7 md:px-10 relative z-10 py-2 sm:py-4 sm:px-6"
        >
          <slot name="content"></slot>
        </div>
        <!-- /End replace -->
      </div>
    </main>
    <div class="rotated-block"></div>
    <app-footer></app-footer>
  </div>
</template>
<script>
import NavBar from '~/components/Navbar'
import AppFooter from '~/components/Footer'
export default {
  components: {
    NavBar,
    AppFooter,
  },
}
</script>
<style>
.rotated-block {
  @apply w-full absolute right-0 bg-blue-700;
  top: 50vh;
  z-index: 1;

  &:before,
  &:after {
    background: inherit;
    content: '';
    display: block;
    height: 30vh;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
    -webkit-backface-visibility: hidden;
  }

  &:before {
    top: 0;
    transform: skewY(1.5deg);
    transform-origin: 100% 0;
  }

  &:after {
    bottom: 0;
    transform: skewY(-1.5deg);
    transform-origin: 100%;
  }
}

.rotated-block {
  color: #fff;
  font-family: 'Fira Sans', sans-serif;
  margin: 50px 0;
  padding: 20% 20px;
  text-align: center;
}

.section-header {
  @apply text-xl font-semibold;
}
</style>
