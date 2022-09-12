import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import { useREM } from '@/utils/flexible'

useREM()
createApp(App).use(router).mount('#app')
