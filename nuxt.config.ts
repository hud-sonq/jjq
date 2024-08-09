export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/global.css'],
  ssr: false,
  app: {
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/jjq/favicon.ico' }
      ]
    },
  },
})