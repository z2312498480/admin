const list = [{
  nick: 'Li Daoran',
  phone: 15832652365,
  name: '测试1',
  subject: '前端开发',
  job: '前端开发',
  year: 21,
  updateTime: '2022-03-01'
}, {
  nick: 'A small space',
  phone: 15263559652,
  name: '测试2',
  subject: '数据运营',
  job: '数据分析',
  year: 21,
  updateTime: '2022-02-23'
}, {
  nick: 'small',
  phone: 1335256825,
  name: '测试3',
  subject: '虎哈哈',
  job: '产品助手',
  year: 21,
  updateTime: '2022-05-21'
}, {
  nick: 'ncat',
  phone: 115365225,
  name: '测试4',
  subject: '产品助手',
  job: '后端开发',
  year: 21,
  updateTime: '2022-05-20'
}, {
  nick: 'Token',
  phone: 145326556,
  name: '测试5',
  subject: '产品助手',
  job: 'c++开发',
  year: 21,
  updateTime: '2022-03-11'
}, {
  nick: 'Jack',
  phone: 154656568,
  name: '测试6',
  subject: '产品助手',
  job: '小程序开发',
  year: 21,
  updateTime: '2022-01-15'
},
{
  nick: 'jerry',
  phone: 154656568,
  name: '测试7',
  subject: '产品助手',
  job: '渗透工程师',
  year: 21,
  updateTime: '2022-01-15'
},
{
  nick: 'Tom',
  phone: 12345678,
  name: '测试8',
  subject: '产品助手',
  job: '网络安全工程师',
  year: 21,
  updateTime: '2022-01-15'
}
]

module.exports = [{
  url: '/vue-element-admin/test/list',
  type: 'get',
  response: config => {
    // const list=data.items
    return {
      code: 20000,
      data: {
        total: list.length,
        items: list
      }
    }
  }
}

]
