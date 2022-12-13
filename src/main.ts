import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import { useREM } from '@/utils/flexible'
import useTheme from '@/utils/theme'
import 'virtual:svg-icons-register'
import store from '@/store'
import './premission.ts'
// 注册svg-icons
import mLibs from '@/libs'
import mDirectives from './directives'

useREM()
useTheme()
createApp(App).use(router).use(store).use(mLibs).use(mDirectives).mount('#app')
