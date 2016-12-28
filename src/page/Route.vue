<template>
  <div class="box-route-page">
    <div class="box-route-header-bar">
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
    <div class="box-route-content">
      <div style="width: 100%; height: 58px;"></div>
      <div class="box-route-img">
        <img :src="iphone" style="width: 320px; height: 320px;">
      </div>
      <mu-divider/>
      <div class="box-route-price">
        <div class="box-route-title">
          <span>Apple iPhone 6s (A1700) 16G 玫瑰金色 移动联通电信4G手机</span>
        </div>
        <div class="box-prod-price">
          <span class="yang-pic">$</span>
          <span class="yang-pic-price" id="jdPrice-copy">
              <span class="big-price">3799</span>
              <span class="small-price">.00</span>
            </span>
        </div>
        <div class="box-route-product-active">10.26-11.12购机享20天价保</div>
      </div>
      <div class="box-route-coupon-activity">
        <span class="box-part-note-msg">促销</span>
        <div class="box-promotion-content">
          <div class="promotion-item promotion-info">
            <span>可享受以下优惠</span>
          </div>
          <div class="promotion-item item-import">
            <span class="label-text">满减</span>
            <span class="promotion-item-text">同线路一次性满X公斤货物或者满X立方的货物,即可享受减免X元</span>
            <span class="promotion-left"><em class="icon-arrow icon-arrow-right"></em></span>
          </div>
        </div>
        <span class="promotion-left">
          <em class="icon-arrow icon-arrow-position arrow-fold"></em>
        </span>
      </div>
      <div class="box-route-product-spec-area">
        <div class="box-route-product-result">
          <span>已选</span>
          <span>河南省xx市xx站 100公斤重货</span>
        </div>
        <div class="box-route-product-type box-route-product-choose-ways">
          <span>类型</span>
          <span>
            <div class="box-route-product-choose">
                <mu-raised-button :label="item.label" @click="chooseGoodsType(item)" :style="item.style"
                                  v-for="(item, index) in goodsType"/>
            </div>
          </span>
        </div>
        <div class="box-route-product-quantity box-route-product-choose-ways">
          <span>数量</span>
          <div class="box-route-product-choose">
            <mu-raised-button label="点击选择货物重量和体积" @click="open('bottom')" :style="chooseWay"/>
          </div>
        </div>
        <div class="box-route-product-target box-route-product-choose-ways">
          <span>城市</span>
          <div class="box-route-product-choose">
            <mu-raised-button label="起始城市" @click="chooseCity('beginCity')" :style="chooseWay"/>
            <mu-raised-button label="目标城市" @click="chooseCity('targetCity')" :style="chooseWay"/>
          </div>
        </div>
        <div class="box-route-product-target box-route-product-choose-ways">
          <span>站点</span>
          <div class="box-route-product-choose">
            <mu-raised-button label="起始货运站" @click="open('top')" :style="chooseWay"/>
            <mu-raised-button label="终点货运站" @click="open('bottom')" :style="chooseWay"/>
          </div>
        </div>
      </div>
      <div class="box-route-company-customer-service"></div>
      <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
        <mu-app-bar title="货物情况">
          <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/>
        </mu-app-bar>
        <mu-content-block>
          <mu-text-field label="重量(kg)" labelFloat :errorText="weightErrorText"
                         @focus="clearErrorText($event, 'weight')" @blur="setGoodsInfo($event, 'weight')"
                         v-model="orderPreparingData.weight" ref="testWeight"/>
          <mu-text-field label="体积(立方)" :errorText="volumeErrorText" labelFloat
                         @focus="clearErrorText($event, 'volume')" @blur="setGoodsInfo($event, 'volume')"
                         v-model="orderPreparingData.volume"/>
          <div>
            <mu-raised-button label="保存" :style="chooseWay" @click="save('bottom', 'goods')"/>
          </div>
        </mu-content-block>
      </mu-popup>
      <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="cityPopup" @close="close('city')">
        <mu-app-bar title="城市">
          <mu-flat-button slot="right" label="关闭" color="white" @click="close('city')"/>
        </mu-app-bar>
        <mu-content-block>
          <mu-picker :slots="addressSlots" :visible-item-count="5" @change="addressChange" :values="address"/>
          <p>
            您选择的城市是： {{addressProvince}} {{addressCity}}
          </p>
          <div>
            <mu-raised-button label="保存" :style="chooseWay" @click="save('bottom', 'goods')"/>
          </div>
        </mu-content-block>
      </mu-popup>
      <mu-popup position="top" :overlay="false" popupClass="demo-popup-top" :open="topPopup">
        更新成功
      </mu-popup>
    </div>
  </div>
