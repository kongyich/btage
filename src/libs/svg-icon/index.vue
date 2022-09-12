<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 显示的svg
  name: {
    type: String,
    required: true
  },
  // svg图标的颜色
  color: {
    type: String
  },
  // tailwind指定颜色的类名
  fillClass: {
    type: String
  }
})

// 显示真实的svg图标 （拼接icon-xx）
const synbolId = computed(()=>`#icon-${props.name}`)
</script>

<template>
  <svg aria-hidden="true">
    <use :xlink:href="synbolId" :color="fillClass" :fill="color" />
  </svg>
</template>

<style>

</style>
