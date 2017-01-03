/**
 * Created by root on 17-1-3.
 */
const logisticalChartOption = {
  title: {
    text: '一周内每日出货量',
    subtext: '测试用例'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data:['每日出货']
  },
  toolbox: {
    show: false,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: {readOnly: false},
      magicType: {type: ['line', 'bar']},
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis:  {
    type: 'category',
    boundaryGap: false,
    data: ['12/27','12/28','12/296','12/30','12/31','1/1','1/2']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} m³'
    }
  },
  series: [
    {
      name:'每日出货',
      type:'line',
      data:[11, 11, 15, 13, 12, 13, 10],
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: '平均值'},
          [{
            symbol: 'none',
            x: '90%',
            yAxis: 'max'
          }, {
            symbol: 'circle',
            label: {
              normal: {
                position: 'start',
                formatter: '最大值'
              }
            },
            type: 'max',
            name: '最高点'
          }]
        ]
      }
    }
  ]
}

export default logisticalChartOption
