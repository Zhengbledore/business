<template>
  <div id="top-bar">
    <mu-appbar :title="headerTitle">
      <mu-icon-button icon="keyboard_arrow_left" slot="left" v-show="headerIcon"/>
      <mu-text-field icon="search" class="appbar-search-field" slot="right" hintText=""
      @focus="changeSearchBoxShow"
      />
      <mu-icon-menu icon="more_vert" slot="right" :value="value" @change="handleChange">
        <mu-menu-item value="1" title="星期一"/>
        <mu-menu-item value="2" title="星期二"/>
        <mu-menu-item value="3" title="星期三"/>
        <mu-menu-item value="4" title="星期四"/>
        <mu-menu-item value="5" title="星期五"/>
        <mu-menu-item value="6" title="星期六"/>
        <mu-menu-item value="7" title="星期日"/>
      </mu-icon-menu>
    </mu-appbar>
    <search-box></search-box>
  </div>
</template>
<style scoped>
  #top-bar {
    /*position: fixed;*/
    width: 100%;
    position: fixed;
    z-index: 100004;
  }
</style>
<script>
  //  import muAppbar from 'muse-components/appBar'
  import muAppbar from 'muse-ui/src/appBar'
  import muIconButton from 'muse-ui/src/iconButton'
  import muTextField from 'muse-ui/src/textField'
  import muIconMenu from 'muse-ui/src/iconMenu'
  import { menuItem as muMenuItem } from 'muse-ui/src/menu'
  import searchBox from '../search-box/SearchBox.vue'
  export default{
    props: {
      headerTitle: {
        type: String,
        default: '首页'
      },
      headerIcon: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        value: '1'
      }
    },
    components: {
      muAppbar,
      muIconButton,
      muTextField,
      muIconMenu,
      muMenuItem,
      searchBox
    },
    methods: {
      handleChange (value) {
        this.value = value
      },
      changeSearchBoxShow () {
        this.$store.dispatch('changeSearchBoxShow')
      }
    }
  }
</script>
