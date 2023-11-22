// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config"
// import vuetify from 'vite-plugin-vuetify'
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    // async (options, nuxt) => {
    //   nuxt.hooks.hook('vite:extendConfig', (config) =>
    //     // @ts-ignore
    //     config.plugins.push(
    //       vuetify({
    //         autoImport: true,
    //         styles: {
    //           configFile: resolve('./assets/scss/settings.scss')
    //         }
    //       })
    //     )
    //   )
    // }
  ],
  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  },
  sourcemap: {
    server: false,
    client: false
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  }
})
