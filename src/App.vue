<template>
  <div id="app">
    <top-bar :headerTitle="headerTitle" :headerIcon="headerIcon"></top-bar>
    <container></container>
    <navigation></navigation>
  </div>
</template>

<script>
  import store from './store'
  import TopBar from './components/common/TopBar.vue'
  import Container from './components/common/Container.vue'
  import Navigation from './components/common/Navigation.vue'
  import { headerTitle as HeaderTitles } from '../config/lang/vue-router/zh-cn'

  export default {
    name: 'app',
    components: {
      TopBar,
      Container,
      Navigation
    },
    data() {
        return {
          HeaderTitles
        }
    },
    methods: {},
    mounted() {
//      this.$http({
//        method: 'post',
//        url: 'http://api.business.dev/api/test/session',
//        headers: {
//          'Content-Type': 'application/json',
//          'Accept': 'application/vnd.app.v1+json'
//        }
//      }).then(function (response) {
//        console.log(response);
//      })
//        .catch(function (error) {
//          console.log(error);
//        })

    },
    computed: {
      headerTitle() {
        let routerName = this.$store.state.route.name
        if(routerName) {
          return this.HeaderTitles[routerName].pageTitle
        }
        return '首页'
      },
      headerIcon() {
        if (this.$store.state.route.path === '/') {
          return false
        }
        return true
      }
    }
  }
</script>

<style>
  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
</style>
