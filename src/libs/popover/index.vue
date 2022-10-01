<script>
const DELAY_TIME = 100
const PROP_TOP_LEFT = 'top_left'
const PROP_TOP_RIGHT = 'top_right'
const PROP_BOTTOM_LEFT = 'bottom_left'
const PROP_BOTTOM_RIGHT = 'bottom_right'

// 定义指定位置Enum
const placementEnum = [
  PROP_TOP_LEFT,
  PROP_TOP_RIGHT,
  PROP_BOTTOM_LEFT,
  PROP_BOTTOM_RIGHT
];
</script>
<script setup>
import { ref } from "@vue/reactivity"
import { nextTick, watch } from "@vue/runtime-core";

const props = defineProps({
  placement: {
    type: String,
    default: 'bottom-left',
    validator(val) {
      const res = placementEnum.includes(val)
      if (!res) {
        throw new Error()
      }

      return res
    }
  }
})

let isVisable = ref(false)
let timer

const onMouseLeave = () => {
  timer = setTimeout(() => {
    isVisable.value = false
    timer = null
  }, DELAY_TIME)
}
const onMouseEnter = () => {
  if (timer) {
    clearTimeout(timer)
  }
  isVisable.value = true
};

const referenceTarget = ref(null);
const contentTarget = ref(null);

const useElementSize = target => {
  if (!target) return {}
  return {
    width: target.offsetWidth,
    height: target.offsetHeight
  }
};

const contentStyle = ref({
  top: 0,
  left: 0
});

watch(isVisable, val => {
  if (!val) return

  // vue在数据发生改变后，不会立马改变DOM，我们可以通过nextTick函数的参数，来监听DOM变化之后的回调
  nextTick(() => {
    switch (props.placement) {
      case PROP_TOP_LEFT:
        contentStyle.value.top = 0
        contentStyle.value.left = -useElementSize(contentTarget.value).width + 'px'
        break
      case PROP_TOP_RIGHT:
        contentStyle.value.top = 0
        contentStyle.value.left = useElementSize(referenceTarget.value).width + 'px'
        break
      case PROP_BOTTOM_LEFT:
        contentStyle.value.top = useElementSize(referenceTarget.value).height + 'px'
        contentStyle.value.left = -useElementSize(contentTarget.value).width + 'px'
        break
      case PROP_BOTTOM_RIGHT:
        contentStyle.value.top = useElementSize(referenceTarget.value).height + 'px'
        contentStyle.value.left = useElementSize(referenceTarget.value).width + 'px'
        break
    }
  })
});
</script>

<template>
  <div class="relative" @mouseleave="onMouseLeave" @mouseenter="onMouseEnter">
    <div ref="referenceTarget">
      <!-- 具名插槽 触发内容弹层-->
      <slot name="reference" />
    </div>

    <transition name="slide">
      <div v-show="isVisable" ref="contentTarget" :style="contentStyle"
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
