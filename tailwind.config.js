/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.blue.300'),
              '&:hover': {
                color: theme('colors.blue.500'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
