/**
 * Created by root on 16-12-12.
 */
import * as types from '../mutation-types'

// init state
const state = {
  // dialogShow: false
  isLoading: false,
  direction: 'forward'
}

// getters
const getters = {
  // dialogShow: state => state.dialogShow
  isLoading: state => state.isLoading,
  direction: state => state.direction
}

// actions
const actions = {
  // changeShow ({commit, state}) {
  //   commit(types.CHANGE_SHOW_FOR_DIALOG)
  // }
}

// mutations
const mutations = {
  // [types.CHANGE_SHOW_FOR_DIALOG] (state) {
  //   state.dialogShow = !state.dialogShow
  // }
  [types.CHANGE_LOADING] (state, isLoading) {
    state.isLoading = isLoading
  },
  [types.CHANGE_DIRECTION] (state, isLoading) {
    state.isLoading = isLoading
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
