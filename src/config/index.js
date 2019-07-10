export const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://www.xxx.com' // 生产环境下请求url的地址
  : '' // 开发环境直接调用vue.config中的代理地址
