export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/global.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  ssr: false,
})

