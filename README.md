# vuepress-kit

搭建基本 [VuePress2](https://v2.vuepress.vuejs.org/zh/) 环境，用于快速启动 [VuePress2](https://v2.vuepress.vuejs.org/zh/)

## 快速开始

```bash
# 克隆项目
$ git clone https://github.com/zhao-jun/vuepress-kit.git
# 全局安装 yarn
# For Windows:
$ npm i yarn -g
# For macOS:
$ sudo npm i yarn -g
# 进入工程
$ cd vuepress-kit
# 安装依赖
$ yarn install
# 启动项目
$ yarn run docs:dev
```

## 公共文件

  - public 目录
  
## 搜索

  - 插件 @vuepress/plugin-search
  - 修改默认宽度

## 主题样式

  - 自带插件 @vuepress/plugin-palette

## favicon.ico 设置

```js
head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
```

## 语言切换

## markdown 

  - https://github.com/markdown-it/markdown-it
  - 在线演示：https://markdown-it.github.io/