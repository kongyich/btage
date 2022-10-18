<script setup>
import { ref } from 'vue'

const props = defineProps({
  // 数据源
  data: {
    type: Array,
    required: true
  },
  // 唯一标识key
  nodeKey: {
    type: String
  },
  // 列数
  column: {
    type: Number,
    default: 2
  },
  // 列间距
  columnSpacing: {
    type: Number,
    default: 20
  },
  // 行间距
  rowSpacing: {
    type: Number,
    default: 20
  },
  // 是否需要进行图片预览
  picturePreReading: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <div class="relative" ref="containerTarget" :style="{ height: containerHeight + 'px' }">
    <!-- 因为列数不确定，所以需要根据列数计算每列的宽度，等待列宽计算完成，有了数据之后进行渲染 -->
    <template v-if="columnWith && data.length">
      <!-- 通过动态style来计算对应的列宽 left，top -->
      <div class="m-waterfall-item absolute duration-300" :style="{ 
      width: columnWidth + 'px',
      left: item._style?.left + 'px',
      top: item._style?.top + 'px'
      }" v-for="(item, index) in data" :key="nodeKey ? item[nodeKey] : index">

      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>

</style>
