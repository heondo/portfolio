<template>
  <div>
    <span class="flex flex-wrap justify-center gap-6 text-sm mb-2 md:mb-4">
      <!-- <div>Vue</div>
      <div>React</div> -->
      <div v-for="skill in skills" :key="skill.name">
        <!-- {{ skill.name }} -->
        <img
          class="h-6 sm:h-8 md:h-10 w-auto mb-2 mx-auto transition-all duration-300 ease-in-out"
          :src="skill.icon"
          alt="hello"
        />
        <p class="text-center italic text-xs md:text-sm">
          {{ skill.name }}
        </p>
      </div>
    </span>
    <p class="text-center w-full italic">
      along with MongoDB, GraphQL, Python, and more.
    </p>
  </div>
  <!-- <div class="about-image justify-content-center">
        <img
          class="m-auto object-contain border-2 border-solid border-gray-800 rounded-md p-2"
          src="~/assets/ezgif.com-gif-maker.webp"
          alt="profile picture for heondo kim"
        />
      </div> -->
</template>
<script>
export default {
  data() {
    return {
      skills: [
        {
          name: 'Vue',
          icon: ' https://vuejs.org/images/logo.png',
        },
        {
          name: 'React',
          icon:
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
        },
        {
          name: 'Angular',
          icon: 'https://angular.io/assets/images/logos/angular/angular.svg',
        },

        {
          name: 'Laravel',
          icon:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/231px-Laravel.svg.png',
        },
        // {
        //   name: 'Express',
        //   icon: '',
        // },
        {
          name: 'Node.js',
          icon:
            'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg',
        },
        {
          name: 'Postgres',
          icon:
            'https://wiki.postgresql.org/images/thumb/a/a4/PostgreSQL_logo.3colors.svg/116px-PostgreSQL_logo.3colors.svg.png',
        },
        {
          name: 'MySQL',
          icon: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
        },
        {
          name: 'AWS',
          icon:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/320px-Amazon_Web_Services_Logo.svg.png',
        },
        {
          name: 'Docker',
          icon:
            'https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Moby-logo.png?itok=sYH_JEaJ',
        },
      ],
    }
  },
}
</script>
