// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  appConfig: {
    seo: {
      siteName: "Mugo -Resource Center",
    },
  },

  content: {
    preview: {
      api: "https://api.nuxt.studio",
    },
  },
});
