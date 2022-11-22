import { h, render } from 'vue';
import messageComponent from './index.vue'
/**
 * @params {*} type 类型 success warn error
 * @params {*} content 内容
 * @params {*} duration 展示时间 默认3000
 * 
*/

export const message = (type, content, duration = 3000) => {

  const onDestory = () => {
    // 3. 删除vnode
    render(null, document.body)
  }
  // 1. 拿到vnode
  const vnode = h(messageComponent, {
    type,
    content,
    duration,
    destory: onDestory
  })
  // 2. render vnode
  render(vnode, document.body)

}
