// 用户名的表单校验
/**
 * @param {*} val 输入的内容
 * @returns true表示表单校验通过 String表示未通过，字符串为错误信息
*/
export const validateUsername = value => {
  if (!value) {
    return '用户名为必填的'
  }

  if (value.length < 3 || value.length > 12) {
    return '用户名应该在 3-12 位之间'
  }
  return true
}

// 密码的表单校验
export const validatePassword = value => {
  if (!value) {
    return '用户名为必填的'
  }

  if (value.length < 3 || value.length > 12) {
    return '用户名应该在 3-12 位之间'
  }
  return true
}

// 确认密码的表单教研
export const validateConfirmPassword = (val, password) => {
  if (val !== password[0]) {
    return '两次密码输入必须一致'
  }
  return true
}
