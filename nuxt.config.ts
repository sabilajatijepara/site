// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
    '@nuxt/icon',
    '@nuxtjs/i18n',
  ],
  
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },

  googleFonts: {
    display: 'swap',
    base64: true,
    families: {
      "Plus+Jakarta+Sans": true,
      Poppins: true,
    },
  },
  
  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
      { code: 'id', name: 'Bahasa Indonesia', iso: 'id-ID', file: 'id.json' }
    ],
    defaultLocale: 'en',
    lazy: true,         // Memuat file bahasa secara dinamis
    strategy: 'prefix_except_default', // URL tanpa prefix untuk default locale
    detectBrowserLanguage: {    // Opsi deteksi bahasa browser
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // Mengarahkan ulang ke root berdasarkan bahasa
    },
  },
})