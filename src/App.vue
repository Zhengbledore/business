<template>
  <div id="app">
    <top-bar :headerTitle="headerTitle" :headerIcon="headerIcon" :searchShow="searchShow"></top-bar>
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

    },
    computed: {
      headerTitle() {
        let routerName = this.$store.state.route.name
        if(routerName) {
            console.log(this.HeaderTitles[routerName].pageTitle)
          return this.HeaderTitles[routerName].pageTitle
        }
        return '首页'
      },
      headerIcon() {
        if (this.$store.state.route.path === '/') {
          return false
        }
        return true
      },
      searchShow() {
        let routerName = this.$store.state.route.name
        if(!routerName) return
        if(this.HeaderTitles[routerName].searchShow) {
          return true
        }
        return false
      }
    }
  }
</script>

<style>

</style>