</template>
<style style="css">
  .box-route-page {
    background-color: #f0f2f5;
    height: 100%;
    width: 100%;
    margin-bottom: 156px;
    /*overflow: hidden;*/
  }

  .box-route-header-bar {
    background-color: #ffffff;
    position: fixed;
    width: 100%;
    z-index: 50;
  }

  .box-route-content {
    /*height: 300px;*/
    width: 100%;
    background-color: #f0f2f5;
  }

  .box-route-img {
    height: 320px;
    width: 100%;
    overflow: hidden;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    background-color: #ffffff;
  }

  .box-route-price {
    background-color: #ffffff;
    padding: 10px;
    /*border-top: 1px solid #7e848c;*/
  }

  .box-prod-price {
    font-size: 23px;
    font-family: 'Helvetica';
    color: #f23030;
    font-weight: bold;
    line-height: 23px;
    margin-top: 7px;
    margin-right: 6px;
  }

  .box-route-title {
    width: 100%;
    /*height: */

  }

  .box-route-product-active {
    font-size: 13px;
    color: #81838e;
    margin: 11px 10px 0 0;
    line-height: 17px;
    text-align: justify;
  }

  .box-route-coupon-activity {
    margin-top: 10px;
    margin-bottom: 10px;
    height: 93px;
    background-color: #ffffff;
    padding-left: 10px;
    padding-right: 10px;
  }

  .box-part-note-msg {
    display: inline-block;
    line-height: 15px;
    font-size: 13px;
    color: #81838e;
    width: 26px;
    white-space: normal;
    height: auto;
    position: absolute;
  }

  .box-promotion-content {
    margin: 0 35px 0 34px;
    position: absolute;
  }

  .promotion-item .promotion-info {
    font-size: 13px;
    line-height: 15px;
    color: #252525;
    vertical-align: top;
  }

  .box-route-product-spec-area {
    background-color: #ffffff;
    padding-left: 10px;
    padding-right: 10px;
  }

  .box-route-product-choose {
    display: inline;
    margin-left: 10px;
  }

  .box-route-product-choose-ways {
    margin-top: 10px;
  }

  .box-flex {
    height: 58px;
    background-color: #ffffff;
    text-align: center;
    line-height: 58px;
    /*border-bottom: 1px solid black;*/
    /*border-top: 1px solid black;*/
  }

  .demo-popup-top {
    width: 100%;
    opacity: .8;
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 375px;
  }

  .demo-popup-left {
    display: flex;
    width: 85%;
    max-width: 375px;
    height: 100%;
    align-items: center;
    padding: 24px;
  }

  .demo-popup-right {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 375px;
    align-items: center;
    padding: 24px;
  }

  .demo-popup-bottom {
    width: 100%;
    /*max-width: 375px;*/
  }
