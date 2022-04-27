import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/xinling/Desktop/_github/vuepress-kit/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/xinling/Desktop/_github/vuepress-kit/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
