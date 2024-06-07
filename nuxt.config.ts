export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/global.css'],
  ssr: false,
  app: {
    baseURL: '/jjq/',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },
})

