<script setup>
import { ref } from "@vue/reactivity";

const inputVal = ref('');
</script>

<template>
  <div class="w-full">
    <m-search v-model="inputVal">
      <template #dropdown>
        <div>haha</div>
      </template>
    </m-search>
  </div>
</template>



<style>

</style>
