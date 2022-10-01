<script setup>
import { ref } from "@vue/reactivity"

let isVisable = ref(false)

const onMouseLeave = () => { isVisable.value = false }
const onMouseEnter = () => { isVisable.value = true };
</script>

<template>
  <div class="relative" @mouseleave="onMouseLeave" @mouseenter="onMouseEnter">
    <div>
      <!-- 具名插槽 触发内容弹层-->
      <slot name="reference" />
    </div>

    <transition name="slide">
      <div v-show="isVisable"
        class="absolute p-1 z-20 bg-white dark:bg-zinc-900 border rounded-md dark:border-zinc-700">
        <!-- 匿名插槽 弹出层内容 -->
        <slot />
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
</style>
