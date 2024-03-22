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
    '@nuxtjs/seo',
    'nuxt-gtag',
    '@zadigetvoltaire/nuxt-gtm'

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
  gtag: {
    id: 'G-MXRK64V2GQ',
    initCommands: [
      // Setup up consent mode
      ['consent', 'default', {
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        ad_storage: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500,
      }]
    ]
  },
  gtm: {
    id: 'GTM-KPRKR5WH', 
    queryParams: {
      // Add URL query string when loading gtm.js with GTM ID (required when using custom environments)
      gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
      gtm_preview: 'env-4',
      gtm_cookies_win: 'x',
    },
    defer: true,
    compatibility: true, 
    nonce: '2726c7f26c',
    enabled: true, 
    debug: true, 
    loadScript: true, 
    enableRouterSync: true, 
    ignoredViews: [], 
    trackOnNextTick: false, 
    devtools: true, 
  }
  
})
 