/**
 * Created by root on 17-1-20.
 */
import * as types from '../mutation-types'

// init state
const state = {
  user: []
}

// getters
const getters = {
  user: state => JSON.parse(localStorage.getItem('user'))
}

// actions
const actions = {
  login ({commit, state}, payload) {

    if(false){

      commit(types.SET_USER_LOGIN)
    }

  }
}

// mutations
const mutations = {
  [types.SET_USER_LOGIN] (state, payload) {
    localStorage.setItem('user', JSON.stringify(payload))
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
