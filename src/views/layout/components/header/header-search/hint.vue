<script>
const EMITS_ITEM_CLICK = 'itemClick';
</script>


<script setup>
import { getHint } from '@/api/pexels'
import { watch, ref } from 'vue';
import { watchDebounced } from '@vueuse/core'
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
watchDebounced(() => props.searchText, getHintData, {
  immediate: true,
  // 每次事件触发时，延迟的时间
  debounce: 500
});

const emits = defineEmits([EMITS_ITEM_CLICK])
// item点击事件处理
const onItemClick = item => {
  emits(EMITS_ITEM_CLICK, item)
}

// 处理关键字高亮，生成高亮标签
const highLightText = text => {
  // 正则 表达式 从显示文本中找到与用户输入文本相同的内容，使用高亮标签进行替换
  const highlightStr = `<span class="text-zinc-900 dark:text-zinc-200">${props.searchText}</span>`
  const reg = new RegExp(props.searchText, 'gi')
  // 替换
  return text.replace(reg, highlightStr)
}
</script>

<template>
  <div>
    <div v-for="(item, index) in hintData" :key="index" @click="onItemClick(item)"
      class="py-1 pl-1 text-base font-bold text-zinc-500 rounded cursor-pointer duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-900"
      v-html="highLightText(item)">
    </div>
  </div>
</template>

<style scoped>

</style>
