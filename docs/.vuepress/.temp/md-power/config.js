import { defineClientConfig } from 'vuepress/client'
import Tabs from 'C:/Users/ioumi/Desktop/info10c/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.106_markdown-it@14.1.0_typescript@5.6.2_vuepress@2.0.0-rc.1_chvytbsobnezhjzybrmpalsw4y/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'C:/Users/ioumi/Desktop/info10c/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.106_markdown-it@14.1.0_typescript@5.6.2_vuepress@2.0.0-rc.1_chvytbsobnezhjzybrmpalsw4y/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'C:/Users/ioumi/Desktop/info10c/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.106_markdown-it@14.1.0_typescript@5.6.2_vuepress@2.0.0-rc.1_chvytbsobnezhjzybrmpalsw4y/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from 'C:/Users/ioumi/Desktop/info10c/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.106_markdown-it@14.1.0_typescript@5.6.2_vuepress@2.0.0-rc.1_chvytbsobnezhjzybrmpalsw4y/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})
