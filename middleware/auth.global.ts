import {useUserStore} from "~/stores/user";
import jwtDecode from "jwt-decode";
import {AuthToken} from "~/types";

export default defineNuxtRouteMiddleware((to, from) => {
  const cookie = useCookie('token');
  const token: string = cookie.value || "";
  const requestedLocationLayout = to.meta.layout;

  if (process.server && (requestedLocationLayout === "profile" || requestedLocationLayout === "admin")) {
    if (!token.length) {
      return '/auth/signin';
    }

    const isAdmin = jwtDecode<AuthToken>(token).role === "admin";

    if (requestedLocationLayout === "admin" && !isAdmin) {
      return "/account";
    }

    if (requestedLocationLayout === "profile" && isAdmin) {
      return "/admin";
    }
  }

  const userStore = useUserStore();

  if (process.client && (requestedLocationLayout === "profile" || requestedLocationLayout === "admin")) {
    if (!userStore.token.length) {
      return '/auth/signin';
    }

    const token = jwtDecode<AuthToken>(userStore.token)
    const now = Date.now();

    if (token.exp * 1000 < now) {
      return '/auth/signin';
    }

    const isAdmin = token.role === "admin";

    if (requestedLocationLayout === "admin" && !isAdmin) {
      return "/account";
    }

    if (requestedLocationLayout === "profile" && isAdmin) {
      return "/admin";
    }
  }
})
