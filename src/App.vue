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

  export default {
    name: 'app',
    components: {
      TopBar,
      Container,
      Navigation
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
        return this.$store.state.route.name
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
