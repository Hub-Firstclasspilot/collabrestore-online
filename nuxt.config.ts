// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/styles/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  // Static site generation configuration
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/connect']
    }
  },
  // Router configuration to ignore static asset paths
  router: {
    options: {
      strict: false
    }
  },
  // Ignore wallet-icons paths in router
  experimental: {
    watcher: false
  },
  // Production optimizations
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})

