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
    'nuxt-aos',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
  ],
  
  routeRules: {
    '/categories': { redirect: '/products' },
  },
  
  robots: {
        // Your robots.txt configuration
        UserAgent: '*',
        Disallow: "",
      //Sitemap: 'https://yourwebsite.com/sitemap.xml' // Link to your sitemap
  },
  
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },

  googleFonts: {
    display: 'swap',
    families: {
      "Plus+Jakarta+Sans": true,
      Poppins: true,
      Montserrat: true,
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
    /*detectBrowserLanguage: {    // Opsi deteksi bahasa browser
      useCookie: true,
      // redirectOn: 'root', Mengarahkan ulang ke root berdasarkan bahasa
      redirecton: false,
    },*/
  },
  
  sitemap: {
    hostname: 'https://sabilajati.com', // GANTI domain asli
    name: "Sabilajati",
    gzip: true,
    xslTips: false,
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
      { label: 'Change Frequency', select: 'sitemap:changefreq', width: '12.5%' },
    ],

    sources: [
      [
        '/api/__sitemap__/urls', {
        timeout: 10000
      }
      ]
    ],
  },
})