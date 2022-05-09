module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {center: true},
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({addComponents}) {
      addComponents({
        '.container': {
          maxWidth: '80%'
        }
      })
    },
  ],
}
