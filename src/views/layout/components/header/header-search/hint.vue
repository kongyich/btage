<script>
const EMITS_ITEM_CLICK = 'itemClick';
</script>


<script setup>
import { getHint } from '@/api/pexels'
import { watch, ref } from 'vue';
const props = defineProps({
  searchText: {
    type: String,
    required: true
  }
})


// 处理搜索提示的数据获取
const hintData = ref([])

const getHintData = async () => {
  if (!props.searchText) return
  const { result } = await getHint(props.searchText)
  hintData.value = result
}

// watch 可以监听响应式数据或者一个包含 getter 的数据
watch(() => props.searchText, getHintData, {
  immediate: true
});

const emits = defineEmits([EMITS_ITEM_CLICK])
// item点击事件处理
const onItemClick = item => {
  emits(EMITS_ITEM_CLICK, item)
}
</script>

<template>
  <div>
    <div v-for="(item, index) in hintData" :key="index" @click="onItemClick(item)"
      class="py-1 pl-1 text-base font-bold text-zinc-500 rounded cursor-pointer duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-900">
      {{ item }}
    </div>
  </div>
</template>

<style scoped>

</style>
