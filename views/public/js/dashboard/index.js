/**
 * Created by hyd on 2017/10/18.
 */
define(['echarts'],function (echarts){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '课程管理'
        },
        tooltip: {},
        legend: {
            data:['课时']
        },
        xAxis: {
            data: ["html","javaScript","php","java","css3","js高级"]
        },
        yAxis: {},
        series: [{
            name: '课时',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    //使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});