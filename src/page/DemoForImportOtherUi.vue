<template>
  <div>
    this is HomePage
    <mt-swipe :auto="4000" @click="goToNextPage">
      <mt-swipe-item class="slide1"></mt-swipe-item>
      <mt-swipe-item class="slide2">2</mt-swipe-item>
      <mt-swipe-item class="slide3">3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<style scope>
  @import "../../node_modules/mint-ui/lib/swipe/style.css";
  @import "../../node_modules/mint-ui/lib/swipe-item/style.css";

  .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
  .mint-swipe-item {
    line-height: 200px;
  }
  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }
  .slide2 {
    background-color: #ffd705;
    color: #000;
  }
  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
</style>
<script>
  import MtSwipe from 'mint-ui/lib/swipe';
  import MtSwipeItem from 'mint-ui/lib/swipe-item';
  export default{
    name: 'home-page',
    data(){
      return {}
    },
    components: {
      MtSwipe,
      MtSwipeItem
    },
    methods: {
      goToNextPage(val) {
        console.log(val)
      }
    }
  }
</script>
