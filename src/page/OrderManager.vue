<template>
  <div class="box-orders-page">
    <div class="box-orders-wrapper">
      <div class="box-orders-header">
        <mu-drop-down-menu :value="orderTypes" @change="handleChange">
          <mu-menu-item value="all" title="全部"/>
          <mu-menu-item value="toBeConfirm" title="待确认"/>
          <mu-menu-item value="confirm" title="待发货"/>
          <mu-menu-item value="send" title="已发货"/>
        </mu-drop-down-menu>
      </div>
      <div class="box-orders-content">
        <div class="box-infinite-container" ref="scroller">
          <mu-list>
            <template v-for="item in list">
              <!--<mu-list-item :title="item"/>-->
              <div style="min-height: 120px">
                <router-link :to="{ name: 'getOrder', params: { order_id: 123 }}">
                  <div class="box-item">
                    <div class="box-item-summary">
                          <span class="" style="display: table; width: 100%;">
                            <span class="box-order-serial">订单编号：<em>19375753331</em></span>
                            <span class="box-order-status">完成</span>
                          </span>
                      <span class="box-order-time">下单时间：<em>2016-5-24 14:22:27</em></span>
                    </div>
                    <mu-divider/>
                    <div class="box-item-detail">
                      <div class="box-item-detail-image"></div>
                      <div class="box-item-detail-info">
                        <strong>{{ orderTypes }}【京东超市】乐高 (LEGO) LEGO Classic 经典创意系列 经典创意小号积木盒 10692 积木 立体拼插 玩具</strong>
                        <div class="box-item-detail-goods"><strong>10公斤 20立方</strong></div>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
              <mu-divider/>
            </template>
          </mu-list>
          <mu-infinite-scroll :scroller="scroller" :loading="isLoading" :loadingText="loadingText" @load="loadMore"/>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
  b, em, i, strong {
    font-style: normal;
    font-weight: 400;
  }

  .box-orders-page {
    height: 100%;
    width: 100%;
    background-color: #f0f2f5;
  }

  .box-orders-wrapper {

  }

  .box-orders-header {
    background-color: #ffffff;
  }

  .box-orders-content {
    margin-top: 10px;
    background-color: #ffffff;
  }

  .box-infinite-container {
    width: 100%;
    height: 584px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
    position: relative;
    /*top: 40px;*/
    padding-bottom: 56px;
  }

  .box-item {
    height: 120px;
    width: 100%;
    color: #000;
    padding: 0 10px 0 10px;
    /*display: -webkit-flex;*/
    /*display: flex;*/
    /*-webkit-align-items: center;*/
    /*align-items: center;*/
    /*-webkit-justify-content: center;*/
    /*justify-content: center;*/
    /*padding-top: 10px;*/
  }

  .box-item-detail {
    padding-top: .75rem;
  }

  .box-order-serial {
    position: relative;
    float: left;
  }

  .box-order-status {
    position: relative;
    float: right;
    display: table-cell;
    text-align: right;
    color: #f23030;
  }

  .box-item-detail-info {

  }

  .box-item-detail-info strong {
    display: block;
    margin: 0 0 .9rem;
    overflow: hidden;
    height: .9rem;
    line-height: .9rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #232326;
  }
</style>
<script>
  /* import muse ui */
  import MuDropDownMenu from 'muse-ui/src/dropDownMenu'
  import {menuItem as MuMenuItem} from 'muse-ui/src/menu'
  import {list as MuList, listItem as MuListItem} from 'muse-ui/src/list'
  import MuDivider from 'muse-ui/src/divider'
  import MuInfiniteScroll from 'muse-ui/src/infiniteScroll'
  export default{
    data(){
      const list = []
      for (let i = 0; i < 10; i++) {
        list.push('item' + (i + 1))
      }
      return {
        list,
        orderTypes: 'all',
        isLoading: false,
        loadingText: '努力加载中',
        allShow: false,
        toBeConfirmShow: false,
        confirmShow: false,
        sendShow: false,
        scroller: null,
        num: 10,
      }
    },
    components: {
      MuDropDownMenu,
      MuMenuItem,
      MuList,
      MuListItem,
      MuDivider,
      MuInfiniteScroll,
    },
    mounted() {
      this.scroller = this.$refs.scroller
      this.setOrderTypes()
      this.getOrders(this.orderTypes)
    },
    methods: {
      setOrderTypes(){
        /* get data from local */
        let type = this.$route.params.type
        if (type) {
          this.orderTypes = type
        } else {
          this.orderTypes = 'all'
        }
      },
      getOrders(type) {
        this.isLoading = true
        this.$store.dispatch('getOrders', {type: type})
        this.isLoading = false
      },
      getMoreOrders(type) {
        this.isLoading = true
        this.$store.dispatch('getMoreOrders', {type: type})
        this.isLoading = false
      },
      handleChange (value) {
        this.orderTypes = value
        this.getOrders(value)
      },
      loadMore () {
        this.isLoading = true
        setTimeout(() => {
          for (let i = this.num; i < this.num + 10; i++) {
            this.list.push('item' + (i + 1))
          }
          this.num += 10
          this.isLoading = false
        }, 2000)
      },
    },
    computed: {
      orders() {
        return this.$store.getters[this.$route.params.type + 'Orders']
      }
    },

  }
</script>
