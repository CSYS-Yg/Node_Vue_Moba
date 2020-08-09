import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import StepsPlan from "./stepsPlan";
import { DatePicker, Row, Col, Card } from 'antd';
import './index.css';

import moment from 'moment';

interface state {
    time: string
}

class Training extends Component<{}, state> {
    child: any = {}  //主要加这个
    onRef = (ref: any) => {
        this.child = ref
    }
    componentDidMount() {
        this.setTime(moment().format('YYYY-MM-DD'))
    }
    state: state = {
        time: ''
    }
    setTime(time: string) {
        this.setState({ time: time })
        let weekList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
        this.child.getTrainingGroup(weekList[parseInt(moment(time).format('d'))])
    }
    onChange(date: any, dateString: string) {
        this.setTime(dateString)
    }
    render() {
        let { time } = this.state
        return (<>
            <div id='training-page'>
                <Card title="训练日选择" bordered={false}>
                    请选择训练日：  <DatePicker value={moment(time, 'YYYY-MM-DD')} inputReadOnly={true} allowClear={false} placeholder="请选择训练日" onChange={this.onChange.bind(this)} />
                </Card>
                <Row gutter={16}>
                    <Col className="gutter-row" span={24}>
                        <Card style={{ marginTop: '15px' }} title="计划填写" bordered={false}>
                            <StepsPlan ref={this.onRef} ></StepsPlan>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
        )
    }
}

export default Training;
