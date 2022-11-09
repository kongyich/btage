// 搜索相关
export default {
  namespace: true,
  state: () => {
    return {
      historys: []
    }
  },
  mutations: {
    // 新增
    // 1. 新增的历史记录位于头部
    // 2. 不可出现重复的记录
    addHistory(state, newHistory) {
      const isFindIndex = state.historys.findIndex(item => item === newHistory)
      // 当前记录是否已经存在于原history数组中？
      if (isFindIndex !== -1) state.historys.splice(isFindIndex, 1)
      // 新增记录
      state.historys.unshift(newHistory)
    },

    // 单个删除
    deleteHistory(state, index) {
      state.historys.splice(index, 1)
    },

    // 全部删除
    deleteAllHistory(state) {
      state.historys = []
    }
  },
  actions: {}
}
