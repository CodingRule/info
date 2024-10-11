import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'en-US',
  title: 'Info 10C',
  description: 'Cod, Exemple si Explicatii',

  bundler: viteBundler(),

  theme: plumeTheme({
    plugins: {
      markdownEnhance: {
        demo: true,
      },
      comment: {
        provider: 'Giscus', 
        comment: true, 
        repo: 'Codingrule/info', 
        repoId: 'R_kgDOM7iJJw', 
        category: 'General', 
        categoryId: 'DIC_kwDOM7iJJ84CjERJ', 
      },
    },
  }),
})
