export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/global.css'],
  ssr: false,
  app: {
    baseURL: '/jjq/',
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})

