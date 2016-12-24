<template>
  <div id="search-item">
    <mu-appbar :title="headerTitle">
      <mu-icon-button icon="clear" slot="left" v-show="headerIcon" @click="closeSearchBox"/>
      <mu-text-field icon="search" class="appbar-search-field" slot="right" :hintText="searchHintText"
                     @change="handleChange" ref="textField" :value="searchTextFieldValue"
      />
      <mu-icon-menu icon="search" slot="right" :value="value">
      </mu-icon-menu>
    </mu-appbar>
  </div>
</template>
<style scpoed>
  #search-item {
    width: 100%;
    height: 56px;
    /*background-color: #d3d6db;*/
    /*display: -webkit-flex;*/
    /*display: flex;*/
  }

  .search-clear-icon {
    width: 56px;
    height: 56px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

  .search-item-input {
    height: 56px;
  }

  .search-item-left {
    display: inline-block;
    /*height: 56px;*/
    width: 56px;
  }

  .search-item-right {
    display: inline-block;
    /*height: 56px;*/
    -webkit-flex: 1;
    flex: 1;
  }
  .mu-text-field-input {
    color: #d3d6db;
  }
</style>
<script>
  import muAppbar from 'muse-ui/src/appBar'
  import muIconButton from 'muse-ui/src/iconButton'
  import muTextField from 'muse-ui/src/textField'
  import muIconMenu from 'muse-ui/src/iconMenu'
  import {menuItem as muMenuItem} from 'muse-ui/src/menu'
  export default{
    props: {
      headerTitle: {
        type: String,
        default: '首页'
      },
      headerIcon: {
        type: Boolean,
        default: true
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
    },
    mounted() {
    },
    methods: {
      closeSearchBox() {
        this.$store.dispatch('closeSearchBox')
      },
      handleChange(val) {
        const bar = {
          associationProductName: 'mac',
          associationOtherProducts: [
            {name: 'mini', fullName: 'mac mini'},
            {name: 'pro', fullName: 'mac pro'},
          ]
        }

        if (val.length > 0) {
          this.$store.dispatch('goToSearch', {
            data: bar,
            type: 'show'
          })
        } else {
          this.$store.dispatch('goToSearch', {
            data: bar,
            type: 'close'
          })
        }

        /* test transition */

        /* step 1: val.length > 0 and filter trim and some <html> or js */

        /* step 2: change event need a little time to wait */

        /* step 3: search loading status */

        /* step 4: dispatch Vuex action to make a search request and update data source */
      },
      setTextFieldFocus() {
        this.$refs.textField.$refs.input.focus()
      }
    },
    computed: {
      searchBoxShow() {
        return this.$store.getters.searchBoxShow
      },
      searchTextFieldValue() {
        if(this.thisRouteName === 'search') {
          return this.$store.getters.searchTextFieldValue
        }
        return ''
      },
      thisRouteName() {
          return this.$store.state.route.name
      },
      thisRouteParams() {
          return this.$store.state.route.params
      },
      searchHintText () {
          if(this.routerName === 'routes') {
              return '搜索店铺内商品内容'
          }
          return '请输入搜索内容'
      },
      routerName () {
          return this.$store.state.route.name
      }
    },
    watch: {
      searchBoxShow(newVal) {
        if (newVal === true) {
          this.setTextFieldFocus()

          if (this.thisRouteName === 'search' && this.thisRouteParams.query > 0) {
            this.handleChange(this.$store.state.route.params.query)
            // topBar's textField and searchItem's textField input val
            this.$store.dispatch('setSearchTextFieldValue', this.thisRouteParams.query)
          }
        } else if (newVal === false) {
          this.$refs.textField.inputValue = ''
        }
      }
    }
  }
</script>
