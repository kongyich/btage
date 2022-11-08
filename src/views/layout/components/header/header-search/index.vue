<script setup>
import { ref } from "@vue/reactivity";
import hintVue from './hint.vue'
const inputVal = ref('');

// 搜索回调
const onSearchHandler = val => {
  inputVal.value = val
}
</script>

<template>
  <div class="w-full">
    <m-search v-model="inputVal">
      <template #dropdown>
        <div>
          <!-- 搜索提示 -->
          <hint-vue :searchText="inputVal" v-show="inputVal" @itemClick="onSearchHandler" />
        </div>
      </template>
    </m-search>
  </div>
</template>



<style>

</style>
