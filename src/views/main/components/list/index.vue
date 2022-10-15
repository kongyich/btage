<script setup>
import { getPexlesList } from '@/api/pexels'
import { ref } from '@vue/reactivity'
import itemVue from './item.vue'


const pexelsList = ref([])

let query = {
  page: 1,
  size: 20
}
const getPexlesData = async () => {
  const res = await getPexlesList(query)
  pexelsList.value = res.list
  console.log(res);
}

getPexlesData()
</script>

<template>
  <div>
    <item-vue v-for="item in pexelsList" :key="item.id" :data="item" />
  </div>
</template>

<style lang="scss" scoped>

</style>
