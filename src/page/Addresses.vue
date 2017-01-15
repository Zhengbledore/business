<template>
  <div class="box-addresses-page">
    <div class="box-addresses-wrap">
      <div class="box-addresses-content">
        <div class="box-infinite-container" ref="scroller">
          <mu-list>
            <template v-for="(item, index) in list">
              <!--<mu-list-item :title="item"/>-->
              <div style="min-height: 80px">
                <div class="box-item">
                  <div class="box-product-info-box">
                    <div class="box-address-raido">
                      <mu-radio name="group" :nativeValue="item" v-model="value" class="demo-radio"/>
                    </div>
                    <div class="box-addresses-content">
                      <div class="box-product-name">
                        <span class="cye-lm-tag-consignee">{{mockConsigneeName}} {{mockConsigneePhone}}</span>
                      </div>
                      <div class="product-price-m">
                        <span class="cye-lm-tag">中派 书架 简约烤漆组合书柜 带门书橱 白色 两门中派 书架 简约烤漆烤漆组合书柜 带门书橱 白色 两门</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <mu-divider/>
            </template>
          </mu-list>
          <mu-infinite-scroll :scroller="scroller" :loading="loading" :loadingText="loadingText" @load="loadMore"/>
        </div>
      </div>
      <div class="box-address-button">
        <mu-flat-button
          label="确认"
          class="box-flat-button"
          labelPosition="before"
          @click="confirmTargetAddress"
        />
      </div>
    </div>
  </div>
</template>
<style>
  .box-addresses-page{
    padding-bottom: 56px;
  }

  .cye-lm-tag-consignee {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1.2em;
    vertical-align: baseline;
  }

  .box-infinite-container {
    width: 100%;
    height: 584px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
    position: relative;
    padding-bottom: 56px;
  }

  .cye-lm-tag {
    float: left;
    color: #666;
    font-size: 1em;
    line-height: 1.6em;
    padding-top: .6em;
  }

  .box-product-info-box {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

  .box-address-raido {
    padding: 0 5px 0 5px ;
  }

  .box-addresses-content {
    padding: 0 5px 10px 5px ;
  }

  .box-address-button{
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #f0f2f5;
    position: fixed;
    width: 100%;
    max-width: 640px;
    z-index: 6;
    bottom: 56px;
  }
</style>
<script>
  const list = []
  for (let i = 0; i < 10; i++) {
    list.push('item' + (i + 1))
  }

  /* import muse-ui */
  import {list as MuList, listItem as MuListItem} from 'muse-ui/src/list'
  import MuDivider from 'muse-ui/src/divider'
  import MuInfiniteScroll from 'muse-ui/src/infiniteScroll'
  import MuRadio from 'muse-ui/src/radio'
  import MuFlatButton from 'muse-ui/src/flatButton'

  /* import mixin */
  import routeAction from '../mixins/route-action'

  export default{
    data(){
      return {
        list,
        num: 10,
        loading: false,
        loadingText: '努力加载中',
        scroller: null,
        value: 'item1', // mock value
        mockConsigneeName: 'xxx',
        mockConsigneePhone: '188****9898',
      }
    },
    components: {
      MuList,
      MuListItem,
      MuDivider,
      MuInfiniteScroll,
      MuRadio,
      MuFlatButton,
    },
    mounted () {
      this.scroller = this.$refs.scroller,
      this.getTargetAddresses()
    },
    methods: {
      loadMore () {
        this.loading = true
        setTimeout(() => {
          for (let i = this.num; i < this.num + 10; i++) {
            this.list.push('item' + (i + 1))
          }
          this.num += 10
          this.loading = false
        }, 2000)
      },
      getTargetAddresses() {
        this.$store.dispatch('getTargetAddresses')
      },
      confirmTargetAddress() {
        if(this.value && this.wareId){
          /* save target address to order preparing data, and go to creating page */

        }
      }
    },
    computed: {
      wareId() {
         if(this.$route.params){
             return this.$route.params.ware_id
         }
      },
      addresses() {
        return this.$store.getters.addresses
      }
    },
    mixins: [routeAction],
  }
</script>
