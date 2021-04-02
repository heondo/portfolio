<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <span class="flex flex-col gap-4">
      <h4 class="uppercase font-bold mb-2 sm:text-xl">HEONDO</h4>
      <a
        class="block social-link"
        href="https://linkedin.com/in/heondokim"
        target="__blank"
        ><svg
          class="h-6 w-6 inline mr-4"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
        >
          <title>LinkedIn icon</title>
          <path
            fill="currentColor"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          /></svg
        >Linkedin</a
      >
      <a
        class="block social-link"
        href="https://github.com/heondo"
        target="__blank"
        ><svg
          class="h-6 w-6 inline mr-4"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
        >
          <title>GitHub icon</title>
          <path
            fill="currentColor"
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          /></svg
        >Github</a
      >
    </span>
    <form class="" action="https://formspree.io/f/mqkabjjp" method="POST">
      <label for="email" class="block text-sm font-medium text-gray-200"
        >Email</label
      >
      <div class="mt-1 relative rounded-md shadow-sm mb-4">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <!-- Heroicon name: solid/mail -->
          <svg
            class="h-5 w-5 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>
        <input
          id="email"
          type="text"
          name="_replyto"
          class="bg-gray-700 shadow-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-4 py-2 sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
        />
      </div>

      <label for="message" class="block text-sm font-medium text-gray-200"
        >Message</label
      >
      <div class="mt-1 relative rounded-md shadow-sm mb-4">
        <div class="absolute left-0 pl-3 flex items-center pointer-events-none">
          <svg
            class="h-5 w-5 mt-2 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </div>
        <textarea
          id="message"
          name="message"
          class="bg-gray-700 shadow-lg align-middle focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-4 py-2 sm:text-sm border-gray-300 rounded-md"
          placeholder="Lets talk!"
        />
      </div>

      <!-- your other form fields go here -->

      <div class="flex justify-end">
        <button
          class="inline-flex shadow-xl items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition duration-300 ease-in-out"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>
<style scoped>
a {
  @apply uppercase transition duration-300 ease-in-out transform;
}

a:hover {
  @apply text-gray-500;
}

a:hover {
  @apply text-gray-300;
}
input::placeholder,
textarea::placeholder {
  @apply text-gray-400;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  @apply text-gray-400;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  @apply text-gray-400;
}
</style>
