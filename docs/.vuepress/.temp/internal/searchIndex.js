export const searchIndex = [
  {
    "title": "Hello VuePress",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Hello test1",
    "headers": [],
    "path": "/test1.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Hello test2",
    "headers": [
      {
        "level": 2,
        "title": "Hello test2 h2",
        "slug": "hello-test2-h2",
        "children": []
      }
    ],
    "path": "/test2.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Hello test3",
    "headers": [
      {
        "level": 2,
        "title": "Hello test3 h2",
        "slug": "hello-test3-h2",
        "children": []
      }
    ],
    "path": "/test3.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "h1 Heading 😎",
    "headers": [
      {
        "level": 2,
        "title": "h2 Heading",
        "slug": "h2-heading",
        "children": [
          {
            "level": 3,
            "title": "h3 Heading",
            "slug": "h3-heading",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Horizontal Rules",
        "slug": "horizontal-rules",
        "children": []
      },
      {
        "level": 2,
        "title": "Typographic replacements",
        "slug": "typographic-replacements",
        "children": []
      },
      {
        "level": 2,
        "title": "Emphasis",
        "slug": "emphasis",
        "children": []
      },
      {
        "level": 2,
        "title": "Blockquotes",
        "slug": "blockquotes",
        "children": []
      },
      {
        "level": 2,
        "title": "Lists",
        "slug": "lists",
        "children": []
      },
      {
        "level": 2,
        "title": "Code",
        "slug": "code",
        "children": []
      },
      {
        "level": 2,
        "title": "Tables",
        "slug": "tables",
        "children": []
      },
      {
        "level": 2,
        "title": "Links",
        "slug": "links",
        "children": []
      },
      {
        "level": 2,
        "title": "Images",
        "slug": "images",
        "children": []
      },
      {
        "level": 2,
        "title": "Plugins",
        "slug": "plugins",
        "children": [
          {
            "level": 3,
            "title": "Emojies",
            "slug": "emojies",
            "children": []
          },
          {
            "level": 3,
            "title": "Subscript / Superscript",
            "slug": "subscript-superscript",
            "children": []
          },
          {
            "level": 3,
            "title": "<ins>",
            "slug": "ins",
            "children": []
          },
          {
            "level": 3,
            "title": "<mark>",
            "slug": "mark",
            "children": []
          },
          {
            "level": 3,
            "title": "Footnotes",
            "slug": "footnotes",
            "children": []
          },
          {
            "level": 3,
            "title": "Definition lists",
            "slug": "definition-lists",
            "children": []
          },
          {
            "level": 3,
            "title": "Abbreviations",
            "slug": "abbreviations",
            "children": []
          },
          {
            "level": 3,
            "title": "Custom containers",
            "slug": "custom-containers",
            "children": []
          }
        ]
      }
    ],
    "path": "/test4.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Hello Zh VuePress",
    "headers": [
      {
        "level": 2,
        "title": "🎉 表情",
        "slug": "表情",
        "children": []
      }
    ],
    "path": "/zh/",
    "pathLocale": "/zh/",
    "extraFields": []
  },
  {
    "title": "Hello Zh test1",
    "headers": [],
    "path": "/zh/test1.html",
    "pathLocale": "/zh/",
    "extraFields": []
  },
  {
    "title": "Hello Zh test2",
    "headers": [
      {
        "level": 2,
        "title": "Hello Zh test2 h2",
        "slug": "hello-zh-test2-h2",
        "children": []
      }
    ],
    "path": "/zh/test2.html",
    "pathLocale": "/zh/",
    "extraFields": []
  },
  {
    "title": "Hello Zh test3",
    "headers": [
      {
        "level": 2,
        "title": "Hello Zh test3 h2",
        "slug": "hello-zh-test3-h2",
        "children": []
      }
    ],
    "path": "/zh/test3.html",
    "pathLocale": "/zh/",
    "extraFields": []
  },
  {
    "title": "Hello Zh test4",
    "headers": [
      {
        "level": 2,
        "title": "Hello Zh test4 h2",
        "slug": "hello-zh-test4-h2",
        "children": []
      }
    ],
    "path": "/zh/test4.html",
    "pathLocale": "/zh/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
