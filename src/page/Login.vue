<template>
  <div class="box-login"  v-bind:style="{background: 'url(' + backgroundImg + ')'}">
    <div class="box-login-way-lists">
      <div class="box-choose-login-way" v-for="(item, index) in ways" @click="loginByThisWay(item)">
        <div class="box-login-way-left">
          <div class="box-login-way-icon">
            <img :src="avatar" class="box-login-img">
          </div>
        </div>
        <div class="box-login-way-content">
          <div class="box-login-way-raw">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  div {
    margin: 0;
    padding: 0;
  }

  .box-login {
    height: 600px;
    z-index: 10;
    background-repeat: repeat-y;
  }

  .box-login-way-lists {
    padding-top: 30%;
  }

  .box-choose-login-way {
    width: 100%;
    /*min-height: 300px;*/
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    /*-webkit-justify-content: center;*/
    /*justify-content: center;*/
    margin-bottom: 15px;
  }

  .box-login-way-left {
    width: 60px;
    height: 60px;
    display: inline-block;
    margin-right: 20px;
    /*overflow: hidden;*/
    -webkit-flex: 2;
    flex: 2;
  }

  .box-login-way-content {
    display: inline-block;
    height: 60px;
    /*width: 100%;*/
    -webkit-flex: 3;
    flex: 3;
  }

  .box-login-way-icon {
    width: 100%;
    height: 100%;
  }

  .box-login-img {
    width: 60px;
    height: 60px;
    float: right;
    border-radius: 30px;
  }

  .box-login-way-raw {
    text-align: center;
    font-size: 24px;
    line-height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left;
  }
</style>
<script>
  import avatar from '../assets/images/breakfast.f109829.jpg'
  import backgroundImg from '../assets/images/20150607192231_G23Xz.png'
  export default{
    data(){
      return {
        avatar,
        backgroundImg,
        ways: [
          {name: '微信登录', value: 'wechat', img: ''},
          {name: '待开发', value: 'noting', img: ''}
        ]
      }
    },
    components: {
    },
    methods: {
      loginByThisWay(item) {
      /* ToDo Vuex mutation, make a request to php */
      }
    }
  }
</script>
