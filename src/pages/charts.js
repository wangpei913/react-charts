import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { connect } from 'react-redux';
import {
    setChartsData,
    editDefaultValueModule
} from '../redux/actions-creators';
import { Row, Col, Select } from 'antd';
import './index.scss';

const { Option } = Select;
class ChartsPage extends React.PureComponent {

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
        this.props.editDefaultVale({
            totalData: totalData,
            classOption: classOption,
            defClass: e,
            classData: arr
        })
    }

    render () {
        const { classOption, defClass, classData } = this.props;
        const color = ['#DC143C', '#EE82EE', '#0000FF', '#00BFFF', '#00FFFF', '#00FF7F'];
        const option = {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [{
                type: 'category',
                data: classData ? classData.map(v => v.version_number) : [],
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
            series: classData ? classData.map((v, i) => {
                return {
                    name: v.dataset_name,
                    type: 'line',
                    data: v.classifier_data,
                    smooth: true,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: color[i]
                            }
                        }
                    }
                }
            }) : []
        };
        return (
            <div className="chartsContainer">
                <Row gutter={20}>
                    <Col span={6}>
                        <Select value={defClass} style={{ width: "100%" }} onChange={this.changeClassOption}>
                            {
                                classOption && classOption.length > 0 ? classOption.map(item => {
                                    return <Option key={item} value={item}>{item}</Option>
                                }) : null
                            }
                        </Select>
                    </Col>
                    {/* <Col span={6}>
                        <Select style={{ width: "100%" }}>
                            {
                                nameOption && nameOption.length > 0 ? nameOption.map(item => {
                                    return <Option key={item} value={item}>{item}</Option>
                                }) : null
                            }
                        </Select>
                    </Col> */}
                </Row>
                <Row className='echartsContainer'>
                    <ReactEcharts
                        option={option}
                        style={{height: '100%', width: '100%'}}
                    />
                </Row>
            </div>
        )
    }
}
export default connect(state => {
    const { classOption, defClass, classData, totalData } = state.saveChartsData;
    return {
        classOption,
        defClass,
        classData,
        totalData
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
}))(ChartsPage);