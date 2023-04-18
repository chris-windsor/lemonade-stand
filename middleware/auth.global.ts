import {useUserStore} from "~/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const cookie = useCookie('token');
  const token: string = cookie.value || "";

  if (process.server && (to.meta.layout === "profile" || to.meta.layout === "admin") && !token.length) {
    return '/auth/signin';
  }

  const userStore = useUserStore();

  if (process.client && (to.meta.layout === "profile" || to.meta.layout === "admin") && !userStore.token.length) {
    return '/auth/signin';
  }
})