</style>
<script>

  /* demo address */
  const address = {
    '重庆': ['重庆'],
    '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
    '江苏': ['南京', '苏州', '无锡', '常州', '镇江', '南通', '泰州', '扬州', '盐城', '连云港', '徐州', '淮安', '宿迁'],
    '湖北': ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '随州', '恩施土家族苗族自治州', '仙桃', '天门', '潜江', '神农架林区'],
    '四川': ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'],
    '陕西': ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
  }

  const addressTarget = {
    '北京': ['北京'],
    '广东': ['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'],
    '上海': ['上海'],
    '天津': ['天津'],
    '重庆': ['重庆'],
    '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
    '江苏': ['南京', '苏州', '无锡', '常州', '镇江', '南通', '泰州', '扬州', '盐城', '连云港', '徐州', '淮安', '宿迁'],
  }

  const betterProvince = [
    {name: '北京', value: '001'},
    {name: '广东', value: '002'},
    {name: '上海', value: '003'},
    {name: '天津', value: '004'},
    {name: '辽宁', value: '005'}
  ]

  const betterCity = [
    {name: '广州', value: '0021'},
    {name: '深圳', value: '0022'},
    {name: '珠海', value: '0023'},
    {name: '韶关', value: '0024'},
    {name: '佛山', value: '0025'}
  ]

  const addressProvince = {}

  import {flexbox as MuFlexbox, flexboxItem as MuFlexboxItem} from 'muse-ui/src/flexbox'
  import MuDivider from 'muse-ui/src/divider'
  import MuRaisedButton from 'muse-ui/src/raisedButton'
  import MuFlatButton from 'muse-ui/src/flatButton'
  import MuPopup from 'muse-ui/src/popup'
  import MuAppBar from 'muse-ui/src/appBar'
  import MuContentBlock from 'muse-ui/src/contentBlock'
  import MuTextField from 'muse-ui/src/textField'
  import MuPicker from 'muse-ui/src/picker'
  //  import MuSubHeader from 'muse-ui/src/subHeader'
  //  import MuContentBlock from 'muse-ui/src/contentBlock'

  /* import image from local */
  import iphone from '../assets/images/iphone.jpg'

  export default{
    data(){
      return {
        flatButtons: [
          {label: '商品', value: 'goods'},
          {label: '详情', value: 'detail'},
          {label: '评价', value: 'comment'},
        ],
        iphone,
        chooseWay: [
          {marginRight: '10px'},
        ],
        goodsType: [
          {label: '轻货', style: {color: '', marginRight: '10px'}, value: 'light'},
          {label: '重货', style: {color: '', marginRight: '10px'}, value: 'weight'},
        ],
        /* city */
        addressSlots: [
          {
            width: '100%',
            textAlign: 'right',
            values: []
          }, {
            width: '100%',
            textAlign: 'left',
            values: ['北京']
          }
        ],
        address: ['北京', '北京'],
        addressProvince: '北京',
        addressCity: '北京',
        currentCityType: '',
        weightErrorText: '',
        volumeErrorText: '',
        bottomPopup: false,
        cityPopup: false,
        topPopup: false,
      }
    },
    components: {
      MuFlexbox,
      MuFlexboxItem,
      MuFlatButton,
      MuDivider,
      MuRaisedButton,
      MuPopup,
      MuAppBar,
      MuContentBlock,
      MuTextField,
      MuPicker
//      MuSubHeader,
//      MuContentBlock
    },
    methods: {
      goToRoutersPage(type) {
        this.$router.push({name: 'routes', params: {company_id: '2131', type: type}})
      },

      /* control popup */
      open (position) {
        this[position + 'Popup'] = true
      },
      close (position) {
        this[position + 'Popup'] = false
      },
      save (position, type) {
        if (this.checkGoodsInfoEmptyAndFormat()) {
          this[position + 'Popup'] = false
        }
      },

      /* set goods info */
      setGoodsInfo(event, type) {
        let value = Number.parseFloat(event.target.value)
        if (!value) {
          this[type + 'ErrorText'] = 'is Empty'
          return
        }
        if (this.isNumber(value)) {
          this.setOrderPreparing(type, value)
        } else {
          this[type + 'ErrorText'] = 'format is wrong'
        }
      },
      clearErrorText(event, type) {
        this[type + 'ErrorText'] = ''
      },
      checkGoodsInfoEmptyAndFormat() {
        if (!this.orderPreparingData.weight && !this.orderPreparingData.volume) {
          this.weightErrorText = '至少填写其中一个'
          return false
        }
        return true
      },
      isNumber(value) {
        if (value) {
          /* trim,  */
          return toString.call(value) === '[object Number]' && value === value
        }

      },

      /* init preparing data */
      checkCurrentRouteIsSameAsBeforeOrNot(value) {
        if (value.routeId === this.orderPreparingData.routeId
          &&
          value.companyId === this.orderPreparingData.companyId) {
          return true
        }
        return false
      },

      /* about store vuex */
      setOrderPreparing(name, value) {
        this.$store.dispatch('setOrderPreparingData',
          {name: name, value: value}
        )
      },

      /* choose goods type */
      chooseGoodsType(type) {
        this.goodsType.forEach((item) => {
          item.style.color = ''
        })
        type.style.color = '#f23030'
        this.setOrderPreparing('goodsType', type.value)
      },

      /* choose city */
      addressChange (value, index) {
        switch (index) {
          case 0:
            this.addressProvince = value
            const arr = address[value]
            this.addressSlots[1].values = arr
            this.addressCity = arr[0]
            break
          case 1:
            this.addressCity = value
            break
        }
        this.address = [this.addressProvince, this.addressCity]
      },
      chooseCity(type) {
        /* control popup and choose which address data to be used */
//          console.log(this.addressSlots[0])
        if (type === 'beginCity') {
          this.addressSlots[0].values = Object.keys(address)
        } else if (type === 'targetCity') {
          this.addressSlots[0].values = Object.keys(addressTarget)
        }
        this.currentCityType = type
        this.open('city')
      },
      checkCityFormatAndIsEmptyOrNot(){

      },
      closeCityPicker() {
        if (!this.checkCityFormatAndIsEmptyOrNot()) return
        let city = {
          label: this.address[0]+ ' ' + this.address[1],
          value: {
            province: this.address[0],
            city: this.address[1]
          }
        }
        if(this.currentCityType === 'beginCity') {
          this.setOrderPreparing()
        }else if(this.currentCityType === 'targetCity') {

        }
        this.close('city')
      }
    },
    mounted() {
      if (!this.checkCurrentRouteIsSameAsBeforeOrNot(this.currentRouteAndCompanyId)) {
        /* if not same as before, clear and set routeId and companyId */
        this.$store.dispatch('clearOrderPreparingData')
        this.$store.dispatch('setOrderPreparingData', [
          {name: 'routeId', value: this.currentRouteAndCompanyId.routeId},
          {name: 'companyId', value: this.currentRouteAndCompanyId.companyId}
        ])
      }
    },
    watch: {
      topPopup (val) {
        if (val) {
          setTimeout(() => {
            this.topPopup = false
          }, 2000)
        }
      }
    },
    computed: {
      currentRouteAndCompanyId() {
        return {
          routeId: this.$route.params.route_id,
          companyId: this.$route.params.company_id
        }
      },
      orderPreparingData() {
        return this.$store.getters.orderPreparingData
      }
    }
  }
</script>
