/**
 * Created by root on 16-12-14.
 */
import * as types from '../mutation-types'
// import searchRequest from '../../http/request-instance'

// init state
const state = {
  searchBoxShow: false,
  searchResults: [],
  searchTextFieldValue: ''
}

// getters
const getters = {
  searchBoxShow: state => state.searchBoxShow,
  searchResults: state => state.searchResults,
  searchTextFieldValue: state => state.searchTextFieldValue
}

// actions
const actions = {
  changeSearchBoxShow ({commit, state}) {
    commit(types.SHOW_SEARCH_BOX)
  },
  closeSearchBox ({commit, state}) {
    commit(types.CLOSE_SEARCH_BOX)
    commit(types.SET_SEARCH_RESULTS, {
      data: [],
      type: 'close'
    })
  },
  goToSearch ({commit, state}, inputVal) {
    /* some http request */
    // searchRequest
    //   .then(function() {
    //
    // })
    //   .catch(function() {
    //
    // })
    commit(types.SET_SEARCH_RESULTS, inputVal)
  },
  setSearchTextFieldValue ({commit, state}, inputValue) {
    commit(types.SET_SEARCH_TEXT_FIELD_VALUE, inputValue)
  }
}

// mutations
const mutations = {
  [types.SHOW_SEARCH_BOX] (state) {
    if(state.searchBoxShow === false) {
      state.searchBoxShow = true
    }
  },
  [types.CLOSE_SEARCH_BOX] (state) {
    if(state.searchBoxShow === true) {
      state.searchBoxShow = false
    }
  },
  [types.SET_SEARCH_RESULTS] (state, payload) {
    if(payload.type === 'show') {
      // state.searchResults = payload
      state.searchResults.push(payload.data) // just test
    } else if(payload.type === 'close') {
      state.searchResults = []
    }
  },
  [types.SET_SEARCH_TEXT_FIELD_VALUE] (state, payload) {
    state.searchTextFieldValue = payload
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
