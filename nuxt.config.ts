export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
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
  }
})
