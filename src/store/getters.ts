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
  }
}
