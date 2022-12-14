import { ALL_CATEGORY_ITEM } from '@/constants'
// app模块中的数据不会被缓存

export default {
  namespace: true,
  state: () => {
    return {
      // 当前选中的分类
      currentCategory: ALL_CATEGORY_ITEM,

      // 搜索的文本
      searchText: '',

      // 路由跳转类型
      routeType: 'none'
    }
  },
  mutations: {
    // 切换选中分类
    changeCurrentCategory(state, newCategory) {
      state.currentCategory = newCategory
    },

    // 修改searchText
    changeSearchText(state, newSearchVal) {
      state.searchText = newSearchVal
    },

    // 修改routerType
    changeRouteType(state, newRouteType) {
      state.routeType = newRouteType
    }
  },
  actions: {}
}
