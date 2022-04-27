export const themeData = {
  "logo": "/images/logo_icon.svg",
  "sidebarDepth": 0,
  "locales": {
    "/": {
      "selectLanguageName": "English",
      "sidebar": [
        "/",
        "/test1",
        "/test2",
        {
          "text": "Foo",
          "children": [
            "/test3",
            "/test4"
          ]
        }
      ]
    },
    "/zh/": {
      "selectLanguageName": "简体中文",
      "selectLanguageText": "选择语言",
      "selectLanguageAriaLabel": "选择语言",
      "sidebar": [
        "/zh/",
        "/zh/test1",
        {
          "text": "Foo",
          "children": [
            "/zh/test3",
            "/zh/test4"
          ]
        }
      ]
    }
  },
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
