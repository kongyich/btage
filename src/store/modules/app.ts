import { ALL_CATEGORY_ITEM } from '@/constants'
// app模块中的数据不会被缓存

export default {
  namespace: true,
  state: () => {
    return {
      // 当前选中的分类
      currentCategory: ALL_CATEGORY_ITEM
    }
  },
  mutations: {
    changeCurrentCategory(state, newCategory) {
      state.currentCategory = newCategory
    }
  },
  actions: {}
}
