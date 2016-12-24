<template>
  <div>
    <div class="box-flexbox">
      <mu-flexbox>
        <mu-flexbox-item class="box-flex" v-for="(item, index) in flatButtons">
          <mu-flat-button
            :label="item.label"
            class="box-flat-button"
            labelPosition="before"
            :icon="item.icon"
            :color="item.color"
            @click="sortSearchResult(item)"
          />
        </mu-flexbox-item>
        <!--<mu-flexbox-item class="box-flex">-->
        <!--<mu-flat-button label="成交" class="box-flat-button" labelPosition="before" icon="arrow_drop_down"/>-->
        <!--</mu-flexbox-item>-->
        <!--<mu-flexbox-item class="box-flex">-->
        <!--<mu-flat-button label="价格" class="box-flat-button" labelPosition="before" icon="arrow_drop_down"/>-->
        <!--</mu-flexbox-item>-->
        <!--<mu-flexbox-item class="box-flex">-->
        <!--<mu-flat-button label="好评" class="box-flat-button" labelPosition="before" icon="arrow_drop_down"/>-->
        <!--</mu-flexbox-item>-->
      </mu-flexbox>
    </div>
    <div class="box-infinite-container" ref="scroller">
      <mu-list>
        <template v-for="item in list">
          <!--<mu-list-item :title="item"/>-->
          <div style="min-height: 120px">
            <router-link :to="{ name: 'route', params: { company_id: 123, route_id: 333 }}">
              <div class="box-item">
                <div class="box-product-img">
                  <img :src="water" style="opacity: 1; transition: opacity 0.5s ease-in;">
                </div>
                <div class="box-product-info-box">
                  <div class="box-product-name">
                    <span class="cye-lm-tag">中派 书架 简约烤漆组合书柜 带门书橱 白色 两门</span>
                  </div>
                  <div class="box-gray-icon"></div>
                  <div class="product-price-m">
                    <em>¥<span class="big-price cye-lm-tag">1979</span><span
                      class="small-price cye-lm-tag">.00</span></em>
                  </div>
                  <div class="gray-pro-info">
                    <span class="cye-lm-tag">221条评价</span>
                    <span class="cye-lm-tag">好评100%</span>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <mu-divider/>
        </template>
      </mu-list>
      <mu-infinite-scroll :scroller="scroller" :loading="loading" :loadingText="loadingText" @load="loadMore"/>
    </div>
  </div>
</template>
<style lang="css" scoped>
  .box-infinite-container {
    width: 100%;
    height: 584px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
    position: relative;
    top: 40px;
    padding-bottom: 56px;
  }

  .box-flex {
    height: 40px;
    background-color: #f0f2f5;
    text-align: center;
    line-height: 40px;
    /*border-bottom: 1px solid black;*/
    /*border-top: 1px solid black;*/
  }

  .box-flexbox {
    height: 40px;
    width: 100%;
    position: fixed;
    background-color: #ffffff;
    z-index: 1000;
    /*border-bottom: 1px solid black;*/
    /*border-top: 1px solid black;*/
  }

  .mu-list {
    padding: 0;
  }

  .box-item {
    height: 120px;
    width: 100%;
    color: #000;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    padding-top: 10px;
  }

  .box-product-img {
    position: relative;
    height: 100px;
    width: 100px;
    margin-left: 10px;
    overflow: hidden;
    text-align: center;
  }

  img {
    display: inline-block;
    width: auto;
    max-width: 100px;
    height: 100px;
  }

  .box-product-info-box {
    -webkit-box-flex: 1;
    box-flex: 1;
    margin-left: 10px;
    position: relative;
    height: 100%;
    margin-top: -2px;
    padding-right: 10px;
  }

  .box-product-name {
    color: #232326;
    font-size: 15px;
    line-height: 20px;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    display: box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }

  .box-gray-icon {
    height: 25px;
    margin: 0px;
    overflow: hidden;
    line-height: 25px;
  }

  em {
    font-size: 16px;
    color: #f23030;
    margin-right: 3px;
    display: block;
    height: 20px;
    overflow: hidden;
    float: left;
  }

  .product-price-m {
    font-size: 0px;
    height: 20px;
    overflow: hidden;
    width: 100%;
    line-height: 20px;
    margin-right: 10px;
  }

  .big-price {
    font-size: 20px;
  }

  .gray-pro-info {
    color: #848689;
    font-size: 12px;
    display: -webkit-box;
    display: box;
    margin-top: 4px;
    overflow: hidden;
    height: 15px;
    line-height: 16px;
    -webkit-box-align: center;
    box-align: center;
  }
</style>
<script>
  import MuFlatButton from 'muse-ui/src/flatButton'
  import {list as MuList, listItem as MuListItem} from 'muse-ui/src/list'
  import MuDivider from 'muse-ui/src/divider'
  import MuInfiniteScroll from 'muse-ui/src/infiniteScroll'
  import {flexbox as MuFlexbox, flexboxItem as MuFlexboxItem} from 'muse-ui/src/flexbox'
  import water from '../assets/images/water-plant.97ca350.jpg'
  export default{
    data(){
      const list = []
      for (let i = 0; i < 10; i++) {
        list.push('item' + (i + 1))
      }
      return {
        list,
        num: 10,
        loading: false,
        loadingText: '努力加载中',
        scroller: null,
        upIcon: 'arrow_drop_up',
        downIcon: 'arrow_drop_down',
        upDownIcon: 'import_export',
        flatButtons: [
          {label: '推荐', value: 'recommend', color: '#f15353', sort: 'default', icon: ''},
          {label: '销量', value: 'complete', color: '', sort: 'default', icon: ''},
          {label: '新品', value: 'new', color: '', sort: 'default', icon: ''},
          {label: '价格', value: 'price', color: '', sort: 'default', icon: 'import_export'},
        ],
        water
      }
    },
    computed: {
      searchTextFieldValue() {
        return this.$store.getters.searchTextFieldValue
      },
      iconMenuType () {
        return this.$store.getters.iconMenuType
      },
      iconMenuCurrentValue () {
        return this.$store.getters.iconMenuCurrentValue
      }
    },
    components: {
      MuFlatButton,
      MuList,
      MuDivider,
      MuListItem,
      MuInfiniteScroll,
      MuFlexbox,
      MuFlexboxItem
    },
    mounted () {
      this.scroller = this.$refs.scroller
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
      switchSortIcon(item) {
        item.color = '#f15353'
        if (item.value === 'price') {
          switch (item.sort) {
            case 'default':
              item.sort = 'desc'
              item.icon = this.downIcon
              break
            case 'asc':
              item.sort = 'desc'
              item.icon = this.downIcon
              break
            case 'desc':
              item.sort = 'asc'
              item.icon = this.upIcon
              break
          }
        }
      },
      sortSearchResult (item) {
        let searchTextFieldValue = this.searchTextFieldValue
        let searchRequestSort = []
        if (this.flatButtons.indexOf(item) > -1) {
          this.flatButtons.map((flatButton) => {
            if (item === flatButton) {
              this.switchSortIcon(item)
            } else {
              flatButton.color = ''
            }
            searchRequestSort.push(flatButton)
          })
        } else {
          return
        }
      }
    },
    watch: {
      iconMenuCurrentValue(newValue) {
        if(this.iconMenuType === 'routes') {
          console.log(newValue)
        }
      }
    }
  }
</script>
