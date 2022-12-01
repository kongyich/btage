<script setup>

</script>

<template>
  <div class="relative h-screen bg-white dark:zinc-800 text-center xl:bg-zinc-200">
    <!-- 表单 -->
    <div
      class="block px-3 mt-4 dark:bg-zinc-800 xl:bg-white xl:w-[388px] xl:dark:bg-zinc-900 xl:m-auto xl:mt-8 xl:py-4 xl:rounded-sm xl:shadow-lg">
      <h3 class="hidden mb-2 font-semibold text-base text-main dark:text-zinc-300 xl:block">账号登录</h3>

      <!-- 表单 -->
      <form>
        <!-- 用户名 -->
        <input
          class=" dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:default:bg-zinc-900"
          type="text" name="username" placeholder="请输入用户名" autocomplete="on" />

        <!-- 密码 -->
        <input
          class=" dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:default:bg-zinc-900"
          type="password" name="password" placeholder="请输入密码" autocomplete="on" />

        <!-- 去注册 -->
        <div class="pt-1 pb-3 leading-[0px] text-right">
          <a
            class=" inline-block p-1 text-zinc-400 text-right dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 text-sm duration-300 cursor-pointer">去注册</a>
        </div>


        <m-button class="w-full dark:bg-zinc-900 xl:dark:bg-zinc-800">
          登录
        </m-button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
