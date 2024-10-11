export const redirects = JSON.parse("{\"/10c/while-loops.html\":\"/article/while-instruction/\",\"/notes/demo/bar.html\":\"/demo/4hvhh39t/\",\"/notes/demo/foo.html\":\"/demo/sq0gsct8/\",\"/notes/demo/\":\"/demo/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/ioumi/Desktop/info10c/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/while-instruction/", { loader: () => import(/* webpackChunkName: "article_while-instruction_index.html" */"C:/Users/ioumi/Desktop/info10c/docs/.vuepress/.temp/pages/article/while-instruction/index.html.js"), meta: {"title":"While Loops"} }],
  ["/demo/4hvhh39t/", { loader: () => import(/* webpackChunkName: "demo_4hvhh39t_index.html" */"C:/Users/ioumi/Desktop/info10c/docs/.vuepress/.temp/pages/demo/4hvhh39t/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/sq0gsct8/", { loader: () => import(/* webpackChunkName: "demo_sq0gsct8_index.html" */"C:/Users/ioumi/Desktop/info10c/docs/.vuepress/.temp/pages/demo/sq0gsct8/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"C:/Users/ioumi/Desktop/info10c/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/ioumi/Desktop/info10c/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"C:/Users/ioumi/Desktop/info10c/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"C:/Users/ioumi/Desktop/info10c/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"Tags"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"C:/Users/ioumi/Desktop/info10c/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"Archives"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"C:/Users/ioumi/Desktop/info10c/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"Categories"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
