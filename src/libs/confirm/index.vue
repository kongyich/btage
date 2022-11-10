<template>
  <div>
    <!-- 蒙版 -->
    <transition name="fade">
      <div v-if="isVisable">
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  // 标题
  title: {
    type: String,
  },
  // 描述
  content: {
    type: String,
    required: true
  },
  // 取消按钮文本
  cancelText: {
    type: String,
    default: '取消'
  },
  // 确定按钮文本
  confirmText: {
    type: String,
    default: '确定'
  },
  // 取消按钮事件
  cancelHandler: {
    type: Function,
  },
  // 确定按钮事件
  confirmHandler: {
    type: Function
  },
  // 关闭按钮的回调
  closeHandler: {
    type: Function
  }
});
</script>

<style scoped>

</style>
