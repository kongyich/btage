<template>
  <div>
    <mobile-navigation v-if="isMobileTerminal" />
  </div>
</template>

<script setup>
// import { ref } from 'vue' 
import { isMobileTerminal } from '@/utils/flexible.ts'
import mobileNavigation from './mobile/index.vue'
import { useStore } from 'vuex'

const store = useStore()
// 触发 category 数据获取动作
store.dispatch('useCategoryData')
</script>
