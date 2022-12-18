<script setup>
import { getPexlesList } from '@/api/pexels'
import { ref } from '@vue/reactivity'
import { isMobileTerminal } from '@/utils/flexible'
import itemVue from './item.vue'
import pinsVue from '@/views/pins/components/pins.vue'
import gsap from 'gsap'
import { useStore } from 'vuex'
import { watch } from '@vue/runtime-core'
import { useEventListener } from '@vueuse/core'

const pexelsList = ref([])
const store = useStore()

let query = {
  page: 1,
  size: 20
}
// 数据是否在加载中
const loading = ref(false)
// 数据是否全部加载完成
const isFinished = ref(false)

const getPexlesData = async () => {

  // 数据全部加载完成，直接return
  if (isFinished.value) {
    return
  }

  // 完成了第一次请求之后，后续的请求让page自增
  if (pexelsList.value.length) {
    query.page += 1
  }

  // 触发接口
  const res = await getPexlesList(query)

  if (query.page === 1) {
    pexelsList.value = res.list
  } else {
    pexelsList.value.push(...res.list)
  }

  // 判断数据是否全部加载完成
  if (pexelsList.value.length === res.total) {
    isFinished.value = true
  }

  // 修改loading标记
  loading.value = false
}

// 通过此方法修改query，重新发起请求
const resetQuery = newQuery => {
  query = { ...query, ...newQuery }
  // 重置状态
  isFinished.value = false
  pexelsList.value = []
}

// 监听变化
watch(() => store.getters.currentCategory, currentCategory => {
  resetQuery({
    page: 1,
    categoryId: currentCategory.id
  })
})


// 监听searchText的变化
watch(() => store.getters.searchText, val => {
  resetQuery({
    page: 1,
    searchText: val
  })
})

getPexlesData()

// 控制pins展示
const isVisiblePins = ref(false)

// 监听浏览器后退按钮
useEventListener(window, 'popstate', () => {
  isVisiblePins.value = false
})

// 当前选中的 pins 属性
const currentPins = ref({})

const onToPins = item => {
  console.log(item, 'rerere');
  // 修改浏览器url
  history.pushState(null, null, `/pins/${item.id}`)
  currentPins.value = item
  isVisiblePins.value = true
};

const beforeEnter = el => {
  gsap.set(el, {
    scaleX: 0,
    scaleY: 0,
    transformOrigin: '0 0',
    translateX: currentPins.value.location?.translateX,
    translateY: currentPins.value.location?.translateY,
    opacity: 0
  })
}
const enter = (el, done) => {
  gsap.to(el, {
    duration: 0.3,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    translateX: 0,
    translateY: 0,
    onComplete: done
  })
}
const leave = (el, done) => {
  gsap.to(el, {
    duration: 0.3,
    scaleX: 0,
    scaleY: 0,
    opacity: 0,
    translateX: currentPins.value.location?.translateX,
    translateY: currentPins.value.location?.translateY,
    onComplete: done
  })
};
</script>

<template>
  <div>
    <m-infinite v-model="loading" :isFinished="isFinished" @onLoad="getPexlesData">
      <m-waterfall class="flex-1 w-full" :data="pexelsList" nodeKey="id" :column="isMobileTerminal ? 2 : 5"
        :picturePreReading="false">
        <template v-slot="{ item, width }">
          <itemVue :data="item" :width="width" @click="onToPins" />
        </template>
      </m-waterfall>
    </m-infinite>


    <!-- 响应内容展示 -->
    <transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <pins-vue v-if="isVisiblePins" :id="currentPins.id" />
    </transition>
  </div>
</template>

<style lang="scss" scoped>

</style>
