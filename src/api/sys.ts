import request from '@/utils/request'

// 人类行为验证
export const getCaptcha = data => {
  return request({
    url: '/sys/captcha',
    method: 'POST',
    data
  })
}

// 登陆
export const loginUser = data => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

// 注册
export const registerUser = data => {
  return request({
    url: '/sys/register',
    method: 'POST',
    data
  })
}

// 获取用户信息
export const getProfile = () => {
  return request({
    url: '/user/profile',
  })
}

// 修改用户信息
export const putProfile = data => {
  return request({
    url: '/user/profile',
    method: 'PUT',
    data
  })
}


// 获取oss上传凭证
export const getSts = data => {
  return request({
    url: '/user/sts'
  })
}

// 微信登录前置数据获取
export const getWXLoginData = data => {
  return request({
    url: '/sys/wxlogin/data'
  })
}

// 微信登录获取access_token
export const getWXLoginToken = (appid, secret, code) => {
  return request({
    url: '/sys/wxlogin/access_token',
    params: {
      appid,
      secret,
      code
    }
  })
}

/**
 * 获取微信登录的 用户数据
 */
export const getWXLoginUserInfo = (accessToken, openid) => {
  return request({
    url: '/sys/wxlogin/userinfo',
    params: {
      accessToken,
      openid
    }
  })
}
