import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { connect } from 'react-redux';
import {
    setChartsData,
    editDefaultValueModule
} from '../redux/actions-creators';
import { Row, Select } from 'antd';
import '../styles/index.scss';

const { Option } = Select;
class Line extends React.PureComponent {

    state = {
        chartsData: [],
        optionObj: {},
    }

    componentDidMount () {
        this.props.getChartsData();
    }

    changeClassOption = (e) => {
        const { classOption, totalData } = this.props;
        const arr = [];
        totalData.forEach((item) => {
            if (item.classifier_class === e) {
                arr.push(item)
            }
        })
        const obj = {
            class_f1_score: [],
            class_npv: [],
            class_precision: [],
            class_recall: []
        }
        totalData.forEach(item => {
            if (item.classifier_class === e) {
                obj.class_f1_score.push(item.class_f1_score);
                obj.class_npv.push(item.class_npv);
                obj.class_precision.push(item.class_precision);
                obj.class_recall.push(item.class_recall)
            }
        })
        this.props.editDefaultVale({
            totalData: totalData,
            classOption: classOption,
            defClass: e,
            classData: arr,
            linesData: obj
        })
    }

    render () {
        const { classOption, defClass, classData, linesData } = this.props;
        const option = {
            color: ['#DC143C', '#EE82EE', '#0000FF', '#00BFFF', '#00FFFF', '#00FF7F'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['class_f1_score', 'class_npv', 'class_precision', 'class_recall'],
                left: 'center',
                bottom: 'bottom',
                textStyle: {
                    color: '#fff'
                }
            },
            xAxis: [{
                type: 'category',
                data: classData ? classData.map(v => v.version_number) : [],
                axisLabel: {
                    color: '#fff'
                },
                axisLine: {
                    lineStyle: {
                        color: "#999"
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                splitNumber: 4,
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#DDD'
                    }
                },
                axisLabel: {
                    color: '#fff'
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#333"
                    },
                },
                nameTextStyle: {
                    color: "#999"
                },
                splitArea: {
                    show: false
                }
            }],
            series: linesData ? Object.keys(linesData).map((v, i) => {
                return {
                    name: v,
                    type: 'line',
                    data: linesData[v],
                    smooth: true
                }
            }) : []
        };
        return (
            <div className="chartsContainer">
                <div style={{textAlign: 'right', color: '#fff', lineHeight: '40px'}}>
                    <span style={{fontSize: 16, fontWeight: 500, padding: '0 10px'}}>{`classifier_class: ${defClass}`}</span>
                    <span style={{fontSize: 16, fontWeight: 500}}>dataset_name</span>
                    <span style={{display: 'block', float: 'right', width: '250px', padding: '0 10px'}}>
                        <Select style={{width: '100%', zIndex: 1}} value={defClass} onChange={this.changeClassOption}>
                            {
                                classOption && classOption.length > 0 ? classOption.map(item => {
                                    return <Option key={item} value={item}>{item}</Option>
                                }) : null
                            }
                        </Select>
                    </span>
                </div>
                <Row className='echartsContainer'>
                    <ReactEcharts
                        option={option}
                        style={{height: '75%', width: '75%', margin: '0 auto'}}
                    />
                </Row>
                <div className="datacountContainer">{`显示数据 ${linesData ? Object.keys(linesData).length : 0} 条`}</div>
            </div>
        )
    }
}
export default connect(state => {
    const { classOption, defClass, classData, totalData, linesData } = state.saveChartsData;
    return {
        classOption,
        defClass,
        classData,
        totalData,
        linesData
    }
}, dispatch => ({
    getChartsData () {
        const action = setChartsData();
        dispatch(action);
    },
    editDefaultVale (data) {
        const action = editDefaultValueModule(data)
        dispatch(action)
    }
}))(Line);