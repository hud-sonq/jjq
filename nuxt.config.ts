export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/global.css'],
  ssr: true,
  app: {
    baseURL: '/jjq/',
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})

