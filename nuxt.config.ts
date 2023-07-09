// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content'],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  devtools: { enabled: true },
  plugins: ['~/plugins/vercel.ts', { src: '~/plugins/vercel.ts', mode: 'client' }],
})
