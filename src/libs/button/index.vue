<script>
import { computed } from 'vue'

// type 可选项： 表示按钮风格
const typeEnum = {
  primary: 'text-white  bg-zinc-800 dark:bg-zinc-900  hover:bg-zinc-900 dark:hover:bg-zinc-700 active:bg-zinc-800 dark:active:bg-zinc-700',
  main: 'text-white  bg-main dark:bg-zinc-900  hover:bg-hover-main dark:hover:bg-zinc-700 active:bg-main dark:active:bg-zinc-700',
  info: 'text-zinc-800 dark:text-zinc-300  bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 active:bg-zinc-200 dark:active:bg-zinc-700 '
}

// size 可选项：表示按钮大小。区分文字按钮和icon按钮
const sizeEnum = {
  default: {
    button: 'w-8 h-4 text-base',
    icon: ''
  },
  'icon-default': {
    button: 'w-4 h-4',
    icon: 'w-1.5 h-1.5'
  },
  small: {
    button: 'w-7 h-3 text-base',
    icon: 'w-1.5 h-1.5'
  },
  'icon-small': {
    button: 'w-3 h-3',
    icon: 'w-1.5 h-1.5'
  }
};
</script>

<script setup>
const props = defineProps({
  // icon图标的名字
  icon: String,
  // icon的图标颜色
  iconColor: String,
  // icon的图标类名（匹配tailwind）
  iconClass: String,
  // 按钮风格
  type: {
    type: String,
    default: 'main',
    validator(val) {
      // 获取所有的可选按钮风格
      const keys = Object.keys(typeEnum)
      // 开发者指定风格是否在可选风格中
      const res = !keys.includes(val)
      if (res) throw new Error(`type 必须是 ${keys.join('、')} 中的一个`)
      return res
    }
  },
  // 大小风格
  size: {
    type: String,
    default: 'default',
    validator(val) {
      // 获取所有可选的大小（注意剔除icon开头的元素，因为期望输入size="default"，但不期望输入size="icon-default"）
      const keys = Object.keys(sizeEnum).filter(key => !key.includes('icon'))
      // 指定大小是否在可选大小中
      const res = keys.includes(val)
      if (!res) throw new Error(`你的 size 必须是 ${keys.join('、')} 中的一个`)
      return res
    }
  },
  // 是否需要动画
  isActiveAnim: {
    type: Boolean,
    default: true
  },
  // 加载状态
  isLoading: {
    type: Boolean,
    default: false
  }
});

// 处理大小的key值
const sizeKey = computed(() => {
  return props.icon ? 'icon-' + props.size : props.size
});
</script>

<template>
  <button class="text-sm text-center rounded duration-150 flex justify-center items-center"
    :class="[typeEnum[type], sizeEnum[sizeKey].button, { 'active:scale-105': isActiveAnim }]">

  </button>
</template>

<style lang="scss" scoped>

</style>
