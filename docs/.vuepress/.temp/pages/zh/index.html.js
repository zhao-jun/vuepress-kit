export const data = {
  "key": "v-2d0ad528",
  "path": "/zh/",
  "title": "Hello Zh VuePress",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "๐ ่กจๆ",
      "slug": "่กจๆ",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "zh/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
