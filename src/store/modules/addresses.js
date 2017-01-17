/**
 * Created by root on 17-1-15.
 */
import * as types from '../mutation-types'
import * as urls from '../../http/url'
import { addressesRequest } from '../../http/api'

const AddressApi = new addressesRequest()

import * as utils from '../../tool/utils'

// init state
const state = {
  addresses: []
}

// getters
const getters = {
  addresses: state => state.addresses
}

// actions
const actions = {
  getTargetAddresses ({commit, state}) {
    AddressApi.getTargetAddresses({api: urls.getTargetAddresses}).then((response) => {
      commit(types.SET_TARGET_ADDRESSES, response.data)
    }).catch((error) => {
      console.log(error)
    })
  }
}

// mutations
const mutations = {
  [types.SET_TARGET_ADDRESSES] (state, payload) {
    state.addresses = payload
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
