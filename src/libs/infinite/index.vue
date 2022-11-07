<template>
  <div>
    <!-- 内容 -->
    <slot />
    <div ref="loadingTarget" class="h-6 py-4">
      <!-- 加载更多 -->
      <m-svg-icon v-show="loading" class="w-4 h-4 mx-auto animate-spin" name="infinite-load"></m-svg-icon>
      <!-- 没有更多数据 -->

      <p v-if="isFinished" class=" text-center text-base text-zinc-400">已经没有更所数据了</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useIntersectionObserver, useInterval, useVModel } from '@vueuse/core'

const props = defineProps({
  // 是否处于加载状态
  modelValue: {
    type: Boolean,
    required: true
  },
  // 数据是否全部加载完成
  isFinished: {
    type: Boolean,
    default: true
  }
});


const emits = defineEmits(['onLoad', 'update:modelValue'])

// 处理loading状态
const loading = useVModel(props);

// 滚动的元素
const loadingTarget = ref(null)

// 记录当前是否在底部
const targetIsIntersecting = ref(false)

useIntersectionObserver(loadingTarget, ([{ isIntersecting }]) => {
  targetIsIntersecting.value = isIntersecting
  emitLoad()
})

// 触发load事件
const emitLoad = () => {
  // 当加载更多视图可见时 && loading 为 false && 数据尚未全部加载完毕 处理加载更多的逻辑
  if (targetIsIntersecting.value && !loading.value && !props.isFinished) {
    // 修改加载数据标记
    loading.value = true
    // 触发加载更多行为
    emits('onLoad')
  }
}


// 监听load的变化，解决数据加载完成之后，数据未铺满全屏的问题
watch(loading, emitLoad);
</script>

<style scoped>

</style>
