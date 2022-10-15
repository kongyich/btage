import store from '@/store'
import { watch } from 'vue'
import { TYPE_LIGHT, TYPE_DARK, TYPE_SYSTEM } from '@/constants'

/**
 * 监听系统主题变更
 */
let matchMedia
const watchSystemThemeChange = () => {
  // 仅需初始化一次即可
  if (matchMedia) return
  matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
  // 监听主题变更
  matchMedia.onchange = function () {
    changeTheme(TYPE_SYSTEM)
  }
}

/**
 * 变更主题
 * @param {*} theme 主题的标记常量
 */
const changeTheme = (theme) => {
  // html 的 class
  let themeClassName = ''
  switch (theme) {
    case TYPE_LIGHT:
      themeClassName = 'light'
      break
    case TYPE_DARK:
      themeClassName = 'dark'
      break
    case TYPE_SYSTEM:
      watchSystemThemeChange()
      themeClassName = matchMedia.matches ? 'dark' : 'light'
      break
  }
  // 修改 html 的 class
  document.querySelector('html').className = themeClassName
}

/**
 * 初始化主题
 */
export default () => {
  watch(() => store.getters.themeType, changeTheme, {
    // 初始执行一次
    immediate: true
  })
}
