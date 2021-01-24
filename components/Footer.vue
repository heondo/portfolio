<template>
  <footer
    class="footer bg-gray-800 relative pt-1 border-b-2 z-10 border-blue-700"
  >
    <div class="container max-w-4xl mx-auto px-6">
      <div class="sm:flex sm:mt-8">
        <div
          class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col sm:flex-row justify-between"
        >
          <div class="flex flex-col">
            <span class="font-bold text-gray-400 uppercase mb-2">Social</span>
            <span class="my-2 sm:my-4"
              ><a
                target="_blank"
                href="https://linkedin.com/in/heondokim"
                class="flex items-center text-blue-200 text-md hover:text-blue-500 font-bold uppercase"
              >
                <svg class="h-6 w-6 mr-4" viewBox="0 50 512 512">
                  <path
                    fill="white"
                    d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
        C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
        M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
        c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
        s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"
                  />
                </svg>
                LinkedIn
              </a></span
            >
            <span class="my-2 sm:my-4"
              ><a
                target="_blank"
                href="https://github.com/heondo"
                class="flex items-center text-blue-200 text-md hover:text-blue-500 font-bold uppercase"
              >
                <svg class="h-6 w-6 mr-4" viewBox="0 0 256 250">
                  <path
                    fill="white"
                    d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z"
                  />
                </svg>
                Github
              </a></span
            ><!-- <span class="my-2"
              ><a href="#" class="text-blue-200 text-md hover:text-blue-500"
                ></a
              ></span
            > -->
          </div>
          <div
            id="contact"
            class="flex flex-col mt-4 sm:mt-0 font-bold text-blue-200"
          >
            <h4 class="mb-4">Contact</h4>
            <form
              action="https://formspree.io/mqkabjjp"
              method="POST"
              class="flex flex-col"
            >
              <input
                required
                type="text"
                name="_replyto"
                placeholder="Your Email"
                class="mb-2 rounded-md pd-2"
              />
              <textarea
                required
                name="message"
                placeholder="I look forward to speaking with you..."
                class="mb-4 rounded-md pd-2"
              ></textarea>
              <button
                type="submit"
                class="bg-blue-500 text-white mx-auto rounded-md py-1 px-3"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6">
      <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
        <div class="sm:w-2/3 text-center py-6">
          <p class="text-sm text-blue-200 font-bold mb-2">
            © {{ date }} by Heondo Kim
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    }
  },
}
</script>
