/**
 * Created by root on 16-12-25.
 */
import * as types from '../mutation-types'
import * as urls from '../../http/url'
import { orderRequest as Order } from '../../http/api'

import * as utils from '../../tool/utils'

const OrderApi = new Order()

// init state
const state = {
  orderPreparingData: {
    wareId: '',
    routeId: '',
    companyId: '',
    goodsType: '',
    weight: '',
    volume: '',
    goods: {
      attention: '',
      goodsType: '',
      weight: '',
      volume: '',
      goodsName: '',
      totalPrice: '',
    },
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
    },
    distribute: {
      type: '',
      targetStation: {
        name: '',
        phone: '',
        attention: ''
      }
    },
    attention: {
      content: ''
    },
    insurance: {
      percent: 0.05
    },
    targetAddress: {
      id: '',
      content: {
        name: '',
        phone: '',
        text: '',
      },
    },
    logistical: {
      company: {
        name: '',
        id: '',
      },
      route: {
        name: '',
        id: '',
      }
    }
  }
}

// getters
const getters = {
  orderPreparingData: state => JSON.parse(localStorage.getItem('orderWare')) || state.orderPreparingData
}

// actions
const actions = {
  setOrderPreparingData ({commit, state}, payload) {
    commit(types.SET_ORDER_PREPARING_DATA_FOR_ROUTE, payload)
  },
  clearOrderPreparingData ({commit, state}, payload) {
    commit(types.CLEAR_PREPARING_DATA_FOR_ROUTE)
  },
  getTargetAddress ({commit, state}, payload) {
    OrderApi.getTargetAddress({api: urls.getDefaultAddress}).then((response) => {
      commit(types.SET_ORDER_TARGET_ADDRESS, response.data.address)
      commit(types.SET_ORDER_TARGET_STATION, response.data.station)
    }).catch((error) => {
      console.log(error)
    })
  },
  changeTargetAddress ({commit, state}, payload) {
    commit(types.SET_ORDER_TARGET_ADDRESS, payload)
    commit(types.SET_ORDER_TARGET_STATION, payload)
  },

  getOrderDistribute ({commit, state}, payload) {
    OrderApi.getDistribute({api: urls.getDistribute}).then((response) => {
      commit(types.SET_ORDER_TARGET_DISTRIBUTE, response.data.distribute)
    }).catch((error) => {
      console.log(error)
    })
  },

  setOrderPreparingDataIntoSessionStore ({commit, state}, payload) {
    /* if new preparing data in vuex is not same with localStore,
    and new preparing is all ok pass,
    then will clear localStore and set new */
    OrderApi.createOrderWare({api: urls.createOrderWare}).then((response) => {
      commit(types.SET_ORDER_TARGET_ADDRESS, response.data.ware_id)
      sessionStorage.setItem('orderWare', JSON.stringify(state.orderPreparingData))
    }).catch((error) => {
      console.log(error)
    })
  },
  getOrderAttention ({commit, state}, payload) {
    OrderApi.getOrderAttention({api: urls.getOrderAttention}).then((response) => {
      commit(types.SET_ORDER_PREPARING_DATA_FOR_ROUTE, response.data.ware_id)
    }).catch((error) => {
      console.log(error)
    })
  },
  getOrderInsurance ({commit, state}, payload) {
    OrderApi.getOrderInsurance({api: urls.getOrderInsurance}).then((response) => {
      commit(types.SET_ORDER_PREPARING_DATA_FOR_ROUTE, response.data.ware_id)
    }).catch((error) => {
      console.log(error)
    })
  },
  getOrderLogistical ({commit, state}, payload) {
    OrderApi.getOrderLogistical({api: urls.getOrderLogistical}).then((response) => {
      commit(types.SET_ORDER_LOGISTICAL, response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

}

// mutations
const mutations = {
  [types.SET_ORDER_PREPARING_DATA_FOR_ROUTE] (state, payload) {
    if(utils.isArray(payload)){
      payload.forEach((item) => {
        state.orderPreparingData[item.name] = item.value
      })
    }else{
      state.orderPreparingData[payload.name] = payload.value
    }
  },
  [types.SET_ORDER_GENERAL] (state, payload) {
    state.orderPreparingData[item.name] = item.value
  },
  [types.CLEAR_PREPARING_DATA_FOR_ROUTE] (state) {
    state.orderPreparingData = {
      wareId: '',
      routeId: '',
      companyId: '',
      goodsType: '',
      weight: '',
      volume: '',
      goods: {
        attention: '',
        goodsType: '',
        weight: '',
        volume: '',
        goodsName: '',
        totalPrice: '',
      },
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
      },
      distribute: {
        type: '',
        targetStation: {
          name: '',
          phone: '',
          attention: ''
        }
      },
      attention: {
        content: ''
      },
      insurance: {
        percent: ''
      },
      targetAddress: {
        id: '',
        content: {
          name: '',
          phone: '',
          text: '',
        },
      },
      logistical: {
        company: {
          name: '',
          id: '',
        },
        route: {
          name: '',
          id: '',
        }
      }
    }
  },
  [types.SET_ORDER_WARE_ID] (state, payload) {
    state.orderPreparingData.wareId = payload
  },
  [types.SET_ORDER_TARGET_STATION] (state, payload) {
    let orderWare = JSON.parse(sessionStorage('orderWare'))
    orderWare.station = payload
    sessionStorage.setItem('orderWare', orderWare)
  },
  [types.SET_ORDER_TARGET_ADDRESS] (state, payload) {
    let orderWare = JSON.parse(sessionStorage('orderWare'))
    orderWare.targetAddress = payload
    sessionStorage.setItem('orderWare', orderWare)
  },
  [types.SET_ORDER_TARGET_DISTRIBUTE] (state, payload) {
    let orderWare = JSON.parse(sessionStorage('orderWare'))
    orderWare.distribute = payload
    sessionStorage.setItem('orderWare', orderWare)
  },
  [types.SET_ORDER_LOGISTICAL] (state, payload) {
    let orderWare = JSON.parse(sessionStorage('orderWare'))
    orderWare.logistical = payload
    sessionStorage.setItem('orderWare', orderWare)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}

/* add to listen change in getOrder creating page */
// let orderPreparingStorageHandle = (event) => {
//   state.orderPreparingData = sessionStorage.getItem('orderWare')
// }
//
// window.addEventListener('storage', orderPreparingStorageHandle, false)
