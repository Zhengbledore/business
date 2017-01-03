<template>
  <div class="box-user-page">
    <div class="box-user-header">
      <div class="box-user-header-style">
        <div class="box-user-avatar"><img :src="water" class="box-user-avatar-img"></div>
        <div class="box-user-name">小甜甜</div>
      </div>
    </div>
    <div class="box-user-content">
      <div class="box-user-factory">
        <mu-card-title title="布莱克天文馆" subTitle="物流数据统计"/>
        <mu-card-text>
          <div class="box-user-factory-chart" id="my-chart"></div>
        </mu-card-text>
      </div>
    </div>
    <div class="box-user-footer">
      <!--<div class="box-user-factory-chart"></div>-->
    </div>
  </div>
</template>
<style lang="css" scoped>
  .box-user-page {
    height: 100%;
    width: 100%;
    background-color: #f0f2f5;
  }

  .box-user-header {
    height: 150px;
    width: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    background-color: #ffffff;
  }

  .box-user-header-style {
    /*margin: 5px 0 5px 0;*/
  }

  .box-user-avatar {

  }

  .box-user-avatar-img {
    opacity: 1;
    transition: opacity 0.5s ease-in;
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }

  .box-user-name {
    font-size: 18px;
    text-align: center;
  }

  .box-user-content {
    margin-top: 10px;
    background-color: #ffffff;
  }

  .box-user-factory-chart {
    width: 100%;
    height: 500px;
  }

  .box-user-footer {
    margin-top: 10px;
  }
</style>
<script>
  /* import muse-ui */
  import {cardTitle as MuCardTitle, cardText as MuCardText}  from 'muse-ui/src/card'

  /* import eChart */
  import echarts from 'echarts'
  import logisticalChartOption from '../../config/demo/factory-chart'

  import moment from 'moment'

  /* import image */
  import water from '../assets/images/water-plant.97ca350.jpg'
  export default{
    data(){
      return {
        water,
        logisticalChartOption,
        moment
      }
    },
    components: {
      MuCardTitle,
      MuCardText
    },
    mounted() {
      let myChart = echarts.init(document.getElementById('my-chart'))
      console.log(this.getLastDays())
      myChart.setOption(this.logisticalChartOption)
      myChart.setOption({
        xAxis: {
          data: this.getLastDays()
        },
        series: {
          data: this.shipments
        }
      })
    },
    methods: {
      getLastDays () {
        let lastSevenDays = []
        for (let number = 7; number > 0; number--) {
          lastSevenDays[number - 1] = this.moment().subtract(number, 'days').format("M-D")
        }
        return lastSevenDays
      },
      getShipments () {
        this.$store.dispatch('getShipmentsForFactory', 7)
      }
    },
    computed: {
      shipments() {
        if (this.$store.getters.shipments.length <= 0) {
          return [11, 6, 15, 33, 12, 13, 10]
        }
        return this.$store.getters.shipments
      }
    }

  }
</script>
