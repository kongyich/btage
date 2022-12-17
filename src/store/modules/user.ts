import md5 from 'md5'
import { loginUser, getProfile, registerUser } from '@/api/sys'
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
    // 注册
    async register(context, payload) {
      // 加密密码
      const { password } = payload
      return await registerUser({
        ...payload,
        password: password ? md5(password) : ''
      })
    },
    // 登录
    async login(context, payload) {
      // 加密密码
      const { password } = payload
      let res = await loginUser({
        ...payload,
        password: password ? md5(password) : ''
      })

      // 判断扫码是否需要注册
      if (res.code === 204) {
        return res.code
      }

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
    },

    // 退出登录
    logout(context) {
      // 清空token
      context.commit('setToken', '')
      // 清空用户信息
      context.commit('setUserInfo', {})
      // 刷新页面
      location.reload()
    }
  }
}
