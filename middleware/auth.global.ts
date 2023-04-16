function isAuthenticated() {
  return false
}

export default defineNuxtRouteMiddleware((to, from) => {
  if ((to.meta.layout === "profile" || to.meta.layout === "admin") && !isAuthenticated()) {
    return navigateTo('/auth/signin')
  }
})
