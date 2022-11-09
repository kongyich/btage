import { createStore } from 'vuex'
import getters from './getters'
import category from './modules/category'
import theme from './modules/theme'
import app from './modules/app'
import search from './modules/search'
import createPersistedstate from 'vuex-persistedstate'

const store = createStore({
  getters,
  modules: {
    theme,
    category,
    app,
    search
  },
  plugins: [
    createPersistedstate({
      // 指定保存到 localStorge 中的key
      key: 'categorys',
      // 需要保存的模块
      paths: ['category', 'theme', 'search']
    })
  ]
})

export default store
