<template>
  <div v-if="show">dialog</div>
  <div class="box-order-create-page" v-else>
    <div class="box-order-create-wrapper">
      <div class="box-step">
        <mu-card>
          <mu-card-header title="收货地址" subTitle="布莱克仓库">
            <mu-avatar icon="room" backgroundColor="red500" slot="avatar"/>
          </mu-card-header>
          <mu-divider/>
          <mu-list>
            <mu-list-item title="驴得水 188****9898" describeText="广东揭阳市普宁市城区广东省普宁市环城北路普宁广场对面光德楼前一栋932科技"
                          @click="goToNextPage('chooseAddress', orderPreparingData.wareId)">
              <!--<mu-avatar icon="room" backgroundColor="red500" slot="leftAvatar"/>-->
              <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
          </mu-list>
        </mu-card>
      </div>
      <div class="box-position">
        <mu-card>
          <mu-card-header title="承运单位" subTitle="布莱克物流公司">
            <mu-avatar icon="local_shipping" backgroundColor="red500" slot="avatar"/>
          </mu-card-header>
          <mu-divider/>
          <mu-list>
            <mu-list-item title="线路负责人 188****9898" describeText="广东至黑龙江: 揭阳市榕捷站点至xx市xx站点">
            </mu-list-item>
          </mu-list>
        </mu-card>
      </div>
      <div class="box-position">
        <mu-card>
          <mu-card-header title="配送方式" :subTitle="distributeSubTitle">
            <mu-avatar icon="local_shipping" backgroundColor="red500" slot="avatar"/>
            <!-- 厂付自提/厂付送货上门/到付自提/到付送货上门 -->
          </mu-card-header>
          <mu-divider/>
          <mu-list>
            <mu-list-item title="目标站点联系人 188****9898" describeText="注意: 逾期xx天未提货将收取一定费用, 请谅解"
                          @click="openPopup('distribute')">
              <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
          </mu-list>
        </mu-card>
      </div>
      <div class="box-position">
        <mu-card>
          <mu-card-header title="货物信息" subTitle="高分子聚合物塑料餐具">
            <mu-avatar icon="shopping_cart" backgroundColor="red500" slot="avatar"/>
          </mu-card-header>
          <mu-divider/>
          <mu-list>
            <mu-list-item title="货物: 轻货, 体积: 15.65立方, 货物总价: ￥13000.00"
                          describeText="注意: 货物情况将以承运方收到实物为准, 如有出入, 将会尽快与出货方联系, 请谅解"
                          @click="openPopup('goods')">
              <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
          </mu-list>
        </mu-card>
      </div>
      <div class="box-position">
        <mu-card>
          <mu-card-header title="特殊项" subTitle="注意事项">
            <mu-avatar icon="warning" backgroundColor="red500" slot="avatar"/>
          </mu-card-header>
          <mu-divider/>
          <mu-list>
            <mu-list-item title="" describeText="注意: 送货上门前1到2天, 请与仓库联系, 安排送货时间. 货物请轻搬运"
                          @click="openPopup('attention')">
              <mu-icon value="keyboard_arrow_right" slot="right"/>
            </mu-list-item>
          </mu-list>
        </mu-card>
      </div>
      <div class="box-position">
        <mu-card>
          <mu-card-header title="物流保险" subTitle="购买保险">
            <mu-avatar icon="shopping_cart" backgroundColor="red500" slot="avatar"/>
          </mu-card-header>
          <mu-divider/>
          <mu-list>
            <mu-list-item title="保险费率: 货物总价的5%" describeText="注意: 保险赔偿信息xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">
            </mu-list-item>
          </mu-list>
        </mu-card>
      </div>
      <div class="box-position box-button-wrapper">
        <div class="box-price-item">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <mu-raised-button label="确认提交" fullWidth backgroundColor="red500" @click="confirmCreateOrder"/>
        </div>
      </div>
    </div>
    <div class="box-order-create-popup">
      <mu-popup position="bottom" popupClass="box-popup-bottom" :open="attentionPopup" @close="closePopup('attention')">
        <mu-app-bar title="注意事项">
          <mu-flat-button slot="right" label="关闭" color="white" @click="closePopup('attention')"/>
        </mu-app-bar>
        <mu-content-block>
          <mu-text-field hintText="不允许超过100个字符" :errorText="multiLineInputErrorText"
                         @textOverflow="handleMultiLineOverflow" multiLine :rows="3" :rowsMax="6" :maxLength="100"
                         labelFloat
                         @focus="clearErrorText($event, 'volume')" @blur="checkFormatOrEmpty($event, 'attention')"
                         v-model="orderPreparingData.volume"/>
          <div>
            <mu-raised-button label="保存" @click="save('bottom', 'goods')"/>
          </div>
        </mu-content-block>
      </mu-popup>
      <mu-popup position="bottom" popupClass="box-popup-bottom" :open="goodsPopup" @close="closePopup('goods')">
        <mu-app-bar title="货物情况">
          <mu-flat-button slot="right" label="关闭" color="white" @click="closePopup('goods')"/>
        </mu-app-bar>
        <mu-content-block>
          <mu-select-field v-model="goodsType" label="货物类型" @change="chooseGoodsType">
            <mu-menu-item :value="item.value" :title="item.name" v-for="(item, index) in goodsTypes"/>
          </mu-select-field>
          <mu-text-field label="重量(kg)" labelFloat :errorText="weightErrorText"
                         @focus="clearErrorText($event, 'weight')"
                         v-model="orderPreparingData.weight" ref="testWeight"/>
          <mu-text-field label="体积(立方)" :errorText="volumeErrorText" labelFloat
                         @focus="clearErrorText($event, 'volume')"
                         v-model="orderPreparingData.volume"/>
          <mu-text-field label="货物总价" :errorText="volumeErrorText" labelFloat
                         @focus="clearErrorText($event, 'volume')"
                         v-model="orderPreparingData.volume"/>
          <div>
            <mu-raised-button label="保存" @click="save('bottom', 'goods')"/>
          </div>
        </mu-content-block>
      </mu-popup>
      <mu-popup position="bottom" popupClass="box-popup-bottom" :open="distributePopup"
                @close="closePopup('distribute')">
        <mu-app-bar title="配送方式">
          <mu-flat-button slot="right" label="关闭" color="white" @click="closePopup('distribute')"/>
        </mu-app-bar>
        <mu-content-block>
          <mu-select-field v-model="distributeWay" label="配送方式" @change="chooseDistribute">
            <mu-menu-item :value="item.value" :title="item.name" v-for="(item, index) in distributeWayList"/>
          </mu-select-field>
          <div>
            <mu-raised-button label="保存" @click="save('bottom', 'goods')"/>
          </div>
        </mu-content-block>
      </mu-popup>
    </div>
  </div>
