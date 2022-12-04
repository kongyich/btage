<script setup>
import { useRouter } from "vue-router";
import { useStore } from 'vuex';
import { confirm } from '@/libs'

// 构建menu数据
const menuAry = [
  {
    id: 0,
    title: '个人资料',
    icon: 'profile',
    path: '/profile'
  },
  {
    id: 1,
    title: '升级vip',
    icon: 'vip-profile',
    path: '/member'
  },
  {
    id: 2,
    title: '退出登录',
    icon: 'logout',
    path: ''
  }
];

const router = useRouter()
const onToLogin = () => {
  router.push('/login')
};

const store = useStore()
// menu点击事件
const onItemClick = item => {
  if (item.id === 2) {
    // 退出登录
    confirm('确定要退出登录？').then(() => {
      store.dispatch('logout')
    })
    return
  }
  router.push(item.path)
};
</script>

<template>
  <m-popover class="flex items-center" placement="bottom_left">
    <template #reference>
      <div v-if="$store.getters.token"
        class="guide-my relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100 dark:hover:bg-zinc-900">
        <!-- 头像 -->
        <img v-lazy class="w-3 h-3 rounded-sm" :src="$store.getters.userInfo.avatar" />

        <!-- 下箭头 -->
        <m-svg-icon class="h-1.5 w-1.5 ml-0.5" name="down-arrow" fillClass="fill-zinc-900 dark:fill-zinc-300">
        </m-svg-icon>

        <!-- vip标记 -->
        <m-svg-icon name="vip" class="w-1.5 h-1.5 absolute right-[16px] bottom-0"></m-svg-icon>
      </div>

      <div v-else>
        <m-button class="guide-my" icon="profile" iconColor="#fff" @click="onToLogin"></m-button>
      </div>
    </template>

    <!-- 气泡 -->
    <div v-if="$store.getters.token" class=" w-[140px] overflow-hidden">
      <div class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
        v-for="item in menuAry" :key="item.id" @click="onItemClick(item)">
        <m-svg-icon :name="item.icon" class="w-1.5 h-1.5 mr-1" fillClass="fill-zinc-900 dark:fill-zinc-300">
        </m-svg-icon>
        <span class="text-zinc-800 dark:text-zinc-300 text-sm">{{
            item.title
        }}</span>
      </div>
    </div>
  </m-popover>
</template>



<style>

</style>
