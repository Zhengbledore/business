/**
 * Created by root on 17-1-6.
 */
import {baseUrl} from './url'
import Qs from 'qs'

export default {

  baseURL: baseUrl,

  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data
    return data;
  }],
  //
  // transformResponse: [function (data) {
  //   // Do whatever you want to transform the data
  //
  //   return data;
  // }],

  method: 'post',

  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/vnd.myapp.type+json',
  },

  params: {
    id: 12345666
  },

  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  data: {
    firstName: 'Fred'
  },

  timeout: 2000,

  withCredentials: false, // default

  responseType: 'json', // default

  maxContentLength: 2000,

  maxRedirects: 5, // default
}
