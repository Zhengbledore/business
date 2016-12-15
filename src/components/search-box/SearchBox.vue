<template>
  <div id="search-box" v-show="show">
    <search-item></search-item>
    <search-result></search-result>
  </div>
</template>
<style scpoed>
#search-box {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}
</style>
<script>
//  import Overlay from './Overlay.vue'
  import SearchItem from './SearchItem.vue'
  import SearchResult from './SearchResult.vue'
  import SearchBox from './index'
  export default{
    data(){
      return {}
    },
    components: {
//      Overlay,
      SearchItem,
      SearchResult
    },
    mixins: [SearchBox],
    computed: {
      show() {
          return this.$store.getters.searchBoxShow
      }
    },
    mounted() {
        console.log(this.show)
    }
  }
</script>
