import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
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

export default service
