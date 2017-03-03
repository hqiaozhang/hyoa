let _ = require('lodash')

var mockData = {
  album_offset: 0,
  albums: [
  {
  artists: [],
  available: true,
  company: "",
  cover: "http://pic.cdn.duomi.com/imageproxy2/dimgm/scaleImage?url=http://img.kxting.cn//p1/06/13/71027299.jpg&w=150&h=150&s=100&c=0&o=0&m=",
  id: 2460885,
  name: "同舟之情",
  num_tracks: 1,
  release_date: "2013-05-02",
  type: "EP/单曲"
  },
  {
  artists: [
  {
  id: 50001233,
  name: "张学友",
  portrait: "http://pic.cdn.duomi.com/imageproxy2/dimgm/scaleImage?url=http://img.kxting.cn//p1/18/26/70861058.jpg&w=150&h=150&s=100&c=0&o=0&m=",
  valid: true
  }
  ],
  available: true,
  company: "",
  cover: "http://pic.cdn.duomi.com/imageproxy2/dimgm/scaleImage?url=http://img.kxting.cn//p1/04/19/71471155.jpg&w=150&h=150&s=100&c=0&o=0&m=",
  id: 2575433,
  name: "醒着做梦",
  num_tracks: 0,
  release_date: "2014-12-23",
  type: "专辑"
  },
  {
  artists: [
  {
  id: 50001233,
  name: "张学友",
  portrait: "http://pic.cdn.duomi.com/imageproxy2/dimgm/scaleImage?url=http://img.kxting.cn//p1/18/26/70861058.jpg&w=150&h=150&s=100&c=0&o=0&m=",
  valid: true
  }
  ],
  available: true,
  company: "",
  cover: "http://pic.cdn.duomi.com/imageproxy2/dimgm/scaleImage?url=http://img.kxting.cn//p1/29/05/71251328.jpg&w=150&h=150&s=100&c=0&o=0&m=",
  id: 2547979,
  name: "童真年代",
  num_tracks: 1,
  release_date: "2014-06-26",
  type: "EP/单曲"
  },
  {
  artists: [
  {
  id: 50001233,
  name: "张学友",
  portrait: "http://pic.cdn.duomi.com/imageproxy2/dimgm/scaleImage?url=http://img.kxting.cn//p1/18/26/70861058.jpg&w=150&h=150&s=100&c=0&o=0&m=",
  valid: true
  }
  ],
  available: true,
  company: "",
  cover: "http://pic.cdn.duomi.com/imageproxy2/dimgm/scaleImage?url=http://img.kxting.cn//p1/23/11/71151905.jpg&w=150&h=150&s=100&c=0&o=0&m=",
  id: 2465736,
  name: "张学友1/2世纪演唱会",
  num_tracks: 3,
  release_date: "2013-07-19",
  type: "现场"
  },
  {
  artists: [
  {
  id: 50001233,
  name: "张学友",
  portrait: "http://pic.cdn.duomi.com/imageproxy2/dimgm/scaleImage?url=http://img.kxting.cn//p1/18/26/70861058.jpg&w=150&h=150&s=100&c=0&o=0&m=",
  valid: true
  }
  ],
  available: true,
  company: "",
  cover: "http://pic.cdn.duomi.com/imageproxy2/dimgm/scaleImage?url=http://img.kxting.cn//p1/26/32/71203802.jpg&w=150&h=150&s=100&c=0&o=0&m=",
  id: 2409247,
  name: "定风波",
  num_tracks: 0,
  release_date: "2012-11-23",
  type: "EP/单曲"
  }
  ],
  artist_offset: 0,
  artists: [
  {
  id: 50001233,
  name: "张学友",
  num_albums: 82,
  num_tracks: 371,
  portrait: "http://pic.cdn.duomi.com/imageproxy2/dimgm/scaleImage?url=http://img.kxting.cn//p1/18/26/70861058.jpg&w=150&h=150&s=100&c=0&o=0&m=",
  valid: true
  }
  ],
  dm_error: 0,
  error_msg: "操作成功",
  recommend: 1,
  total_albums: 92,
  total_artists: 1,
  total_tracks: 481,
  track_offset: 0,
  tracks: [
  {
  album: {
  cover: "/p1/09/19/70829305.jpg",
  id: 2101726,
  name: "吻别"
  },
  artists: [
  {
  id: 50001233,
  name: "张学友",
  num_albums: 82,
  num_tracks: 371,
  portrait: "/p1/18/26/70861058.jpg",
  valid: true
  }
  ],
  availability: "1110",
  dlyric: "",
  id: 11065236,
  medias: [
  {
  bitrate: 320,
  p2purl: "8D2F73947091B50BC305000000AF59CA5A00000064.mp3"
  }
  ],
  mv: 0,
  slyric: "",
  title: "一路上有你",
  isdown: "1",
  isplay: "1"
  }
  ]
}

