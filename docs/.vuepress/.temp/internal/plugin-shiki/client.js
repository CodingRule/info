
import { useCopyCode } from 'C:/Users/ioumi/Desktop/info10c/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.106_typescript@5.6.2_vue@3.5.11_typescript@5.6.2__vue_4icydc2r3tbkzxkn4bmagzew7q/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/copy-code.js'
import { useCollapsedLines } from 'C:/Users/ioumi/Desktop/info10c/node_modules/.pnpm/@vuepress-plume+plugin-shikiji@1.0.0-rc.106_typescript@5.6.2_vue@3.5.11_typescript@5.6.2__vue_4icydc2r3tbkzxkn4bmagzew7q/node_modules/@vuepress-plume/plugin-shikiji/lib/client/composables/collapsed-lines.js'

export default {
  
  setup() {
    useCopyCode({
      selector: __CC_SELECTOR__,
      duration: __CC_DURATION__,
    })
    useCollapsedLines()
  },
}
