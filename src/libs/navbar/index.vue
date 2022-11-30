<script setup>
import { useRouter } from "vue-router";



const props = defineProps({
  // 左边按钮的点击
  clickLeft: Function,
  // 右边按钮的点击
  clickRight: Function,
  // 是否吸顶 ？
  sticky: Boolean
});

const router = useRouter()
// 点击事件 - 左侧按钮
const onClickLeft = () => {
  if (props.clickLeft) {
    props.clickLeft()
    return
  }
  router.back()
}

// 点击事件 - 右侧按钮
const onClickRight = () => {
  if (props.clickRight) {
    props.clickRight()
  }
}
</script>

<template>
  <div
    class="w-full h-5 border-b flex items-center z-10 bg-white dark:bg-zinc-200 border-b-zinc-200 dark:border-b-zinc-700"
    :class="[sticky ? 'sticky top-0 left-0' : 'relative']">

    <!-- 左 -->
    <div @click="onClickLeft" class=" h-full w-5 absolute left-0 flex items-center justify-center">
      <slot name="left">
        <m-svg-icon name="back" class="h-2 w-2" fillClass="fill-zinc-900 dark:fill-zinc-200"></m-svg-icon>
      </slot>
    </div>
    <!-- 中 -->
    <div class="h-full flex items-center justify-center m-auto font-bold text-base text-zinc-900 dark:text-zinc-200">
      <slot />
    </div>

    <!-- 右 -->
    <div @click="onClickRight" class="h-full w-5 right-0 flex items-center justify-center absolute">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>
