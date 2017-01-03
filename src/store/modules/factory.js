/**
 * Created by root on 17-1-3.
 */
import * as types from '../mutation-types'
import axios from 'axios'
import * as urls from '../../http/url'

// init state
const state = {
  shipments: [], // 出货量

}

// getters
const getters = {
  shipments: state => state.shipments
}

// actions
const actions = {
  getShipmentsForFactory ({commit, state}, days) {
    /* require get data from front end */
    axios({
      url: urls.factoryShipment,
      method: 'post',
      baseURL: urls.baseUrl,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      params: {
        days: days,
        companyId: 'demo12132'
      },
      timeout: 1500,
    }).then(function (response) {
      commit(types.SET_SHIPMENT_DATA_FOR_FACTORY, response.shipments)
    })
      .catch(function (error) {
        console.log(error);
      });
  }
}

// mutations
const mutations = {
  [types.SET_SHIPMENT_DATA_FOR_FACTORY] (state, payload) {
    state.shipments = payload
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
