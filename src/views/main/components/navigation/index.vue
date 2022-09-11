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

  const categoryData = ref([])
  const getCategoryData = async() => {
    const { categorys } = await getCategory()
    categoryData.value = categorys
  }

  getCategoryData()
</script>

<style>

</style>
