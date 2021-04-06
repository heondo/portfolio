<template>
  <div class="container px-2 pb-8 mx-auto lg:px-4">
    <div class="flex flex-col w-full mt-6 text-left lg:text-center">
      <h2
        class="mb-1 text-xs font-semibold tracking-widest text-blue-300 uppercase title-font"
      >
        <div class="sliding-container">
          Full
          <span class="sliding-vertical">
            <span> Of Passion </span>
            <span> Of Candy 🍬 </span>
            <span> Time Learner </span>
            <span> Time KKB Fan </span>
            <div class="last inline">Stack Developer</div>
          </span>
        </div>
      </h2>
      <h1
        class="mb-4 text-2xl font-semibold tracking-tighter text-white sm:text-5xl title-font"
      >
        Heondo Kim
      </h1>
      <p
        class="mx-auto text-base font-medium leading-relaxed text-gray-400 lg:w-2/3"
      >
        I like to turn designs into applications. From database design to
        full-stack development, I'm just here to make cool stuff.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>
<style scoped>
.sliding-container {
  margin-right: 8.5rem;
}
/*Vertical Sliding*/
.sliding-vertical {
  display: inline;
  text-indent: 8px;
  @apply text-indigo-300;
}
.sliding-vertical span {
  animation: topToBottom 6s linear 0s;
  -ms-animation: topToBottom 6s linear 0s;
  -webkit-animation: topToBottom 6s linear 0s;
  opacity: 0;
  overflow: hidden;
  position: absolute;
}

.sliding-vertical div.last {
  animation: finalKeyframe 6s linear 0s;
  -ms-animation: finalKeyframe 6s linear 0s;
  -webkit-animation: finalKeyframe 6s linear 0s;
  opacity: 0;
  position: absolute;
  animation-fill-mode: forwards;
}
.sliding-vertical span:nth-child(2) {
  animation-delay: 1.5s;
  -ms-animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
}
.sliding-vertical span:nth-child(3) {
  animation-delay: 3s;
  -ms-animation-delay: 3s;
  -webkit-animation-delay: 3s;
}
.sliding-vertical span:nth-child(4) {
  animation-delay: 4.5s;
  -ms-animation-delay: 4.5s;
  -webkit-animation-delay: 4.5s;
}
.sliding-vertical div:nth-child(5) {
  animation-delay: 6s;
  -ms-animation-delay: 6s;
  -webkit-animation-delay: 6s;
}

/*topToBottom Animation*/
@-moz-keyframes topToBottom {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    -moz-transform: translateY(-30px);
  }
  10% {
    opacity: 1;
    -moz-transform: translateY(0px);
  }
  25% {
    opacity: 1;
    -moz-transform: translateY(0px);
  }
  30% {
    opacity: 0;
    -moz-transform: translateY(30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes topToBottom {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    -webkit-transform: translateY(-30px);
  }
  10% {
    opacity: 1;
    -webkit-transform: translateY(0px);
  }
  25% {
    opacity: 1;
    -webkit-transform: translateY(0px);
  }
  30% {
    opacity: 0;
    -webkit-transform: translateY(30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@-ms-keyframes topToBottom {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    -ms-transform: translateY(-30px);
  }
  10% {
    opacity: 1;
    -ms-transform: translateY(0px);
  }
  25% {
    opacity: 1;
    -ms-transform: translateY(0px);
  }
  30% {
    opacity: 0;
    -ms-transform: translateY(30px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes finalKeyframe {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    -moz-transform: translateY(-30px);
  }
  10% {
    opacity: 1;
    -moz-transform: translateY(0px);
  }
  25% {
    opacity: 1;
    -moz-transform: translateY(0px);
  }
  30% {
    opacity: 1;
    @apply text-blue-300;
  }
  80% {
    opacity: 1;
    @apply text-blue-300;
  }
  100% {
    opacity: 1;
    @apply text-blue-300;
  }
}
@-webkit-keyframes finalKeyframe {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    -webkit-transform: translateY(-30px);
  }
  10% {
    opacity: 1;
    -webkit-transform: translateY(0px);
  }
  25% {
    opacity: 1;
    -webkit-transform: translateY(0px);
  }
  30% {
    opacity: 1;
    @apply text-blue-300;
  }
  80% {
    opacity: 1;
    @apply text-blue-300;
  }
  100% {
    opacity: 1;
    @apply text-blue-300;
  }
}
@-ms-keyframes finalKeyframe {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    -ms-transform: translateY(-30px);
  }
  10% {
    opacity: 1;
    -ms-transform: translateY(0px);
  }
  25% {
    opacity: 1;
    -ms-transform: translateY(0px);
  }
  30% {
    opacity: 1;
    @apply text-blue-300;
  }
  80% {
    opacity: 1;
    @apply text-blue-300;
  }
  100% {
    opacity: 1;
    @apply text-blue-300;
  }
}
</style>
