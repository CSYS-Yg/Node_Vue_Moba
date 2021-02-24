import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import CardTips from "../components/cardTips";
import EntryPlan from "./components/entryPlan";
import { Card } from 'antd';
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
            <CardTips title={tips.title} content="今日计划详情"></CardTips>
            <Card style={{ marginTop: '15px' }} title="今日任务" bordered={false}>
                <EntryPlan></EntryPlan>
            </Card>
        </>
        )
    }
}

export default Training;
