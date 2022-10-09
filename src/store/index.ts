import { createStore } from 'vuex'
import getters from './getters'
import category from './modules/category'
import createPersistedstate from 'vuex-persistedstate'

const store = createStore({
  getters,
  modules: {
    category
  },
  plugins: [
    createPersistedstate({
      // 指定保存到 localStorge 中的key
      key: 'categorys',
      // 需要保存的模块
      paths: ['category']
    })
  ]
})

export default store
