import { createPinia } from 'pinia'
import { defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
      cart: []
    }
  },
  persist: {
    storage: persistedState.localStorage
  },
})
