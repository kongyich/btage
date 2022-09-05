import { computed } from "vue";
import { PC_DEVICE_WIDTH } from "../constants";
import { useWindowSize } from "@vueuse/core";

/**
 * 判断当前设备是否为移动端设备，判断依据为屏幕尺寸
*/

const { width } = useWindowSize()

export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})
