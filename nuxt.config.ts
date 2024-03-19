// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt', 'nuxt-vuefire'],
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
 