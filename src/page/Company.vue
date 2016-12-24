<template>
  <div class="box-company-page">
    <div class="box-banner-section">
      <img :src="Mac">
      <div class="banner-content">
        <div class="banner-shop"></div>
        <div class="banner-action follow-btn"></div>
      </div>
    </div>
    <div class="box-border-grids total-section">
      <mu-flexbox>
        <mu-flexbox-item class="box-flex" v-for="(item, index) in flatButtons">
          <mu-flat-button
            :label="item.label"
            class="box-flat-button"
            labelPosition="before"
            :icon="item.icon"
            :color="item.color"
            @click="goToRoutersPage(item.value)"
          />
        </mu-flexbox-item>
      </mu-flexbox>
    </div>
    <div class="box-swipe">
      <swipe class="my-swipe" :style="swipeStyle">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
      </swipe>
    </div>
    <div class="box-border-grids">
      <div class="box-border-grids-img">
        <router-link :to="{ name: 'route', params: { company_id: 123, route_id: 333 }}">
          <img :src="Mac" class="box-border-grids-img-body">
        </router-link>
        <router-link :to="{ name: 'route', params: { company_id: 123, route_id: 333 }}">
          <img :src="Mac" class="box-border-grids-img-body">
        </router-link>
      </div>
      <div class="box-border-grids-img">
        <router-link :to="{ name: 'route', params: { company_id: 123, route_id: 333 }}">
          <img :src="Mac" class="box-border-grids-img-body">
        </router-link>
        <router-link :to="{ name: 'route', params: { company_id: 123, route_id: 333 }}">
          <img :src="Mac" class="box-border-grids-img-body">
        </router-link>
      </div>
    </div>
    <div class="box-product-recommend">
      <div class="floor-title">超值单品</div>
      <div class="box-hot-product-list">
        <div class="box-hot-product-item" v-for="(item, index) in hotProducts">
          <router-link
            :to="{ name: 'route', params: { company_id: 123, route_id: 333 }}">
            <img :src="item.img" alt="item.title" class="box-hot-product-item-img">
            <span class="box-hot-product-item-desc">{{ item.title }}</span>
            <span class="price-info">
            <em class="price-yen">¥</em><em class="price-int">4399</em>
            <em class="price-decimal">.00</em>
          </span>
          </router-link>
        </div>
        <div style="clear: both;"></div>
        <div class="box-product-more" @click="goToRoutersPage('all')">
          <div style="float: right;">
            <router-link
              :to="{ name: 'route', params: { company_id: 123, route_id: 333 }}"
            >
              <mu-flat-button label="更多" class="demo-flat-button" labelPosition="before" icon="keyboard_arrow_right"/>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .my-swipe {
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  .slide1 {
    background-color: #0089dc;
    color: #fff;
    /*width: 100%;*/
    /*height: 100%;*/
  }

  .slide2 {
    background-color: #ffd705;
    color: #000;
  }

  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }

  .box-company-page {
    /*margin-top: 56px;*/
    background-color: #DFDFDF;
    padding-bottom: 56px;
  }

  .box-banner-section {
    height: 129px;
    overflow: hidden;
  }

  .banner-shop {

  }

  .banner-action {

  }

  .box-border-grids {
    margin-bottom: 10px;
    background-color: #ffffff;
  }

  .box-border-grids-img {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

  .box-border-grids-img-body {
    width: 100%;
    height: 143px;
    padding: 10px;
  }

  .box-flex {
    height: 58px;
    background-color: #ffffff;
    text-align: center;
    line-height: 58px;
    /*border-bottom: 1px solid black;*/
    /*border-top: 1px solid black;*/
  }

  .box-swipe {
    background-color: #ffffff;
    margin-bottom: 10px;
  }

  .box-hot-product-list {
    /*display: -webkit-flex;*/
    /*display: flex;*/
    /*-webkit-align-items: center;*/
    /*align-items: center;*/
    /*-webkit-justify-content: center;*/
    /*justify-content: center;*/
    /*height: 100%;*/
    clear: both;
    overflow: hidden;
    /*margin: .4rem .2rem 0;*/
    background-color: #ffffff;
    padding: 0 5px 0 5px;
  }

  .box-hot-product-item {
    display: block;
    float: left;
    width: 50%;
    padding: 0 .2rem;
    margin-bottom: .4rem;
    overflow: hidden;
    /*padding-left: 5px;*/
    /*padding-right: 5px;*/
  }

  .box-hot-product-item-desc {
    color: #000;
    font-size: .52rem;
    margin-top: .32rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: .52rem;
    height: 1.44rem;
    line-height: .72rem;
  }

  .box-hot-product-item-img {
    /*width: 100%;*/
  }

  .price-info {
    font-size: .4rem;
    color: #F23030;
    margin-top: .2rem;
    height: .64rem;
    line-height: .64rem;
  }

  .box-product-more {
    width: 100%;
    height: 42px;
    /*clear: both;*/
    /*display: block;*/
  }

  html {
    /*font-size: 50px;*/
  }
</style>
<script>
  /* need add a choose to make route search request in company page, edit search item */
  import Swipe from '../../node_modules/vue-swipe/src/swipe.vue'
  import SwipeItem from '../../node_modules/vue-swipe/src/swipe-item.vue'
  import {flexbox as MuFlexbox, flexboxItem as MuFlexboxItem} from 'muse-ui/src/flexbox'
  import MuFlatButton from 'muse-ui/src/flatButton'

  /* import company img */
  import Mac from '../assets/images/mac.jpg'
  export default{
    data(){
      return {
        swipeStyle: [
          {height: '11rem'},
          {margin: '10px'},
        ],
        Mac,
        flatButtons: [
          {label: '全部商品', value: 'all'},
          {label: '新上架', value: 'new'},
          {label: '热销', value: 'hot'},
        ],
        hotProducts: [
          {
            img: Mac,
            title: 'Apple iPhone 6s Plus (A1690) 16G 玫瑰金色 移动4G手机',
            price: '4399.50',
            id: '123',
            companyId: '2132'
          },
          {
            img: Mac,
            title: 'Apple iPhone 6s Plus (A1690) 16G 玫瑰金色 移动4G手机',
            price: '4399.50',
            id: '123',
            companyId: '2132'
          },
          {
            img: Mac,
            title: 'Apple iPhone 6s Plus (A1690) 16G 玫瑰金色 移动4G手机',
            price: '4399.50',
            id: '123',
            companyId: '2132'
          },
          {
            img: Mac,
            title: 'Apple iPhone 6s Plus (A1690) 16G 玫瑰金色 移动4G手机',
            price: '4399.50',
            id: '123',
            companyId: '2132'
          }
        ]
      }
    },
    components: {
      Swipe,
      SwipeItem,
      MuFlexbox,
      MuFlexboxItem,
      MuFlatButton
    },
    methods: {
      goToRoutersPage(type) {
        this.$router.push({ name: 'routes', params: { company_id: '2131', type: type }})
      }
    }
  }
</script>
