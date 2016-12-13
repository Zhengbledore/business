<template>
  <div id="container">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style scoped>
  /**
  * vue-router transition
  */
  /*.vux-pop-out-transition{*/
  /**/
  /*}*/
  /*.vux-pop-in-transition {*/
  /*width: 100%;*/
  /*animation-duration: 0.5s;*/
  /*animation-fill-mode: both;*/
  /*backface-visibility: hidden;*/
  /*}*/
  #container {
    width:100%;
    /*position: fixed;*/
    overflow: hidden;
    /*height: 700px;*/
  }
</style>
<script>
  export default{
    name: 'container',
    data(){
      return {}
    },
    components: {}
  }
</script>
