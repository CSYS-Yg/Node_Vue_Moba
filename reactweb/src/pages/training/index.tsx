import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import CardTips from "../components/cardTips";
import StepsPlan from "./stepsPlan";
import { Row, Col, Card } from 'antd';
import './index.css';

// object 的正确定义与使用
const tips: { title: string, content: string } = {
    title: '1234',
    content: '今日计划详情'
}

interface time {
    date: String
}
interface state {
    date: String
}

class Training extends Component<time, state> {
    render() {
        return (<>
            <div id='training-page'>
                <CardTips title={tips.title} content="今日计划详情"></CardTips>
                <Row gutter={16}>
                    <Col className="gutter-row" span={24}>
                        <Card style={{ marginTop: '15px' }} title="计划填写" bordered={false}>
                            <StepsPlan></StepsPlan>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
        )
    }
}

export default Training;
