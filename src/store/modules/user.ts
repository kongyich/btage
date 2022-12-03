import md5 from 'md5'
import { loginUser, getProfile } from '@/api/sys'
import { message } from '@/libs'

// user 模块
export default {
  // 独立作用域
  namespace: true,
  state: () => {
    return {
      // 登录的token
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    setToken(state, newToken) {
      state.token = newToken
    },
    // 保存用户信息
    setUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo
    }
  },

  actions: {
    async login(context, payload) {
      // 加密密码
      const { password } = payload
      let res = await loginUser({
        ...payload,
        password: password ? md5(password) : ''
      })

      // 保存token
      context.commit('setToken', res.token)
      context.dispatch('profile')
    },

    // 获取用户信息
    async profile(context) {
      const res = await getProfile()
      context.commit('setUserInfo', res)
      // 提示
      message('success', `欢迎！`)
    }
  }
}
