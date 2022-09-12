import { computed } from "vue";
import { PC_DEVICE_WIDTH } from "@/constants";
import { useWindowSize } from "@vueuse/core";

/**
 * 判断当前设备是否为移动端设备，判断依据为屏幕尺寸
*/

const { width } = useWindowSize()

export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})

/***
 * 动态rem基准值
 * 根据用户的屏幕宽度，进行一些计算，把计算出来的值赋值给html根标签作为font-size大小
 */

export const useREM = () => {
  // 定义最大的fontsize
  const MAX_FONT_SIZE = 40

  //监听html文档解析完成事件
  document.addEventListener("DOMContentLoaded", () => {
    // 拿到html标签
    const html = document.querySelector('html')
    // 计算fontsize，根据屏幕宽度 / 10
    let fontSize = window.innerWidth / 10
    fontSize = Math.min(MAX_FONT_SIZE, fontSize)
    // 赋值给html
    html.style.fontSize = fontSize + 'px'
  })
}
