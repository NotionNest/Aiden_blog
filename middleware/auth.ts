export default defineNuxtRouteMiddleware((to, from) => {
  const user = true
  console.log('to', to)

  if (!user)
    return navigateTo('/login')
})
