<script>
import { onMounted } from "@vue/runtime-core";
import broadcast from './brodacast'

// QQ 登录的 URL
const QQ_LOGIN_URL =
  'https://graph.qq.com/oauth2.0/authorize?client_id=101998494&response_type=token&scope=all&redirect_uri=https%3A%2F%2Fimooc-front.lgdsunday.club%2Flogin';
</script>

<script setup>

// QQ登录挂起
onMounted(() => {
  QC.Login({
    btnId: 'qqLoginBtn'
  }, ({ nickname, figureurl_qq_2 }, opts) => {
    // 登录成功之后的回调，会在 登录回调页面中执行
    // qq 登录存在缓存，登录一次成功之后，下次进入页面会自动重新登录
    console.log('qq登录成功');
    console.log(data);
    // 注销登录，防止下一次打开页面直接展示用户信息
    QC.Login.signOut()
    // 拿到qq用户的唯一标识，通过这个标识判断用户是否已经注册过了？
    const accessToken = /access_token=((.*))&expires_in/.exec(window.location.hash)[1]
    // 拼接请求对象
    const oauthObj = {
      accessToken,
      nickname,
      figureurl_qq_2
    }

    broadcast.send(oauthObj)
    window.close()
  })
})

// 登录按钮的事件
const onQQLogin = () => {
  openQQWindow()
}

// 处理qq登录的视窗
const openQQWindow = () => {
  window.open(QQ_LOGIN_URL, 'oauth2Login_10609',
    'height=525,width=585, toolbar=no, menubar=no, scrollbars=no, status=no, location=yes, resizable=yes')

  // 等待
  broadcast.wait().then((oauthobj) => {
    broadcast.clear()
  })
}
</script>

<template>
  <div>
    <span id="qqLoginBtn" v-show="false"></span>
    <m-svg-icon class=" w-4 cursor-pointer" name="qq" @click="onQQLogin"></m-svg-icon>
  </div>
</template>

<style scoped>

</style>
