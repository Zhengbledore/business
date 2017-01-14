/**
 * Created by root on 17-1-6.
 */
import axios from 'axios'
import config from './config'

let http = axios.create(config)

let noneTokenWithRequest = () => {
  return http
}

let tokenWithRequest = () => {
  setToken(http, getToken())
  return http
}

const setToken = (httpInstance, token) => {
  httpInstance.defaults.headers.Authorization = 'Bearer ' + token
}

const getToken = () => {
  const user =  localStorage.getItem('user')
  return user ? localStorage.user.token : 'testToken'
}

export { noneTokenWithRequest, tokenWithRequest }
