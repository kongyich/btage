import md5 from 'md5'
import { loginUser } from '@/api/sys'

// user 模块
export default {
  // 独立作用域
  namespace: true,
  state: () => {
    return {
      // 登录的token
      token: ''
    }
  },
  mutations: {
    setToken(state, newToken) {
      state.token = newToken
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
    }
  }
}
