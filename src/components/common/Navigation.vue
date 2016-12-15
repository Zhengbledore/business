<template>
  <div id="navigation">
    <mu-paper style="" class="grid-navigation">
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <!--<mu-bottom-nav-item value="home" :title="navigationLang.home" :icon="navigationIcon.home"/>-->
        <!--<mu-bottom-nav-item value="favorites" :title="navigationLang.favorites" :icon="navigationIcon.favorites"/>-->
        <!--<mu-bottom-nav-item value="account" :title="navigationLang.account" :icon="navigationIcon.account"/>-->
        <!--<mu-bottom-nav-item value="setting" :title="navigationLang.setting" :icon="navigationIcon.setting"/>-->
        <mu-bottom-nav-item v-for="(item, index) in navigation" :value="item.value" :title="item.title" :icon="item.icon"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>
<style scoped>
  .grid-navigation {
    max-width: 100%;
  }
  #navigation {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 28;
  }
</style>
<script>
//  import langSetting from '../../../config/lang/zh-cn'
//  import { Navigation } from '../../../config/icon/icon'
import muPaper from 'muse-ui/src/paper'
import { bottomNav as muBottomNav, bottomNavItem as muBottomNavItem } from 'muse-ui/src/bottomNav'
  export default{
    components: {
      muPaper,
      muBottomNav,
      muBottomNavItem
    },
    data () {
      return {
        bottomNav: 'home',
//        bottomNavColor: 'home',
        navigation: [
          {value: 'home', title: '首页', icon: 'home'},
          {value: 'favorites', title: '我的收藏', icon: 'favorite'},
          {value: 'account', title: '用户中心', icon: 'account_circle'},
          {value: 'setting', title: '设置', icon: 'settings'}
        ]
      }
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
        let nextRoute = ''
        switch(val)
        {
          case 'account':
            nextRoute = '/user/center'
            break;
          case 'favorites':
            nextRoute = '/favorites'
            break;
          case 'setting':
            nextRoute = '/user/setting'
            break;
          default:
            nextRoute = '/'
        }
        this.$router.push({
            path: nextRoute
        })
      }
    },
    mounted() {
//        console.log(Navigation)
    },
    computed: {
//      navigationLang() {
//        return langSetting.Navigation
//      },
      navigationIcon() {
          return Navigation
      }
    }
  }
</script>
