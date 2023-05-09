export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-proxy'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  imports: {
    dirs: ['./stores'],
  },
  pinia: {
    autoImports: [
      'defineStore',
      'acceptHMRUpdate'
    ],
  },
  nitro: {
    devProxy: {
      "/api": {
        target: "http://127.0.0.1:4567/api",
        changeOrigin: true,
        prependPath: true,
      }
    }
  },
  proxy: {
    options: {
      target: "http://127.0.0.1:4567/api",
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
      pathFilter: [
        '/api',
      ]
    }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
    },
  },
})
