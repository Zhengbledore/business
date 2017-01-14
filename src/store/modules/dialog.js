/**
 * Created by root on 17-1-14.
 */
import * as types from '../mutation-types'

// init state
const state = {
  dialog: {
    show: false,
    content: '',
  }
}

// getters
const getters = {
  dialog: state => state.dialog,
}

// actions
const actions = {
  setDialog ({commit, state}, payload) {
    commit(types.SET_GENERAL_DIALOG, payload.data)
  },
}

// mutations
const mutations = {
  [types.SET_GENERAL_DIALOG] (state, payload) {
    state.dialog = payload.dialog
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
