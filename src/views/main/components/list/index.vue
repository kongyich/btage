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
// 数据是否在加载中
const loading = ref(false)
// 数据是否全部加载完成
const isFinished = ref(false)

const getPexlesData = async () => {

  // 数据全部加载完成，直接return
  if (isFinished.value) {
    return
  }

  // 完成了第一次请求之后，后续的请求让page自增
  if (pexelsList.value.length) {
    query.page += 1
  }

  // 触发接口
  const res = await getPexlesList(query)

  if (query.page === 1) {
    pexelsList.value = res.list
  } else {
    pexelsList.value.push(...res.list)
  }

  // 判断数据是否全部加载完成
  if (pexelsList.value.length === res.total) {
    isFinished.value = true
  }

  // 修改loading标记
  loading.value = false

}

getPexlesData()
</script>

<template>
  <div>
    <m-infinite v-model="loading" :isFinished="isFinished" @onLoad="getPexlesData">
      <m-waterfall class="flex-1 w-full" :data="pexelsList" nodeKey="id" :column="isMobileTerminal ? 2 : 5"
        :picturePreReading="false">
        <template v-slot="{ item, width }">
          <itemVue :data="item" :width="width" @click="onToPins" />
        </template>
      </m-waterfall>
    </m-infinite>
  </div>
</template>

<style lang="scss" scoped>

</style>
