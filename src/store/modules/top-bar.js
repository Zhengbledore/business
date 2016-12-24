/**
 * Created by root on 16-12-24.
 */
import * as types from '../mutation-types'

// init state
const state = {
  iconMenuType: '',
  iconOfMenu: '',
  iconMenuCurrentValue: '',
  menuItem: []
}

// getters
const getters = {
  iconOfMenu: state => state.iconOfMenu,
  iconMenuCurrentValue: state => state.iconMenuCurrentValue,
  menuItem: state => state.menuItem,
  iconMenuType: state => state.iconMenuType
}

// actions
const actions = {
  setTopBarIconMenuIcon ({commit, state}, payload) {
    commit(types.SET_TOP_BAR_ICON_MENU_ICON, payload)
  },
  setTopBarIconMenuItem ({commit, state}, payload) {
    commit(types.SET_TOP_BAR_ICON_MENU, payload)
  },
  setTopBarIconMenuCurrentValue ({commit, state}, payload) {
    commit(types.SET_TOP_BAR_ICON_MENU_CURRENT_VALUE, payload)
  },
  setTopBarIconMenuType ({commit, state}, payload) {
    commit(types.SET_TOP_BAR_ICON_MENU_TYPE, payload)
  }
}

// mutations
const mutations = {
  [types.SET_TOP_BAR_ICON_MENU] (state, payload) {
    state.menuItem = payload
  },
  [types.SET_TOP_BAR_ICON_MENU_ICON] (state, payload) {
    state.iconOfMenu = payload
  },
  [types.SET_TOP_BAR_ICON_MENU_CURRENT_VALUE] (state, payload) {
    state.iconMenuCurrentValue = payload
  },
  [types.SET_TOP_BAR_ICON_MENU_TYPE] (state, payload) {
    state.iconMenuType = payload
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
