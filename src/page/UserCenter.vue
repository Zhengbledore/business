<template>
  <div class="box-user-center-page">
    <div class="box-user-center-wrapper">
      <div class="box-user-header">
        <mu-list>
          <mu-list-item title="工厂中心" describeText="点击进入工厂中心" @click="goToNextPage('userInfo')">
            <mu-avatar icon="account_balance" backgroundColor="lightGreen400" slot="leftAvatar"/>
            <mu-icon value="keyboard_arrow_right" slot="right"/>
          </mu-list-item>
        </mu-list>
      </div>
      <div class="box-user-content">
        <mu-list>
          <mu-list-item title="我的订单" describeText="点击进入订单中心" @click="goToNextPage('orderManager', 'all')">
            <mu-avatar icon="subject" backgroundColor="orange400" slot="leftAvatar"/>
            <mu-icon value="keyboard_arrow_right" slot="right"/>
          </mu-list-item>
        </mu-list>
        <mu-divider/>
        <mu-flexbox>
          <mu-flexbox-item class="box-flex" v-for="(item, index) in flatButtons">
            <mu-flat-button
              :label="item.label"
              class="box-flat-button"
              labelPosition="before"
              @click="goToNextPage('orderManager', item.value)"
            />
          </mu-flexbox-item>
        </mu-flexbox>
      </div>
      <div class="box-user-content">
        <mu-list>
          <mu-list-item title="我的收藏" describeText="点击进入收藏中心" @click="goToNextPage('favorites', 'all')">
            <mu-avatar icon="favorite" backgroundColor="red500" slot="leftAvatar"/>
            <mu-icon value="keyboard_arrow_right" slot="right"/>
          </mu-list-item>
        </mu-list>
        <mu-divider/>
        <mu-flexbox>
          <mu-flexbox-item class="box-flex" v-for="(item, index) in flatFavorites">
            <mu-flat-button
              :label="item.label"
              class="box-flat-button"
              labelPosition="before"
              @click="goToNextPage('favorites', item.value)"
            />
          </mu-flexbox-item>
        </mu-flexbox>
      </div>
      <div class="box-user-content">
        <mu-list>
          <mu-list-item title="我的设置" describeText="点击进入设置管理" @click="goToNextPage('setting')">
            <mu-avatar icon="settings" backgroundColor="blueGrey500" slot="leftAvatar"/>
            <mu-icon value="keyboard_arrow_right" slot="right"/>
          </mu-list-item>
        </mu-list>
        <mu-divider/>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
  .box-user-center-page {
    height: 100%;
    width: 100%;
    background-color: #f0f2f5;
  }

  .box-user-center-wrapper {

  }

  .box-user-header {
    background-color: #ffffff;
  }

  .box-user-content {
    margin-top: 10px;
    background-color: #ffffff;
  }

  .box-flex {
    height: 60px;
    text-align: center;
    line-height: 60px;
  }
</style>
<script>
  /* import muse-ui */
  import {list as MuList, listItem as MuListItem} from 'muse-ui/src/list'
  import MuDivider from 'muse-ui/src/divider'
  import MuAvatar from 'muse-ui/src/avatar'
  import MuIcon from 'muse-ui/src/icon'
  import MuFlatButton from 'muse-ui/src/flatButton'
  import {flexbox as MuFlexbox, flexboxItem as MuFlexboxItem} from 'muse-ui/src/flexbox'
  export default{
    data(){
      return {
        flatButtons: [
          {label: '待确认', value: 'toBeConfirm', icon: 'import_export'},
          {label: '待发货', value: 'confirm', icon: 'import_export'},
          {label: '已发货', value: 'send', icon: 'import_export'},
        ],
        flatFavorites: [
          {label: '关注的商品', value: 'goods', icon: 'import_export'},
          {label: '关注的店铺', value: 'shop', icon: 'import_export'},
        ],
      }
    },
    components: {
      MuList,
      MuListItem,
      MuDivider,
      MuAvatar,
      MuIcon,
      MuFlatButton,
      MuFlexbox,
      MuFlexboxItem
    },
    methods: {
      goToNextPage(page, params = []) {
        let path = {
          name: page,
          params: {

          }
        }
        switch (page) {
          case 'userInfo':
            break
          case 'orderManager':
            path.params = {
              type: params[0]
            }
            break
          case 'favorite':
            path.params = {
              type: params[0]
            }
            break
          case 'setting':

            break
        }
        this.$router.push(path)
      }
    }
  }
</script>
