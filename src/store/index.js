/**
 * Created by root on 16-12-1.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import demo from './modules/demo'
import loading from './modules/loading'
import searchBox from './modules/search-box'
import topBar from './modules/top-bar'
import orderPreparingData from './modules/order-preparing-data'
import factory from './modules/factory'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    demo,
    loading,
    searchBox,
    topBar,
    orderPreparingData,
    factory
  }
})
