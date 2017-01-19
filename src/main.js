import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'

/**/
import axios from 'axios'
Vue.prototype.$http = axios

/* import utils */
import { loggedIn } from './tool/utils'

/* import muse-ui  */
// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
import 'muse-components/styles/base.less' // 加载基础的样式
import 'muse-ui/dist/theme-carbon.css'
import { sync } from 'vuex-router-sync'

import '../node_modules/material-design-icons/iconfont/material-icons.css'

// sync(store, router) // done.

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(Vuex)
// Vue.use(MuseUI)

/*
 * Route
 */
import routes from './router/router'

let router = new VueRouter({
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
  if (to.matched.some(record => record.meta.requiresAuth)) {

    // if (!loggedIn()) {
    //   next({
    //     path: '/choose/login',
    //     query: { redirect: to.fullPath }
    //   })
    // } else {
    //   next()
    // }

    next()
  }else{
    next()
  }
})

router.afterEach(route => {
  // ...
})

/* use vuex-router-sync */
sync(store, router)

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: {App},
//   router,
//   store
// })

const app = new Vue({
  router,
  store,
  render: h => h(App),
  el: '#app'
})
