/**
 * Created by root on 16-12-25.
 */
import * as types from '../mutation-types'

// init state
const state = {
  orderPreparingData: {
    routeId: '',
    companyId: '',
    goodsType: '',
    weight: '',
    volume: '',
    city: {
      begin: {
        label: '',
        value: {
          province: '',
          city: ''
        }
      },
      target: {
        label: '',
        value: {
          province: '',
          city: ''
        }
      }
    },
    station: {
      begin: '',
      target: ''
    }
  }
}

// getters
const getters = {
  orderPreparingData: state => state.orderPreparingData
}

// actions
const actions = {
  setOrderPreparingData ({commit, state}, payload) {
    commit(types.SET_ORDER_PREPARING_DATA_FOR_ROUTE, payload)
  },
  clearOrderPreparingData ({commit, state}, payload) {
    commit(types.CLEAR_PREPARING_DATA_FOR_ROUTE)
  }
}

// mutations
const mutations = {
  [types.SET_ORDER_PREPARING_DATA_FOR_ROUTE] (state, payload) {
    if(Array.isArray(payload)){
      payload.forEach((item) => {
        state.orderPreparingData[item.name] = item.value
      })
    }else{
      state.orderPreparingData[payload.name] = payload.value
    }
  },
  [types.CLEAR_PREPARING_DATA_FOR_ROUTE] () {
    state.orderPreparingData = {
      routeId: '',
      companyId: '',
      goodsType: '',
      weight: '',
      volume: '',
      city: {
        begin: '',
        target: ''
      },
      station: {
        begin: '',
        target: ''
      }
    }
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