export const noticeList = [
  {
    title: '关于春节放假的通知1',
    time: '2017-01-23',
    content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如公司决定调整放假具体如',
    id: 1
  },{
    title: '重庆团建活动通知2',
    time: '2017-01-23',
    content: '为迎接新年的到来，感谢大家一直以来对海云的付出，公司拟定于2017年.。。。',
    id: 2
  },{
    title: '关于春节放假的通知3',
    time: '2017-01-23',
    content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如',
    id: 3
  },{
    title: '重庆团建活动通知4',
    time: '2017-01-23',
    content: '为迎接新年的到来，感谢大家一直以来对海云的付出，公司拟定于2017年.。。。',
    id: 4
  },{
    title: '关于春节放假的通知5',
    time: '2017-01-24',
    content: '为方便小伙伴们更好的安排春节假期人，公司决定调整放假具体如',
    id: 5
  },{
    title: '重庆团建活动通知6',
    time: '2017-01-25',
    content: '为迎接新年的到来，感谢大家一直以来对海云的付出，公司拟定于2017年.。。。',
    id: 6
  }
]

const bookList = [
  {
    title: 'javaScript权威指南',
    time: '2017-01-25',
    content: '',
    id: 1
  },{
    title: 'HTML5&CSS3权威指南',
    time: '2017-01-24',
    content: '',
    id: 2
  },{
    title: '人月神话(40周年纪念版)',
    time: '2017-01-24',
    content: '',
    id: 3
  },{
    title: 'React框架技术详解',
    time: '2017-01-24',
    content: '',
    id: 4
  },{
    title: 'D3.js',
    time: '2017-01-24',
    content: '',
    id: 5
  }
]

//待办事项
export const todoList = [
  {
    type: 1,
    details: '张红桥 2017年1月10日申请加班',
    curStep: '部门审核',
    curState: '未完成'
  },{
    type: 2,
    details: '张红桥 2017年1月10日申请调休',
    curStep: '部门审核',
    curState: '未完成'
  },{
    type: 3,
    details: '张红桥 2017年2月10日申请加班',
    curStep: '部门审核',
    curState: '未完成'
  },{
    type: 4,
    details: '张红桥 2017年1月10日申请加班',
    curStep: '部门审核',
    curState: '未完成'
  }
]

//最新公告
export function newNotice() {
  let arry = []
  for(let i = 0; i<5; i++){
    arry.push(noticeList[i])
  }
  return arry
}

//最新图书
export function newBooks(){
  let arry = []
  for(let i = 0; i<5; i++){
    arry.push(bookList[i])
  }
  return arry
}


//公告详情
export function getNoticeDetails (id){
  let obj =  noticeList.find( item => item.id == id)
  return obj
}



export const items = mockData.albums//_.range(1, 10).map((i)=> item(i))

export function getUser (id) {
  return {
    id,
    name: `user name is - ${id}`
  }
}

export function getItem (id) {
  var obj = {}
  for(var i = 0, len = mockData.albums.length; i < len; i++) {
    let item = mockData.albums[i]
    if(item.id == id) {
      obj = item
    }
  }
  return obj
}



export function getChartData() {
  return {
    xData: ['1月', '2月', '3月', '4月', '5月'],
    yData: [12, 31, 9, 10, 20]
  }
}

export function navs() {
  return [
    {
      key: '1',
      value: '首页',
      iconName: 'home',
      url: '/index'
    },
    {
      key: '2',
      value: '公司公告',
      iconName: 'gonggao',
      url: '/index/notice',
      children: [
        {
          key: 'fbgg',
          value: '发布公告',
          url: '/index/sendnotice'
        },
      ]
    },
    {
      key: '3',
      value: '我的流程',
      iconName: 'flow',
      children: [
        {
          key: 'faqi',
          value: '发起流程',
          url: '/index/procedure/send'
        },
        {
          key: 'wode',
          value: '流程管理',
          url: '/index/procedure/manage'
        },
        {
          key: 'daiban',
          value: '待办事项',
          url: '/index/procedure/todo'
        },
        {
          key: 'banjie',
          value: '办结事项',
          url: '/index/procedure/matters'
        }
      ]
    },
    {
      key: '4',
      value: '信息查询',
      iconName: 'info',
      children: [
        {
          key: 'person',
          value: '个人信息',
          url: '/index/info/person'
        },
        {
          key: 'rest',
          value: '调休天数',
          url: '/index/info/rest'
        }
      ]
    },
    {
      key: '5',
      value: '绩效考核',
      iconName: 'jixiao'
    },
    {
      key: '6',
      value: '项目管理',
      iconName: 'project-manage',
      url: '/index/project'
    },
    {
      key: '7',
      value: '考勤管理',
      iconName: 'check'
    },
    {
      key: '8',
      value: '图书馆',
      iconName: 'books',
      url: 'index/books'
    }

  ]
}