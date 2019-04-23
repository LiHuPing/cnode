import Taro from '@tarojs/taro'

import apiObject from '../constants/api'
export function getJSON(url, data) {
  return Taro.request({
    url,
    data,
    method: 'GET'
  })
}
export function postJSON(url, data) {
  return Taro.request({
    url,
    data,
    method: 'POST'
  })
}
