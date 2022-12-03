export default {
  categorys: state => state.category.categorys,
  themeType: state => state.theme.themeType,

  // category选中项
  currentCategory: state => state.app.currentCategory,

  // 选中项的下标
  currentCategoryIndex: (state, getters) => {
    return getters.categorys.findIndex(item => {
      return item.id === getters.currentCategory.id
    })
  },

  // 搜索历史
  historys: state => state.search.historys,

  // 搜索文本
  searchText: state => state.app.searchText,

  // 返回token
  token: state => state.user.token,

  // 用户信息
  userInfo: state => state.user.userInfo
}
