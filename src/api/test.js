import request from '@/utils/request'
export function getTestList(params) {
  return request({
    url: '/vue-element-admin/test/list',
    method: 'get',
    params
  })
}
