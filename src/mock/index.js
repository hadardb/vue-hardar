import Mock from 'mockjs'
import { getUserInfo } from './response/user'
const Random = Mock.Random

Mock.mock(/\/urlencoded/, getUserInfo)

Mock.setup({
  timeout: '100-600' // 延迟时间
})

Random.extend({
  fruit () {
    const fruit = ['apple', 'peach', 'lemon']
    return this.pick(fruit)
  }
})
export default Mock
