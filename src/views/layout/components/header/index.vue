<script setup>
import HeaderSearch from './header-search/index.vue'
import HeaderTheme from './header-theme.vue'
import HeaderMy from './header-my.vue'
import { useRouter } from 'vue-router'
// router === this.$router
const router = useRouter()

const onToHome = () => {
  router.push('/')
}
</script>

<template>
  <div
    class="w-full duration-500 bg-white dark:bg-zinc-800 border-b border-b-zinc-200 dark:border-b-zinc-700 px-2 py-1">
    <div class="flex items-center">
      <img v-lazy class="guide-home h-4 cursor-pointer mr-2"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png" @click="onToHome" />

      <header-search class="mr-1" />
      <header-theme class="mr-1" />
      <header-my />
    </div>
  </div>
</template>



<style>

</style>
