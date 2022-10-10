<script setup>
import { watch } from '@vue/runtime-core';
import { useScrollLock, useVModel } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(["update:modelValue"]);
const isVisable = useVModel(props)

// 锁定滚动
const isLocked = useScrollLock(document.body)

watch(isVisable, val => {
  isLocked.value = val
}, {
  immediate: true
});
</script>

<template>
  <div>
    <teleport to="body">
      <!--蒙版-->
      <transition name="fade">
        <div v-if="isVisable" @click="isVisable = false"
          class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"></div>
      </transition>

      <!--内容-->
      <transition name="popup-down-up">
        <div v-if="isVisable" v-bind="$attr" class="w-screen bg-white dark:bg-zinc-800 z-50 fixed bottom-0">
          <slot />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<style lang="scss" scoped>
// fade 展示动画
.fade-enter-active {
  transition: all 0.3s;
}

.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// popup-down-up 展示动画
.popup-down-up-enter-active {
  transition: all 0.3s;
}

.popup-down-up-leave-active {
  transition: all 0.3s;
}

.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>
  