</template>
<style>
  .box-order-create-page {
    height: 100%;
    width: 100%;
    background-color: #f0f2f5;
    margin-bottom: 56px;
  }

  .box-order-create-wrapper {

  }

  .box-step {
    background-color: #ffffff;
  }

  .box-position {
    margin-top: 10px;
    /*padding-left: 10px;*/
    /*padding-right: 10px;*/
    /*padding-top: 10px;*/
    /*padding-bottom: 10px;*/
    background-color: #FFFFFF;
    width: 100%;
  }

  .box-button-wrapper {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .box-popup-top {
    width: 100%;
    opacity: .8;
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 375px;
  }

  .box-popup-left {
    display: flex;
    width: 85%;
    max-width: 375px;
    height: 100%;
    align-items: center;
    padding: 24px;
  }

  .box-popup-right {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 375px;
    align-items: center;
    padding: 24px;
  }

  .box-popup-bottom {
    width: 100%;
    /*max-width: 375px;*/
  }
</style>
<script>
  /* import muse-ui */
  import {list as MuList, listItem as MuListItem} from 'muse-ui/src/list'
  import MuDivider from 'muse-ui/src/divider'
  import MuAvatar from 'muse-ui/src/avatar'
  import MuIcon from 'muse-ui/src/icon'
  import {card as MuCard, cardTitle as MuCardTitle, cardHeader as MuCardHeader} from 'muse-ui/src/card'
  import MuRaisedButton from 'muse-ui/src/raisedButton'
  import MuFlatButton from 'muse-ui/src/flatButton'
  import MuPopup from 'muse-ui/src/popup'
  import MuAppBar from 'muse-ui/src/appBar'
  import MuContentBlock from 'muse-ui/src/contentBlock'
  import MuTextField from 'muse-ui/src/textField'
  import MuSelectField from 'muse-ui/src/selectField'
  import {menuItem as MuMenuItem} from 'muse-ui/src/menu'


  /* import mixin */
  import routeAction from '../mixins/route-action'

  export default{
    data(){
      return {
        show: false,
        /* control popup */
        attentionPopup: false,
        goodsPopup: false,
        distributePopup: false,


        /* popup content */
        weightErrorText: 'weight error',
        volumeErrorText: 'volume error',
        multiLineInputErrorText: '',
        distributeWay: 1,
        distributeWayList: [
          {value: 1, name: '厂付自提'},
          {value: 2, name: '厂付送货上门'},
          {value: 3, name: '到付自提'},
          {value: 4, name: '到付送货上门'},
        ],
        distributeSubTitle: '',
        goodsTypes: [
          {value: 1, name: '轻货'},
          {value: 2, name: '重货'},
        ],
        goodsType: 1,
      }
    },
    mounted() {
      this.initOrderCreate()
    },
    components: {
      MuList,
      MuListItem,
      MuDivider,
      MuAvatar,
      MuIcon,
      MuCard,
      MuCardTitle,
      MuCardHeader,
      MuRaisedButton,
      MuFlatButton,
      MuPopup,
      MuAppBar,
      MuContentBlock,
      MuTextField,
      MuSelectField,
      MuMenuItem,
    },
    methods: {
      initOrderCreate() {
        /* route -> get ware id -> save into sessionStorage -> bring ware id go to this page ->
         * check ware id is invalid and belong this user or not
         * get ware content
         * */
        if (!this.wareId) return
        if (this.wareId != this.orderPreparingData.wareId) return


        /* get address, only address have another page */
        this.getOrderTargetAddress()

        /* get route and logistical */


        /* get distribute, white */

        /* get goods info */

        /* get all data and ok, will save into storage */
      },
      getOrderPreparingData() {

      },
      confirmCreateOrder() {

      },
      checkOrderEmptyOrFault(params) {

      },
      getOrderTargetAddress() {
        if (this.orderPreparingData.targetAddress.id) return
        this.$store.dispatch('getOrderTargetAddress')
      },
      setOrderAttention() {

      },
      getOrderInsurance() {

      },
      getOrderDistribute(companyId, routeId) {
        if (this.orderPreparingData.distribute.type) {
          this.$store.dispatch('getOrderDistribute', {
            companyId: companyId,
            routeId: routeId
          })
        }
      },
      getLogistical(companyId, routeId) {
        this.$store.dispatch('getOrderLogistical', {
          companyId: companyId,
          routeId: routeId,
        })

        /* distribute way, company and route info */
      },

      /* control  popup */
      closePopup(position) {
        this[position + 'Popup'] = false
        this.clearPopupContent(position)
      },
      openPopup (position) {
        this[position + 'Popup'] = true
      },
      savePopup (position, type) {
        this[position + 'Popup'] = false
      },

      /* control popup content */
      handleMultiLineOverflow (isOverflow) {
        this.multiLineInputErrorText = isOverflow ? '超过啦！！！！' : ''
      },
      clearErrorText(event, type) {
        this[type + 'ErrorText'] = ''
      },
      checkFormatOrEmpty(event, type) {

      },
      clearPopupContent(position) {
        switch (position) {
          case 'attention':
            this.orderPreparingData.volume = ''
            break
          case 'goods':

            break
          case 'distribute':

            break
        }
      },
      chooseDistribute(value) {
        this.distributeWayList.forEach((item) => {
          if (item.value === value) {
            this.distributeSubTitle = item.name
          }
        })
      },
      chooseGoodsType(value) {

      }
    },
    computed: {
      wardId() {
        return this.$route.params.ware_id
      },
      orderPreparingData() {
        /* these data is get from local store */
        return this.$store.getters.orderPreparingData
      },
      dialog () {
        return this.$store.getters.dialog
      }
    },
    watch: {
//      dialog(newValue, oldValue) {
//        if(newValue.show !== oldValue.show){
//
//        }
//      }
    },
    mixins: [routeAction],
  }
</script>
