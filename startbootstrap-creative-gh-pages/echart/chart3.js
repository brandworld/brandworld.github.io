var dom = document.getElementById("chart3");
var myChart = echarts.init(dom);
var app = {};

option = {
    title: {
        text: '世界遗产在各省分布（2016年）',
        subtext: "数据来源：中国世界遗产网",
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
        max: 7,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'], // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
        name: '世界遗产数量',
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
            { name: '北京', value: 7 },
            { name: '天津', value: 1 },
            { name: '上海', value: 0 },
            { name: '重庆', value: 2 },
            { name: '河北', value: 5 },
            { name: '河南', value: 5 },
            { name: '云南', value: 5 },
            { name: '辽宁', value: 4 },
            { name: '黑龙江', value: 1 },
            { name: '湖南', value: 3 },
            { name: '安徽', value: 3 },
            { name: '山东', value: 3 },
            { name: '新疆', value: 2 },
            { name: '江苏', value: 3 },
            { name: '浙江', value: 3 },
            { name: '江西', value: 3 },
            { name: '湖北', value: 3 },
            { name: '广西', value: 1 },
            { name: '甘肃', value: 3 },
            { name: '山西', value: 4 },
            { name: '内蒙古', value: 1 },
            { name: '陕西', value: 2 },
            { name: '吉林', value: 1 },
            { name: '福建', value: 4 },
            { name: '贵州', value: 3 },
            { name: '广东', value: 2 },
            { name: '青海', value: 1 },
            { name: '西藏', value: 2 },
            { name: '四川', value: 5 },
            { name: '宁夏', value: 1 },
            { name: '海南', value: NaN },
            { name: '台湾', value: NaN },
            { name: '香港', value: NaN },
            { name: '澳门', value: 1 }
        ]
    }]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}