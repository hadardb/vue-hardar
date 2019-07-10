import axios from './index'

export const getUserInfo = (data = null) => {
  return axios.request({
    url: '/urlencoded',
    method: 'post',
    data: data
  })
}
