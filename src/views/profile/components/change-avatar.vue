<script>
const EMITS_CLOSE = 'close';
</script>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'

const onConfirmClick = () => { }
const props = defineProps({
  blob: {
    type: String
  }
});

const emits = defineEmits([EMITS_CLOSE])
/**
 * 关闭事件
 */
const close = () => {
  emits(EMITS_CLOSE)
}
</script>

<template>
  <div class="overflow-auto relative flex flex-col items-center">
    <m-svg-icon v-if="isMobileTerminal" name="close" class="w-3 h-3 p-0.5 m-1 ml-auto"
      fillClass="fill-zinc-900 dark:fill-zinc-200 " @click="close"></m-svg-icon>

    <img class="" ref="imageTarget" :src="blob" />

    <m-button class="mt-4 w-[80%] xl:w-1/2" :loading="loading" @click="onConfirmClick">
      确定
    </m-button>
  </div>
</template>

<style scoped>

</style>
