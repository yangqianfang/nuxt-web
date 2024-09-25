// https://nuxt.com/docs/api/configuration/nuxt-config

import postcssConfig from "./postcss.config"

export default defineNuxtConfig({
  css: [
    '~/assets/iconfont/iconfont.css', 
    '~/assets/index.css', 
    '@glidejs/glide/dist/css/glide.core.min.css', 
    '@glidejs/glide/dist/css/glide.theme.min.css'],
  plugins: [],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  pages: true,
  srcDir: 'app',
  // postcss:postcssConfig,
  modules: ['@nuxt/image']
})
