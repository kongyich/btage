<script setup>
import { saveAs } from 'file-saver'
import { message } from '@/libs'
import { ref } from 'vue'
import { useElementBounding, useFullscreen } from '@vueuse/core';
import { weiboShare } from '@/utils/share';
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  width: {
    type: Number
  }
});

// 下载按钮点击事件
const onDownload = () => {
  message('success', '图片开始下载')
  // 1. 下载的图片链接

  setTimeout(() => {
    saveAs(props.data.photoDownLink)
  }, 100)
}

// 生成全屏
const imgTarget = ref(null)
const { enter: onImgFullScreen } = useFullscreen(imgTarget);

const emits = defineEmits(['click'])


const imgContainerCenter = () => {
  const {
    x: imgContainerX,
    y: imgContainerY,
    width: imgContainerWidth,
    height: imgContainerHeight
  } = imgTarget.value.getBoundingClientRect()
  return {
    translateX: parseInt(imgContainerX + imgContainerWidth / 2),
    translateY: parseInt(imgContainerY + imgContainerHeight / 2)
  }
}

// const {
//   x: imgContainerX,
//   y: imgContainerY,
//   width: imgContainerWidth,
//   height: imgContainerHeight
// } = useElementBounding(imgTarget)

// pins跳转记录，记录图片的中心点 （x | y 的位置 + 宽 ｜ 高的一半）
// const imgContainerCenter = computed(() => {
//   return {
//     translateX: parseInt(imgContainerX.value + imgContainerWidth.value / 2),
//     translateY: parseInt(imgContainerY.value + imgContainerHeight.value / 2)
//   }
// })


const onToPinsClick = () => {
  emits('click', {
    id: props.data.id,
    location: imgContainerCenter()
  })
}

// 分享按钮点击处理
const onShareClick = () => {
  weiboShare(props.data.photo, '')
}
</script>

<template>
  <div class="bg-white dark:bg-zinc-900 xl:dark:bg-zinc-800 rounded pb-1">
    <div class="relative w-full rounded cursor-zoom-in group" @click="onToPinsClick">
      <img v-lazy ref="imgTarget" class="w-full rounded bg-transparent" :src="data.photo" :style="{
        height: (width / data.photoWidth) * data.photoHeight + 'px'
      }" alt="">

      <!-- 遮罩层 -->
      <div
        class="hidden opacity-0 w-full h-full bg-zinc-900/50 absolute top-0 left-0 rounded duration-300 group-hover:opacity-100 xl:block">
        <m-button class="absolute top-1.5 left-1.5" @click="onShareClick">分享</m-button>
        <m-button class="absolute top-1.5 right-1.5" type="info" icon="heart"
          iconClass=" fill-zinc-900 dark:fill-zinc-200"></m-button>
        <m-button class="absolute bottom-1.5 left-1.5 bg-zinc-100/70" type="info" size="small" icon="download"
          iconClass="fill-zinc-900 dark:fill-zinc-200" @click="onDownload" />
        <m-button class="absolute bottom-1.5 right-1.5 bg-zinc-100/70" type="info" size="small" icon="full"
          iconClass="fill-zinc-900 dark:fill-zinc-200" @click="onImgFullScreen"></m-button>
      </div>
    </div>

    <p class="text-sm mt-1 font-bold text-zinc-900 dark:text-zinc-300 line-clamp-2 px-1" alt>
      {{ data.title }}
    </p>
    <!-- 作者 -->
    <div class="flex items-center mt-1 px-1">
      <img v-lazy class="h-2 w-2 rounded-full" :src="data.avatar" alt="" />
      <span class="text-sm text-zinc-500 ml-1">{{ data.author }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
