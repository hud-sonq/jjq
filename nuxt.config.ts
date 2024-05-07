export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/global.css'],
  app: {
    baseURL: '/jjq',
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  ssr: true,
})

