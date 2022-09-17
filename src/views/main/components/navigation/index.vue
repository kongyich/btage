<template>
  <div>
    <mobile-navigation v-if="isMobileTerminal" :data="categoryData" />
  </div>
</template>

<script setup>
  import { ref } from 'vue' 
  import { isMobileTerminal } from '@/utils/flexible.ts'
  import mobileNavigation from './mobile/index.vue'

  import { getCategory } from '@/api/category'
import { ALL_CATEGORY_ITEM } from '@/constants'

  const categoryData = ref([])
  const getCategoryData = async() => {
    const { categorys } = await getCategory()
    categoryData.value = categorys
    categoryData.value.unshift(ALL_CATEGORY_ITEM)
  }

  getCategoryData()
</script>
