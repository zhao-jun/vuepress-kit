import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-0da3d3da","/test1.html",{"title":"Hello test1"},["/test1","/test1.md"]],
  ["v-0a3a229c","/test2.html",{"title":"Hello test2"},["/test2","/test2.md"]],
  ["v-06d0715e","/test3.html",{"title":"Hello test3"},["/test3","/test3.md"]],
  ["v-2d0ad528","/zh/",{"title":"Hello Zh VuePress"},["/zh/index.html","/zh/README.md"]],
  ["v-c3cf6cfc","/zh/test1.html",{"title":"Hello Zh test1"},["/zh/test1","/zh/test1.md"]],
  ["v-c065bbbe","/zh/test2.html",{"title":"Hello Zh test2"},["/zh/test2","/zh/test2.md"]],
  ["v-bcfc0a80","/zh/test3.html",{"title":"Hello Zh test3"},["/zh/test3","/zh/test3.md"]],
  ["v-b9925942","/zh/test4.html",{"title":"Hello Zh test4"},["/zh/test4","/zh/test4.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-8daa1a0e","/",{"title":"h1 Heading 😎"},["/index.html","/README.md"]],
  ["v-0366c020","/test4.html",{"title":"Hello VuePress"},["/test4","/test4.md"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
