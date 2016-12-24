<template>
  <div id="top-bar">
    <mu-appbar :title="headerTitle">
      <mu-icon-button icon="keyboard_arrow_left" slot="left" v-show="headerIcon"/>
      <mu-text-field icon="search" class="appbar-search-field" slot="right" hintText=""
                     @focus="changeSearchBoxShow"
      />
      <mu-icon-menu :icon="iconOfMenu" slot="right" :value="iconMenuValue" @change="handleChange">
        <mu-menu-item :value="item.value" :title="item.title" v-for="(item, index) in iconMenuItem"/>
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
  import {menuItem as muMenuItem} from 'muse-ui/src/menu'
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
    mounted() {
    },
    methods: {
      handleChange (value) {
        this.$store.dispatch('setTopBarIconMenuCurrentValue', value)
        this.$router.push({ name: 'routes', params: { company_id: '2131' }})
      },
      changeSearchBoxShow () {
        this.$store.dispatch('changeSearchBoxShow')
      },
      setIconMenuDataToVuex (homePageIconMenu) {
        this.$store.dispatch('setTopBarIconMenuIcon', homePageIconMenu.iconOfMenu)
        this.$store.dispatch('setTopBarIconMenuItem', homePageIconMenu.menuItem)
        this.$store.dispatch('setTopBarIconMenuCurrentValue', homePageIconMenu.iconMenuCurrentValue)
        this.$store.dispatch('setTopBarIconMenuType', homePageIconMenu.iconMenuType)
      }
    },
    computed: {
      iconMenuValue() {
        return this.$store.getters.iconMenuCurrentValue
      },
      iconOfMenu () {
        return this.$store.getters.iconOfMenu
      },
      iconMenuItem () {
        return this.$store.getters.menuItem
      },
      routeName () {
        return this.$store.state.route.name
      }
    },
    watch: {
        routeName(newValue) {
          // set some icon and default data
          if (newValue === 'routes') {
            const homePageIconMenu = {
              iconOfMenu: 'view_list',
              iconMenuCurrentValue: 'all',
              menuItem: [
                {title: 'all', value: 'all', nextPath: 'home', params: ''},
                {title: 'new', value: 'new', nextPath: 'search', params: ''},
                {title: 'hot', value: 'hot', nextPath: 'search', params: ''},
              ],
              iconMenuType: 'routes'
            }
            this.setIconMenuDataToVuex(homePageIconMenu)
          } else {
            const homePageIconMenu = {
              iconOfMenu: 'more_vert',
              iconMenuCurrentValue: 'home',
              menuItem: [
                {title: 'home', value: 'home', nextPath: 'home', params: ''},
                {title: 'search', value: 'search', nextPath: 'search', params: ''},
              ],
              iconMenuType: 'default'
            }
            this.setIconMenuDataToVuex(homePageIconMenu)
          }
        }
    }
  }
</script>
