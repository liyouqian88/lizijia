/*
~function () {
    var myChart = echarts.init(AAA);
    var option = {
        ...
    };
    myChart.setOption(option);
}();
*/

~function () {
    var myChart = echarts.init(ET1);
    var option = {
        timeline: {
            data: ['2011', '2012', '2013', '2014', '2015', '2016'],
            autoPlay: true,
            playInterval: 1000
        },
        options: [
            {
                title: {
                    text: '中国留学统计表',
                    subtext: '数据来源于网络',
                    textStyle: {
                        fontSize: 14
                    },
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}万 ({d}%)"
                },
                toolbox: {
                    show: true,
                    feature: {
                        magicType: {
                            show: true,
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 100
                                }
                            }
                        }
                    }
                },
                series: [
                    {
                        name: '2011年中国留学统计表（数据来源于网络）',
                        type: 'pie',
                        center: ['50%', '45%'],
                        radius: '50%',
                        data: [
                            {value: 33.97, name: '中国出国总人口数'},
                            {value: 18.62, name: '回国人口数'},
                            {value: 31.48, name: '自费留学人数'},
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        name: '2012年中国留学统计表（数据来源于网络）',
                        type: 'pie',
                        data: [
                            {value: 39.96, name: '中国出国总人口数'},
                            {value: 27.29, name: '回国人口数'},
                            {value: 25.27, name: '自费留学人数'},
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        name: '2013年中国留学统计表（数据来源于网络）',
                        type: 'pie',
                        data: [
                            {value: 41, name: '中国出国总人口数'},
                            {value: 35, name: '回国人口数'},
                            {value: 38, name: '自费留学人数'},
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        name: '2014年中国留学统计表（数据来源于网络）',
                        type: 'pie',
                        data: [
                            {value: 45.98, name: '中国出国总人口数'},
                            {value: 36.48, name: '回国人口数'},
                            {value: 42.3, name: '自费留学人数'},
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        name: '2015年中国留学统计表（数据来源于网络）',
                        type: 'pie',
                        data: [
                            {value: 52.37, name: '中国出国总人口数'},
                            {value: 40.91, name: '回国人口数'},
                            {value: 48.18, name: '自费留学人数'},
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        name: '2016年中国留学统计表（数据来源于网络）',
                        type: 'pie',
                        data: [
                            {value: 54.45, name: '中国出国总人口数'},
                            {value: 43.25, name: '回国人口数'},
                            {value: 49.82, name: '自费留学人数'},
                        ]
                    }
                ]
            },
            {
                series: [
                    {
                        name: '2017年中国留学统计表（数据来源于网络）',
                        type: 'pie',
                        data: [
                            {value: 60.84, name: '中国出国总人口数'},
                            {value: 40.09, name: '回国人口数'},
                            {value: 54.13, name: '自费留学人数'},
                        ]
                    }
                ]
            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(ET2);
    var option = {
        title: {
            text: '本科阶段留学国家选择',
            subtext: 'Selection of students studying abroad at undergraduate level',
            textStyle: {
                fontSize: 14
            },
            x: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            data: ['申请的国家地区（%）', '首选国家和地区（%）'],
            y: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ['美国', '澳大利亚', '英国', '加拿大', '日本', '新加坡', '德国', '新西兰', '法国', '韩国', '香港', '瑞士',
                    '荷兰', '西班牙']
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '申请的国家地区（%）',
                type: 'bar',
                data: [22, 14, 18, 16, 11, 9, 9, 9, 5, 4, 4, 3, 3, 2],
            },
            {
                name: '首选国家和地区（%）',
                type: 'bar',
                data: [25, 20, 13, 11, 10, 6, 6, 5, 3, 3, 3, 1, 1, 1]
            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(ET3);
    var option = {
        title: {
            text: '中国留学生出国后选择的专业',
            subtext: '数据来源于网络',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}万 ({d}%)"
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 300
                        }
                    }
                }
            }
        },
        calculable: true,
        series: [
            {
                name: '中国留学生出国后选择的专业',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 280.4, name: '经济'},
                    {value: 85.7, name: '计算机'},
                    {value: 64.5, name: '建筑'},
                    {value: 40.7, name: '传媒'},
                    {value: 30.5, name: '工商管理'},
                ]
            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(ET4);
    var option = {
        title: {
            text: '中国留学生分布情况',
            subtext: '数据来源于网络',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}万 ({d}%)"
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 250
                        }
                    }
                }
            }
        },
        calculable: true,
        series: [
            {
                name: '中国留学人数',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 210.452, name: '美国'},
                    {value: 87.497, name: '澳大利亚'},
                    {value: 76.913, name: '英国'},
                    {value: 96.592, name: '日本'},
                    {value: 43.698, name: '韩国'}
                ]
            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(ET5);
    var option = {
        title: {
            text: '留学生回国后的工作岗位',
            subtext: '数据来源于网络',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y: '10%',
            data: ['财务管理', '研发', '行政工作', '销售、市场', '生产、运营', '其他']
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'center',
                            max: 30
                        }
                    }
                }
            }
        },
        calculable: true,
        series: [
            {
                name: '访问来源',
                type: 'pie',
                center: ['50%', '60%'],
                radius: ['50%', '70%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    }
                },
                data: [
                    {value: 10.1, name: '财务管理'},
                    {value: 12.9, name: '研发'},
                    {value: 10.9, name: '行政工作'},
                    {value: 29.6, name: '销售、市场'},
                    {value: 11.8, name: '生产、运营'},
                    {value: 16.4, name: '其他'}
                ]
            }
        ]
    };
    myChart.setOption(option);
}();
~function () {
    var myChart = echarts.init(ET6);
    var option = {
        title: {
            text: '海归就业创业调查表',
            subtext: '数据来源网络',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'axis',
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ['就业', '找工作', '创业']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '人数',
                type: 'bar',
                data: [72, 16, 5],
            }
        ]
    };
    myChart.setOption(option);
}();
