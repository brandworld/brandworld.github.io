var dom = document.getElementById("chart2");
var myChart = echarts.init(dom);
var app = {};
option = {
    title: {
        text: '2017年可可西里和鼓浪屿各月百度指数',
        left: 'center',
        textStyle: {
            color: "#FFFFFF",
            align: "center"
        },
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['可可西里', '鼓浪屿'],
        top: 30,
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    // grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月'],
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        }
    },
    yAxis: {
        type: 'value',
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        }
    },
    series: [{
            name: '可可西里',
            type: 'line',
            showSymbol: true,
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            stack: '总量',
            data: [1828,
                2334,
                2593,
                2397,
                2491,
                4566,
                4096,
                3049
            ]
        },
        {
            name: '鼓浪屿',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: [5105,
                5193,
                5129,
                5731,
                6211,
                8355,
                9321,
                8412,

            ]
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}