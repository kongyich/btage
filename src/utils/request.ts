import axios from 'axios'
import store from '@/store';

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    // 添加 icode
    config.headers.icode = 'E24C7E868FA46FFA'
    // 必须返回 config
    return config
  }
)

// 响应拦截器
// 服务端返回数据之后，前端调用.then之前被调用

service.interceptors.response.use(res => {
  const { success, message, data } = res.data

  if (success) {
    return data
  }

  // 请求错误
  return Promise.reject(new Error(message))
}, error => {
  // 处理token超时
  if (error.response?.data?.code === 401) {
    store.dispatch('logout')
  }

  return Promise.reject(error)
})

export default service
