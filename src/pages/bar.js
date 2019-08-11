import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts'
import ChartContainer from '../component/chartContainer';

export default class Bar extends Component {
    getFirstBarOption = () => {
        const option = {
            title: {
                text: '2019年销售水量和主营业务收入对比',
                textStyle: {
                    align: 'center',
                    color: '#fff',
                    fontSize: 20,
                },
                top: '3%',
                left: '10%',
            },
            backgroundColor: '#0f375f',
            grid: {
                top: "25%",
                bottom: "10%"
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                    label: {
                        show: true
                    }
                }
            },
            legend: {
                data: ["销售水量", "主营业务"],
                top: "15%",
                textStyle: {
                    color: "#ffffff"
                }
            },
            xAxis: {
                data: [
                    "当年完成水量",
                    "去年同期水量",
                    "滚动目标值水量",
                    "全年目标值水量",
                    "当年完成金额",
                    "去年同期金额",
                    "滚动目标金额",
                    "全年目标值",

                ],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#01FCE3'
                    }
                },
                axisTick: {
                    show: true //隐藏X轴刻度
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#ebf8ac" //X轴文字颜色
                    }
                },
            },
            yAxis: [{
                type: "value",
                name: "亿元",
                nameTextStyle: {
                    color: "#ebf8ac"
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: true
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#FFFFFF'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#ebf8ac"
                    }
                },
            },
            {
                type: "value",
                name: "同比",
                nameTextStyle: {
                    color: "#ebf8ac"
                },
                position: "right",
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    formatter: "{value} %", //右侧Y轴文字显示
                    textStyle: {
                        color: "#ebf8ac"
                    }
                }
            },
            {
                type: "value",
                gridIndex: 0,
                min: 50,
                max: 100,
                splitNumber: 8,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                    }
                }
            }
            ],
            series: [{
                name: "销售水量",
                type: "line",
                yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                smooth: true, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                symbolSize: 10, //标记的大小
                itemStyle: {
                    //折线拐点标志的样式
                    color: "#058cff"
                },
                lineStyle: {
                    color: "#058cff"
                },
                areaStyle: {
                    color: "rgba(5,140,255, 0.2)"
                },
                data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
            },
            {
                name: "主营业务",
                type: "bar",
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#00FFE3"
                        },
                        {
                            offset: 1,
                            color: "#4693EC"
                        }
                        ])
                    }
                },
                data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
            }
            ]
        };
        return option;
    }
    getSecondBarOption = () => {
        const option = {
            backgroundColor: '#18163B',
            grid: {
                top: '15%',
                right: '3%',
                left: '5%',
                bottom: '12%'
            },
            xAxis: [{
                type: 'category',
                color: '#59588D',
                data: ['学员续费率', '试听课转换率', '课程消费率', '课后评分率', '作业完成率', '班级满班率', '排课上课率', '体验课转化率'],
                axisPointer: {
                    type: 'line'
                },
                axisLine: {
                    lineStyle: {
                        color: '#272456'
                    }
                },
                axisLabel: {
                    margin: 20,
                    color: '#59588D',
                    textStyle: {
                        fontSize: 12
                    },
                },
            }],
            yAxis: [{
                min: 0,
                max: 100,
                axisLabel: {
                    formatter: '{value}%',
                    color: '#59588D',
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: '#272456'
                    }
                }
            }],
            series: [{
                type: 'bar',
                data: [100, 90, 10, 90, 90, 20, 56, 89],
                barWidth: '20px',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#41E1D4' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#10A7DB' // 100% 处的颜色
                        }], false),
                        barBorderRadius: [30, 30, 0, 0],
                        shadowColor: 'rgba(0,255,225,1)',
                        shadowBlur: 4,
                    }
                },
                label: {
                    normal: {
                        show: true,
                        lineHeight: 30,
                        width: 80,
                        height: 30,
                        backgroundColor: '#252453',
                        borderRadius: 200,
                        position: ['-8', '-60'],
                        distance: 1,
                        formatter: [
                            '    {d|●}',
                            ' {a|{c}%}     \n',
                            '    {b|}'
                        ].join(','),
                        rich: {
                            d: {
                                color: '#3CDDCF',
                            },
                            a: {
                                color: '#fff',
                                align: 'center',
                            },
                            b: {
                                width: 1,
                                height: 30,
                                borderWidth: 1,
                                borderColor: '#234e6c',
                                align: 'left'
                            },
                        }
                    }
                }
            }]
        };
        return option;
    }
    getThirdBarOption = () => {
        const option = {
            "backgroundColor": "rgb(20, 58, 110)",
            "color": ["#3cefff"],
            "tooltip": {},
            "grid": {
                "containLabel": true
            },
            "xAxis": [{
                "type": "category",
                "data": ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"],
                "axisTick": {
                    "alignWithLabel": true
                },
                "nameTextStyle": {
                    "color": "#82b0ec"
                },
                "axisLine": {
                    "lineStyle": {
                        "color": "#82b0ec"
                    }
                },
                "axisLabel": {
                    "textStyle": {
                        "color": "#82b0ec"
                    }
                }
            }],
            "yAxis": [{
                "type": "value",
                "axisLabel": {
                    "textStyle": {
                        "color": "#82b0ec"
                    },
                    "formatter": "{value}%"
                },
                "splitLine": {
                    "lineStyle": {
                        "color": "#0c2c5a"
                    }
                },
                "axisLine": {
                    "show": false
                }
            }],
            "series": [{
                "name": "",
                "type": "pictorialBar",
                "symbolSize": [20, 10],
                "symbolOffset": [0, -5],
                "symbolPosition": "end",
                "z": 12,
                "label": {
                    "normal": {
                        "show": true,
                        "position": "top",
                        "formatter": "{c}%"
                    }
                },
                "data": [60, 70, 80, 90, 60, 70, 80, 90]
            }, {
                "name": "",
                "type": "pictorialBar",
                "symbolSize": [20, 10],
                "symbolOffset": [0, 5],
                "z": 12,
                "data": [60, 70, 80, 90, 60, 70, 80, 90]
            }, {
                "type": "bar",
                "itemStyle": {
                    "normal": {
                        "opacity": 0.7
                    }
                },
                "barWidth": "20",
                "data": [60, 70, 80, 90, 60, 70, 80, 90],
                "markLine": {
                    "silent": true,
                    "symbol": "none",
                    "label": {
                        "position": "middle",
                        "formatter": "{b}"
                    },
                    "data": [{
                        "name": "目标值",
                        "yAxis": 80,
                        "lineStyle": {
                            "color": "#ffc832"
                        },
                        "label": {
                            "position": "end",
                            "formatter": "{b}\n {c}%"
                        }
                    }]
                }
            }]
        }
        return option
    }
    render() {
        return (
            <div style={{ width: '100vw', height: '100vh' }}>
                <ChartContainer>
                    <div>
                        <ReactEcharts
                            option={this.getFirstBarOption()}
                            style={{width: '100vw', height: '100vh' }}
                        />
                    </div>
                    <div>
                        <ReactEcharts
                            option={this.getSecondBarOption()}
                            style={{width: '100vw', height: '100vh' }}
                        />
                    </div>
                    <div>
                        <ReactEcharts
                            option={this.getThirdBarOption()}
                            style={{width: '100vw', height: '100vh' }}
                        />
                    </div>
                </ChartContainer>
            </div>
        )
    }
}
