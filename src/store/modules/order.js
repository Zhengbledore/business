/**
 * Created by root on 17-1-14.
 */
import * as types from '../mutation-types'
import * as urls from '../../http/url'
import {orderRequest as Order} from '../../http/api'

const OrderApi = new Order()

// init state
const state = {
  order: []
}

// getters
const getters = {
  order: state => state.order
}

// actions
const actions = {
  getOrder ({commit, state}, payload) {
    OrderApi.getOrder({api: urls.getDefaultAddress}).then((response) => {
      commit(types.SET_ORDER, response.data.order)
    }).catch((error) => {
      console.log(error)
    })
  },
}

// mutations
const mutations = {
  [types.SET_ORDER] (state, payload) {
    state.order = payload
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
