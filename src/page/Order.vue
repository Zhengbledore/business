<template>
  <div class="box-order-page">
    <div class="box-order-wrapper">
      <div class="box-order-step1">
        <div class="box-order-id">
          订单号:  19375753331
        </div>
        <mu-divider/>
        <div class="box-order-tip">
          <i class="material-icons" style="display: inline; color: #f44336;">bookmark_border</i>
          <p style="display: inline; font-size: 18px;">此订单已完成！</p>
        </div>
      </div>
      <div class="box-order-step2 box-position">
        <div class="box-contacts">
          <div class="box-contacts-name">
            <i class="material-icons" style="display: inline; color: #f44336;">face</i>
            真滑稽
          </div>
          <div class="box-contacts-phone">
            <i class="material-icons" style="display: inline; color: #f44336;">stay_current_portrait</i>
            188****898
          </div>
        </div>
        <div style="clear: both"></div>
        <div class="box-contacts-address">广东省深圳市福田区xx路圈圈号123</div>
      </div>
      <div class="box-order-step3 box-position">
        <div class="box-order-id box-position-flex" style="height: 40px;">
          <i class="material-icons" style="display: inline; color: #f44336;">business</i>
          <p style="display: inline;">布莱克工厂</p>
        </div>
        <div class="box-contacts">
          <div class="box-contacts-name">
            <i class="material-icons" style="display: inline; color: #f44336;">face</i>
            真滑稽
          </div>
          <div class="box-contacts-phone">
            <i class="material-icons" style="display: inline; color: #f44336;">stay_current_portrait</i>
            188****898
          </div>
        </div>
        <div style="clear: both"></div>
        <div class="box-contacts-address">广东省深圳市福田区xx路圈圈号123</div>
        <mu-divider/>
        <div class="box-order-tip" style="height:88px;display: -webkit-box;">
          <div class="box-order-info">
            <p class="box-text" style="">乐高 (LEGO) LEGO Classic 乐高经典创意系列 乐高经典创意小号积木盒 10692 积木 立体拼插 玩具</p>
            <p style="">15立方 30公斤</p>
            <p class="box-order-money">$1234.00</p>
          </div>
        </div>
      </div>
      <div class="box-order-step4 box-position">
        <div>
          <span class="box-invoice-left">支付方式</span>
          <span class="box-invoice-right">在线支付</span>
        </div>
        <div style="clear: both;"></div>
        <div>
          <div>配送信息</div>
          <div>
            <p>配送日期：工作日、双休日与假日均可送货</p>
            <p>配送注意：需提前与物流仓库约定何时配送(字数限制)</p>
          </div>
        </div>
      </div>
      <div class="box-order-step5 box-position">
        <div>
          <span class="box-invoice-left">运费</span>
          <span class="box-invoice-right box-order-money">$1234.00</span>
        </div>
        <div style="clear: both;"></div>
        <div>
          <span class="box-invoice-left">货物总价</span>
          <span class="box-invoice-right box-order-money">$6666.00</span>
        </div>
        <div style="clear: both;"></div>
        <div>
          <span class="box-invoice-left">保险费(货物总价的5%)</span>
          <span class="box-invoice-right box-order-money">$333.00</span>
        </div>
        <div style="clear: both;"></div>
        <mu-divider/>
        <div style="float: right;text-align: right;">
          <div style="font-size: 15px;">实付款:<span style="font-size: 20px;color: #f15353;">¥128.00</span></div>
          <p>下单时间:2016-05-24 14:22:27</p>
        </div>
        <div style="clear: both;"></div>
      </div>
      <div class="box-order-step6 box-position">
        <mu-flexbox>
          <mu-flexbox-item class="box-flex" v-for="(item, index) in toBeConfirmEvents" v-if="toBeConfirmShow">
            <mu-flat-button
              :label="item.label"
              class="box-flat-button"
              labelPosition="before"
              :color="item.color"
              @click="orderEvent(item.value, 'Operate')"
            />
          </mu-flexbox-item>
          <mu-flexbox-item class="box-flex" v-for="(item, index) in confirmEvents" v-if="confirmShow">
            <mu-flat-button
              :label="item.label"
              class="box-flat-button"
              labelPosition="before"
              :color="item.color"
              @click="orderEvent(item.value)"
            />
          </mu-flexbox-item>
        </mu-flexbox>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
  p {
    margin: 0;
    padding: 0;
  }

  .box-order-page {
    height: 100%;
    width: 100%;
    background-color: #f0f2f5;
    margin-bottom: 56px;
  }

  .box-order-wrapper {
    width: 100%;
    height: 100%;
  }

  .box-order-id {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 18px;
  }

  .box-order-tip {
    padding-top: 10px;
    padding-bottom: 10px;
    height: 60px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
  }

  .box-position {
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #FFFFFF;
  }

  .box-position-flex {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
  }

  .box-order-step1 {
    padding-left: 10px;
    padding-right: 10px;
    background-color: #FFFFFF;
  }

  .box-contacts-name {
    float: left;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
  }

  .box-contacts-phone {
    float: right;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
  }

  .box-contacts-address {
    font-size: 13px;
    color: #848689;
    line-height: 17px;
  }

  .box-order-info {
  }

  .box-order-money {
    color: #f15353;
  }

  .box-text {
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

  .box-invoice-left {
    float: left;
  }

  .box-invoice-right {
    float: right;
  }

  .box-flex {
    height: 40px;
    background-color: #ffffff;
    text-align: center;
    line-height: 40px;
    /*border-bottom: 1px solid black;*/
    /*border-top: 1px solid black;*/
  }
</style>
<script>
  /* import muse-ui */
  import MuDivider from 'muse-ui/src/divider'
  import MuFlatButton from 'muse-ui/src/flatButton'
  import {flexbox as MuFlexbox, flexboxItem as MuFlexboxItem} from 'muse-ui/src/flexbox'

  /* import axios and url */
  import axios from 'axios'
  import * as urls from '../http/url'

  export default{
    data(){
      return {
        toBeConfirmEvents: [
          {label: '取消操作', value: 'cancel', color: '', sort: 'default'},
          {label: '更改订单', value: 'edit', color: '#f15353', sort: 'default'},
          {label: '确认提交', value: 'confirm', color: '#f15353', sort: 'default'},
        ],
        confirmEvents: [
          {label: '取消订单', value: 'cancel', color: '', sort: 'default'},
          {label: '更改订单', value: 'edit', color: '#f15353', sort: 'default'},
        ],
        sendEvents: [],
        completeEvents: [],
        toBeConfirmShow: false,
        confirmShow: false,
        sendShow: false,
        completeShow: false,
        axios,
        urls,
        order: {
          orderId: '',
          orderType: '',
          createTime: '',
          editTime: '',
          consignee: {
            name: '',
            company: '',
            phone: '',
            address: ''
          },
          sender: {
            company: '',
            phone: '',
            address: '',
            name: ''
          },
          goods: {
            weight: '',
            volume: '',
            totalPrice: '',
          },
          insurance: {
            percent: '0.05',
            price: ''
          },
          logistical: {
            type: '',
            unitPrice: '',
            totalPrice: '',
          }
        }
      }
    },
    components: {
      MuDivider,
      MuFlatButton,
      MuFlexbox,
      MuFlexboxItem
    },
    methods: {
      cancelOrder(type) {
        this.orderAction(type)
      },
      editOrder(type) {
        this.orderAction(type)
      },
      orderAction(type) {
        this.axios({
          url: urls[type + 'Order'],
          method: 'post',
          baseURL: urls.baseUrl,
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          params: {
            order_id: this.getOrder.orderId
          },
          timeout: 1500,
        }).then((response) => {

        }).catch((error) => {

        })
      },
      cancelOrderOperate(type) {
        this.orderOperateAction(type)
      },
      editOrderOperate(type) {
        this.orderOperateAction(type)
      },
      confirmOrderOperate(type) {
        this.orderOperateAction(type)
      },
      orderOperateAction(type) {
        this.axios({
          url: urls[type + 'OrderOperate'],
          method: 'post',
          baseURL: urls.baseUrl,
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          params: {
            order_id: this.getOrder.orderId
          },
          timeout: 1500,
        }).then((response) => {

        }).catch((error) => {

        })
      },
      demoOrder(type) {
        console.log(type)
      },
      orderEvent(action, type) {
        this[action + 'Order' + type](action)
      },
      getOrder(orderId) {
        this.axios({
          url: urls.getOrder,
          method: 'post',
          baseURL: urls.baseUrl,
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          params: {
            order_id: orderId
          },
          timeout: 1500,
        }).then((response) => {

        }).catch((error) => {

        })
      }
    },
    mounted() {
      if (this.orderId) {
        this.getOrder(this.orderId)
        this.toBeConfirmShow = false
        this.confirmShow = false
        this.sendShow = false
        this.completeShow = false
        if(this.getOrder.orderType){
          this[this.getOrder.orderType + 'Show'] = true
        }
      } else {
        /* error operation */
      }
    },
    computed: {
      orderId() {
        if (this.$route.params.order_id) {
          return this.$route.params.order_id
        }
      },
    }
  }
</script>
