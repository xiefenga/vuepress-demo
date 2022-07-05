import { resolve } from 'node:path'
import { defineUserConfig, viteBundler, defaultTheme } from 'vuepress'


const sitePage = {
  title: '个人笔记',
  lang: 'zh-CN',
  description: '',
}

export default defineUserConfig({
  ...sitePage,
  theme: defaultTheme(),
  bundler: viteBundler(),
  dest: resolve(__dirname, 'dist'),
  public: resolve(__dirname, 'public'),
  temp: resolve(__dirname, '.vuepress/.temp'),
  cache: resolve(__dirname, '.vuepress/.cache'),
})

