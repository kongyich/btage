<script setup>
import { ref } from "@vue/reactivity"


const isVisable = ref(false)

const onMouseLeave = () => { }
const onMouseEnter = () => { };
</script>

<template>
  <div class=" relative" @mouseleave="onMouseLeave" @mouseenter="onMouseEnter">
    <div>
      <!-- 具名插槽 触发内容弹层-->
      <slot name="reference" />
    </div>

    <transition name="slide">
      <div v-show="isVisable" class="absolute p-1 z-20 bg-white border rounded-md">
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
