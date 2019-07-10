import Mock from 'mockjs'
import { getUserInfo } from './response/user'
const baseUrl = 'http://localhost:8080'
Mock.mock(`${baseUrl}/urlencoded`, getUserInfo)

export default Mock
