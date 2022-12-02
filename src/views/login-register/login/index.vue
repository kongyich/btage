<script setup>
import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage as VeeErrorMessage
} from 'vee-validate'
import { validateUsername, validatePassword } from '../validate';

// 表单校验通过之后才会出发登陆按钮
const onLoginHandler = () => {

}
</script>

<template>
  <div class="relative h-screen bg-white dark:zinc-800 text-center xl:bg-zinc-200">
    <!-- 表单 -->
    <div
      class="block px-3 mt-4 dark:bg-zinc-800 xl:bg-white xl:w-[388px] xl:dark:bg-zinc-900 xl:m-auto xl:mt-8 xl:py-4 xl:rounded-sm xl:shadow-lg">
      <h3 class="mb-2 font-semibold text-base text-main dark:text-zinc-300 hidden xl:block">
        账号登录
      </h3>

      <!-- 表单 -->
      <vee-form @submit="onLoginHandler">
        <!-- 用户名 -->
        <vee-field
          class=" dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:default:bg-zinc-900"
          type="text" name="username" placeholder="请输入用户名" autocomplete="on" :rules="validateUsername" />

        <vee-error-message name="username" class="text-sm text-red-600 block mt-0.5 text-left"></vee-error-message>
        <!-- 密码 -->
        <vee-field
          class=" dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:default:bg-zinc-900"
          type="password" name="password" placeholder="请输入密码" autocomplete="on" :rules="validatePassword" />

        <vee-error-message name="password" class="text-sm text-red-600 block mt-0.5 text-left"></vee-error-message>

        <!-- 去注册 -->
        <div class="pt-1 pb-3 leading-[0px] text-right">
          <a
            class=" inline-block p-1 text-zinc-400 text-right dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 text-sm duration-300 cursor-pointer">去注册</a>
        </div>


        <m-button class="w-full dark:bg-zinc-900 xl:dark:bg-zinc-800">
          登录
        </m-button>
      </vee-form>
    </div>
  </div>
</template>

<style scoped>

</style>
