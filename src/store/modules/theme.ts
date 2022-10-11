import { TYPE_LIGHT } from '@/constants'
export default {
  namespace: true,
  state: {
    themeType: TYPE_LIGHT,
  },

  mutations: {
    changeThemeType(state, newTheme) {
      state.themeType = newTheme
    }
  }
}
