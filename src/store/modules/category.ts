import { ALL_CATEGORY_ITEM, NORMAL_CATEGORYS_DATA } from '@/constants'
import { getCategory } from '@/api/category'
// 处理navgation中的数据categorys

export default {
  // 独立作用域
  namespace: true,
  state: {
    // 1. 让categorys具备一个初始化数据
    // 2. 从服务端获取数据，替换初始化数据
    // 3. 为了防止初始化数据太老，我们把每次获取到的新数据，都作为下一次的初始化数据
    categorys: NORMAL_CATEGORYS_DATA
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
