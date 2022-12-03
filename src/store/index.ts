import { createStore } from 'vuex'
import getters from './getters'
import category from './modules/category'
import theme from './modules/theme'
import app from './modules/app'
import search from './modules/search'
import user from './modules/user'
import createPersistedstate from 'vuex-persistedstate'

const store = createStore({
  getters,
  modules: {
    theme,
    category,
    app,
    search,
    user
  },
  plugins: [
    createPersistedstate({
      // 指定保存到 localStorge 中的key
      key: 'categorys',
      // 需要保存的模块
      paths: ['category', 'theme', 'search', 'user']
    })
  ]
})

export default store
