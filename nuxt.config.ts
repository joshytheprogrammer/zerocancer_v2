// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' }
  },
  site: {
    url: 'https://zerocancer.africa',
    name: 'Zerocancer',
    description: 'Zerocancer is dedicated to minimizing new cases of cervical, breast, prostate, and colon cancers through extensive awareness campaigns, screening initiatives, and access to affordable care. Our mission extends to supporting diagnosed cases and connecting individuals with high-risk screenings and early interventions.',
    defaultLocale: 'en', 
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    'nuxt-icon', 
    '@pinia/nuxt', 
    'nuxt-vuefire', 
    '@nuxtjs/seo'
  ],
  vuefire: {
    auth: {
      enabled: false
    },
    config: {
      apiKey: "AIzaSyAYJ5T1fu_nY_OzFDyHvbrmU67I0NzNCzI",
      authDomain: "zerocancerafrica.firebaseapp.com",
      projectId: "zerocancerafrica",
      storageBucket: "zerocancerafrica.appspot.com",
      messagingSenderId: "503796621829",
      appId: "1:503796621829:web:a2a4a5ee13bff39e94f26c"
    },
  },
})
 