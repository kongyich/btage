<script setup>
import { getPexelsFromId } from '@/api/pexels'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { isMobileTerminal } from '../../../utils/flexible';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const pexelData = ref({})

const getPexelsData = async () => {
  let res = await getPexelsFromId(props.id)
  console.log(res);
  pexelData.value = res
}
getPexelsData();

// 关闭按钮
const router = useRouter()
const onPop = () => {
  router.back()
};
</script>

<template>
  <div
    class="fixed left-0 top-0 w-screen h-screen text-xl z-20 backdrop-blur-4xl bg-transparent pb-2 overflow-y-auto xl:p-2">
    <!-- 移动端下的navbar -->
    <m-navbar v-if="isMobileTerminal">
      {{ pexelData.title }}

      <template #right>
        <m-svg-icon name="share" class="w-3 h-3" fillClass="fill-zinc-900 dark:fill-zinc-200"></m-svg-icon>
      </template>
    </m-navbar>

    <!-- pc端下的 -->
    <m-svg-icon v-else name="close"
      class="w-3 h-3 ml-1 p-0.5 cursor-pointer duration-200 rounded-sm hover:bg-zinc-100 absolute right-2 top-2"
      fillClass="fill-zinc-400" @click="onPop">
    </m-svg-icon>


    <!-- 内容区 -->
    <div v-if="pexelData.title" class="xl:w-[80%] xl:h-full xl:mx-auto xl:rounded-lg xl:flex">
      <img class="w-screen mb-2 xl:w-3/5 xl:h-full xl:rounded-tl-lg xl:rounded-bl-lg" :src="pexelData.photo" alt="">
      <div class="xl:w-2/5 xl:h-full xl:bg-white xl:dark:bg-zinc-900 xl:rounded-tr-lg xl:rounded-tb-lg xl:p-3">
        <!-- pc下分享/收藏 -->
        <div v-if="!isMobileTerminal" class="flex justify-between mb-2">
          <m-svg-icon name="share"
            class="w-4 h-4 p-1 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800 duration-300 rounded"
            fillClass="fill-zinc-900 dark:fill-zinc-200"></m-svg-icon>

          <m-button class="" type="info" icon="heart" iconClass="fill-zinc-900 dark:fill-zinc-200" />
        </div>
        <!-- 标题 -->
        <p class="text-base text-zinc-900 dark:text-zinc-200 ml-1 font-bold xl:text-xl xl:mb-5">
          {{ pexelData.title }}
        </p>
        <!-- 作者 -->
        <div class="flex items-center mt-1 px-1">
          <img v-lazy class="h-3 w-3 rounded-full" :src="pexelData.avatar" alt="" />
          <span class="text-base text-zinc-900 dark:text-zinc-200 ml-1">{{
              pexelData.author
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
