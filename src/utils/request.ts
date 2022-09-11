import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 添加 icode
    config.headers.icode = '986E5FB575ED5EF0'
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
})

export default service
