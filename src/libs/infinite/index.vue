<template>
  <div>
    <!-- 内容 -->
    <slot />
  </div>
</template>

<script setup>
import { useVModel } from '@vueuse/core'

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


const emit = defineEmits(['onLoad', 'update:modelValue'])

// 处理loading状态
const loading = useVModel(props)
</script>

<style scoped>

</style>
