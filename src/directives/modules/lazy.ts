import { useIntersectionObserver } from '@vueuse/core'

export default {
  // 图片懒加载，在用户无法看到图片时，不加载图片
  // 用户可以看到图片时，再去加载图片
  mounted(el) {
    // 1. 拿到当前img的src
    const imgSrc = el.src
    // 2. 把img的src变为空
    el.src = ''

    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {

      }
    })
    console.log(el);
  }
}
