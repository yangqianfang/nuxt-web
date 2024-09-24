// https://nuxt.com/docs/api/configuration/nuxt-config

import postcssConfig from "./postcss.config"
export default defineNuxtConfig({

  plugins:[
    // {src:"@/assets/js/swiper.animate1.0.3.min",ssr:false}
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  srcDir: 'app',
  postcss:postcssConfig,
  modules: ['@nuxt/ui', '@nuxt/image'],
})
