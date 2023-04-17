import {useUserStore} from "~/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  if ((to.meta.layout === "profile" || to.meta.layout === "admin") && !userStore.token.length) {
    return '/auth/signin';
  }
})
