<script setup>
import { ref } from "@vue/reactivity";
import hintVue from './hint.vue'
import historyVue from './history.vue'
import themeVue from './theme.vue'
import { useStore } from 'vuex'
const inputVal = ref('');
const store = useStore()

// 搜索回调
const onSearchHandler = val => {
  inputVal.value = val
  if (val) {
    store.commit('addHistory', val)

    // 触发searchText变化
    store.commit('changeSearchText', val)
  }
};
</script>

<template>
  <div class="w-full">
    <m-search v-model="inputVal">
      <template #dropdown>
        <div>
          <!-- 搜索提示 -->
          <hint-vue :searchText="inputVal" v-show="inputVal" @itemClick="onSearchHandler" />

          <!-- 最近搜索 -->
          <history-vue v-show="!inputVal" @itemClick="onSearchHandler"></history-vue>

          <!-- 推荐主题 -->
          <theme-vue v-show="!inputVal" />
        </div>
      </template>
    </m-search>
  </div>
</template>



<style>

</style>
