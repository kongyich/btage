<script setup>
import { computed, onMounted, ref, watch, nextTick } from 'vue'
import { getImgElements, getAllImg, onComplateImgs } from './utils'

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

// 容器的总高度 = 最高一列的高度
const containerHeight = ref(0)
// 记录每列高度的容器 key：所在列 val：列高
const columnHeightObj = ref({})

// 构建记录每列高度的对象
const useColumnHeightObj = () => {
  columnHeightObj.value = {}
  for (let i = 0; i < props.column; i++) {
    columnHeightObj.value[i] = 0
  }
}

// 容器实例
const containerTarget = ref(null)
// 容器总宽度（不包含padding，margin，border）
const containerWidth = ref(0)
// 容器的左边距，计算item的left
const containerLeft = ref(0)

// 计算容器宽度
const useContainerWidth = () => {
  const { paddingLeft, paddingRight } = getComputedStyle(containerTarget.value, null)

  // 容器左边距
  containerLeft.value = parseFloat(paddingLeft)
  // 容器的宽度
  containerWidth.value = containerTarget.value.offsetWidth - parseFloat(paddingLeft) - parseFloat(paddingRight)
};

// 列宽 = （容器的宽度 - 所有列间距的宽度） / 列数
const columnWidth = ref(0)

// 列间距的合计
const columnSpaceingTotal = computed(() => {
  return (props.column - 1) * props.columnSpacing
})

// 计算列宽
const useColumnWidth = () => {
  // 计算容器的宽度
  useContainerWidth()
  // 计算列宽
  columnWidth.value = (containerWidth.value - columnSpaceingTotal.value) / props.column
}

onMounted(() => {
  useColumnWidth()
  console.log(columnWidth.value, 'rrr');
});

// item高度集合
let itemHeights = []

// 监听图片加载
const waitImgComplate = () => {
  itemHeights = []
  // 拿到所有的元素
  let itemElements = [...document.getElementsByClassName('m-waterfall-item')]

  // 获取元素的img标签
  const imgElements = getImgElements(itemElements)
  console.log(imgElements, 'pppp')

  // 获取所有的img标签的图片
  const allImgs = getAllImg(imgElements)
  // 等待图片加载完毕
  onComplateImgs(allImgs)
    .then(() => {
      // 图片加载完成
      itemElements.forEach(el => {
        itemHeights.push(el.offsetHeight)
      })
      useItemLocation()
    })
}


/**
 * 图片不需要预加载时，计算 item 高度
 */
const useItemHeight = () => {
  itemHeights = []
  // 拿到所有元素
  let itemElements = [...document.getElementsByClassName('m-waterfall-item')]
  // 计算 item 高度
  itemElements.forEach((el) => {
    // 依据传入数据计算出的 img 高度
    itemHeights.push(el.offsetHeight)
  })
  // 渲染位置
  useItemLocation()
}

// 渲染位置
const useItemLocation = () => {
  console.log(itemHeights)
}

// 触发计算
watch(
  () => props.data,
  (newVal) => {
    // 重置数据源
    const resetColumnHeight = newVal.every((item) => !item._style)
    if (resetColumnHeight) {
      // 构建高度记录容器
      useColumnHeightObj()
    }
    nextTick(() => {
      if (props.picturePreReading) {
        waitImgComplate()
      } else {
        useItemHeight()
      }
    })
  },
  {
    immediate: true,
    deep: true
  }
);
</script>

<template>
  <div class="relative" ref="containerTarget" :style="{ height: containerHeight + 'px' }">
    <!-- 因为列数不确定，所以需要根据列数计算每列的宽度，等待列宽计算完成，有了数据之后进行渲染 -->
    <template v-if="columnWidth && data.length">
      <!-- 通过动态style来计算对应的列宽 left，top -->
      <div class="m-waterfall-item absolute duration-300" :style="{ 
      width: columnWidth + 'px',
      left: item._style?.left + 'px',
      top: item._style?.top + 'px'
      }" v-for="(item, index) in data" :key="nodeKey ? item[nodeKey] : index">
        <slot :item="item" :width="columnWidth" :index="index" />
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>

</style>
