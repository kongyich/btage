import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 软连接
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  },
  // 跨域代理
  server: {
    proxy: {
      // 代理所有 /api
      '/api': {
        // 代理后的api请求
        target: 'https://api.imooc-front.lgdsunday.club/',
        // 跨域
        changeOrigin: true
      }
    }
  }
})
