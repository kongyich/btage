import { ALL_CATEGORY_ITEM } from '@/constants'
import { getCategory } from '@/api/category'
// 处理navgation中的数据categorys

export default {
  // 独立作用域
  namespace: true,
  state: {
    // return {
    categorys: [ALL_CATEGORY_ITEM]
    // }
  },
  mutations: {
    setCategorys(state, newCategorys) {
      state.categorys = [ALL_CATEGORY_ITEM, ...newCategorys]
    }
  },

  actions: {
    // 获取 category 数据
    async useCategoryData({ commit }) {

      const { categorys } = await getCategory()
      commit('setCategorys', categorys)
    }
  }
}
