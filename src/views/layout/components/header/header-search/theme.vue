<template>
  <div>
    <div class=" text-xs mb-1 text-zinc-400">热门精选</div>
    <div class="flex h-[140px]" v-if="themeData.list.length">
      <!-- 大图 -->
      <div class="relative rounded cursor-pointer w-[260px]" :style="{ backgroundColor: randomRGB() }">
        <img v-lazy class="h-full w-full object-cover rounded" :src="themeData.big.photo" alt="">
        <p
          class="absolute bottom-0 left-0 w-full h-[45%] flex items-center backdrop-blur rounded px-1 text-white text-xs duration-300 hover:backdrop-blur-none">
          # {{ themeData.big.title }}</p>
      </div>

      <!-- 小图 -->
      <div class="flex flex-wrap flex-1 max-w-[860px]">
        <div class="h-[45%] w-[260px] text-xs text-white relative ml-1.5 mb-1.5 rounded" v-for="item in themeData.list"
          :key="item.id">
          <img v-lazy class=" w-full h-full object-cover rounded" :src="item.photo" alt="" />
          <p
            class=" absolute backdrop-blur top-0 left-0 w-full h-full flex items-center px-1 rounded cursor-pointer duration-300 hover:backdrop-blur-none">
            # {{ item.title }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getThemes } from '../../../../../api/pexels';
import { randomRGB } from '@/utils/color'

const themeData = ref({
  big: {},
  list: []
})
const getThemeData = async () => {
  let { themes } = await getThemes()
  console.log(themes, 'getThemeData');
  themeData.value = {
    big: themes[0],
    list: themes.slice(1)
  }
}
getThemeData()
</script>

<style scoped>

</style>
