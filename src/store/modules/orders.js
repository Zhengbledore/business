/**
 * Created by root on 17-1-3.
 */
import * as types from '../mutation-types'
import axios from 'axios'
import * as urls from '../../http/url'

/* get top id and last id */
let getTopAndLastId = (arr) => {
  return {
    topId: arr[0].id,
    lastId: arr[arr.length - 1].id,
  }
}

// init state
const state = {
  // ordersLoading: false,
  allOrders: {
    data: [],
    topId: '',
    lastId: ''
  },
  toBeConfirmOrders: {
    data: [],
    topId: '',
    lastId: ''
  },
  confirmOrders: {
    data: [],
    topId: '',
    lastId: ''
  },
  sendOrders: {
    data: [],
    topId: '',
    lastId: ''
  }
}

// getters
const getters = {
  allOrders: state => state.allOrders,
  toBeConfirmOrders: state => state.toBeConfirmOrders,
  confirmOrders: state => state.confirmOrders,
  sendOrders: state => state.sendOrders
}

// actions
const actions = {
  getOrders ({commit, state}, payload) {
    if (!state[payload.type + 'Orders'].data) {
      axios({
        url: urls.orders,
        method: 'post',
        baseURL: urls.baseUrl,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        params: {
          type: payload.type,
        },
        timeout: 1500,
      })
        .then(function (response) {
          commit(types.SET_ORDERS_FOR_ORDERS_MANAGER, {data: response.data, type: payload.type, loadMore: false})
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  getMoreOrders ({commit, state}, payload) {
    axios({
      url: urls.orders,
      method: 'post',
      baseURL: urls.baseUrl,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      params: {
        type: payload.type,
        topId: state[payload.type + 'Orders'].topId,
        lastId: state[payload.type + 'Orders'].lastId,
      },
      timeout: 1500,
    }).then(function (response) {
      commit(types.SET_ORDERS_FOR_ORDERS_MANAGER, {data: response.data, type: payload.type, loadMore: true})
    })
      .catch(function (error) {
        console.log(error);
      });
  }
}

// mutations
const mutations = {
  [types.SET_ORDERS_FOR_ORDERS_MANAGER] (state, payload) {
    if (payload.loadMore === true) {

      state[payload.type + 'Orders'].data.push(payload.data)

    } else if (payload.loadMore === false) {

      state[payload.type + 'Orders'].data = payload.data
    }

    let arrId = getTopAndLastId(payload.data)
    state[payload.type + 'Orders'].topId = arrId.topId
    state[payload.type + 'Orders'].lastId = arrId.lastId

  },
}

export default {
  state,
  actions,
  getters,
  mutations
}
