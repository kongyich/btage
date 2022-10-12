import { TYPE_LIGHT, TYPE_DARK } from '@/constants'
import { watch } from 'vue'
import store from '../store'

// 初始化主题
export default () => {
  // 1. 当主题发生改变时，或者当进入系统时，可以进行html class的配置
  watch(
    () => store.getters.themeType,
    val => {
      // html的class
      let themeClassName = ''

      switch (val) {
        case TYPE_LIGHT:
          themeClassName = 'light'
          break
        case TYPE_DARK:
          themeClassName = 'dark'
          break
      }

      // 修改html的class
      document.querySelector('html').className = themeClassName
    },
    {
      immediate: true
    }
  )
}
