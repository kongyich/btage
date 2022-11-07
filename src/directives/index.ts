import lazy from './modules/lazy'

// 全局注册指令

export default {
  install(app) {
    const directives = import.meta.glob('./modules/*.ts')

    for (const [key, value] of Object.entries(directives)) {
      const arr = key.split('/')
      const name = arr[arr.length - 1].replace('.ts', '')
      app.directive(name, value)
    }
  }
}
