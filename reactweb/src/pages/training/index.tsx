import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import CardTips from "../components/cardTips";
import { DatePicker } from 'antd';
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


function onChange(date: any, dateString: any) {
    console.log(date, dateString);
}

class Training extends Component<time, state> {
    render() {
        return (<>
            <CardTips title={tips.title} content="今日计划详情"></CardTips>
            <DatePicker onChange={onChange} />
        </>
        )
    }
}

export default Training;
