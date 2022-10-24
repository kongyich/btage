<script setup>
import { getPexlesList } from '@/api/pexels'
import { ref } from '@vue/reactivity'
import { isMobileTerminal } from '@/utils/flexible'
import itemVue from './item.vue'


const pexelsList = ref([])

let query = {
  page: 1,
  size: 20
}
const getPexlesData = async () => {
  const res = await getPexlesList(query)
  pexelsList.value = res.list
}

getPexlesData()
</script>

<template>
  <div>
    <m-waterfall class="flex-1 w-full" :data="pexelsList" nodeKey="id" :column="isMobileTerminal ? 2 : 5"
      :picturePreReading="false">
      <template v-slot="{ item, width }">
        <itemVue :data="item" :width="width" @click="onToPins" />
      </template>

    </m-waterfall>

  </div>
</template>

<style lang="scss" scoped>

</style>
