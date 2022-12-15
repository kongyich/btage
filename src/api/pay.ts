import request from '@/utils/request'


export const getVipPayList = () => {
  return request({
    url: '/user/vip/pay/list'
  })
}
