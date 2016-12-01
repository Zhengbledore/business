import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'

/* import muse-ui  */
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'
// import { sync } from 'vuex-router-sync'

// sync(store, router) // done.

/* eslint-disable no-new */
Vue.use(VueRouter, Vuex, MuseUI)

/*
 * Route
 */
import routes from './router/router'

const router = new VueRouter({
  routes,
  mode: 'history', // "hash" | "history" | "abstract"
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  // ...
  if (to.matched.some(record => record.meta.requiresName)) {
    next()
  }else{
    next()
  }
})

router.afterEach(route => {
  // ...
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router,
  store
})
