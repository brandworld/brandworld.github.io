var dom = document.getElementById("chart4");
var myChart = echarts.init(dom);
var app = {};
option = null;

option = {
    title: {
        text: '2016年中国各省旅游收入',
        subtext: '数据来源：各省旅游局官网',
        left: 'center',
        textStyle: {
            color: "#FFFFFF"
        }
    },
    tooltip: {
        trigger: 'item'
    },
    visualMap: {
        min: 0,
        max: 11600,
        left: 'left',
        top: 'bottom',
        text: ['单位：亿', '低'], // 文本，默认为数值文本
        calculable: true,
        inRange: {
            color: ['#D1DBDB', '#6E3D59']
        }
    },
    series: [{
        name: '中国各省旅游收入',
        type: 'map',
        mapType: 'china',
        roam: false,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: true
            }
        },
        data: [
            { name: '河南', value: 5764 },
            { name: '北京', value: 5020 },
            { name: '河北', value: 4654.5 },
            { name: '辽宁', value: 4225 },
            { name: '山西', value: 4247 },
            { name: '山东', value: 8020 },
            { name: '吉林', value: 2897.37 },
            { name: '甘肃', value: 1220 },
            { name: '陕西', value: 3813.43 },
            { name: '安徽', value: 4932 },
            { name: '江苏', value: 10200 },
            { name: '云南', value: 4726.25 },
            { name: '四川', value: 7600 },
            { name: '新疆', value: 1401 },
            { name: '内蒙古', value: 2714.71 },
            { name: '浙江', value: 8093.23 },
            { name: '天津', value: 3100 },
            { name: '湖北', value: 4870 },
            { name: '广西', value: 4191.36 },
            { name: '福建', value: 3935.16 },
            { name: '广东', value: 11560 },
            { name: '重庆', value: 2645.21 },
            { name: '黑龙江', value: 1603.27 },
            { name: '江西', value: 4993.29 },
            { name: '贵州', value: 5027.54 },
            { name: '湖南', value: 4707.43 },
            { name: '青海', value: 669.62 },
            { name: '宁夏', value: 210 },
            { name: '西藏', value: 186 }
        ]
    }, ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}