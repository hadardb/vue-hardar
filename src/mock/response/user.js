import Mock from 'mockjs'

const Random = Mock.Random
export const getUserInfo = (options) => {
  const template = {
    'str|2-4': 'lison',
    'name|5': 'lison',
    'age|+2': 18,
    'num|4-10': 0,
    'float|3-10.2-5': 0,
    'bool|1': true,
    'bool2|1-9': true, // min/(min+max)
    'obj|2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'obj2|1-2': {
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'arr|2-4': [1, 2, 3],
    'arr2|2': ['a', 'b'],
    'func': () => {
      return 'this is created by function'
    },
    'reg': /[1-9][a-z]/,
    email: Mock.mock('@email'), // 返回随机email
    range: Random.range(3, 10, 2), // 返回一个数组 起始值为3 最后一个值小于等于10 间隔为2  [3,5,7,9]
    date: Random.date('yyyy-MM-dd'), // 返回 年月日
    time: Random.time('hh:mm'), // 返回时间
    datetime: Random.datetime('yyyy-MM-dd hh:mm'), // 返回年月日和时间
    now: Random.now('hour', 'yyyy-MM-dd a hh:mm'), // 返回当前时间 返回到小时
    img: Random.image('100x200', '#00ff00', '#ffffff', 'png', 'Lison'), // 大小 背景颜色 文字颜色 图片格式 图片中的文字
    img_base64: Random.dataImage(), // 返回二进制图片
    color: Random.color(),
    cword: Random.cword('玩儿螺丝刀', 2, 5), // 从这个字符串中随机选择2~5个字符
    cname: Random.cname(), // 输出中文名字
    email2: Random.email('lison.com'), // 输出 后缀为lison.com的邮箱
    region: Random.region(),
    province: Random.province(),
    city: Random.city(true), // 返回县级城市 加上true 会一起返回他的市
    county: Random.county(true), // 返回 县级城市 加上true 会一起返回他的市和省份
    zip: Random.zip(), // 邮政编码
    upperFirstLetter: Random.capitalize('lison'),
    pick: Random.pick([1, 2, 3, 4]),
    shuffle: Random.shuffle([1, 2, 3, 4]),
    guid: Random.guid(),
    // fruit: Random.fruit(),
    fruit2: '@fruit'
  }
  return template
}
