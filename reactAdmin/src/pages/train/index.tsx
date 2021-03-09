import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import './index.css';

// 导入组件
import Hello from "../components/hello";
import RichText from "../components/RichText";

interface HelloState {
    date: any,
}

interface Greeting {
}
// 记录定时器
let timerID: any
// Greeting, HelloState 默认传递为 props 与 State 属性
class Dashboard extends Component<Greeting, HelloState> {
    state: HelloState = {
        date: new Date(),
    }


    // componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行
    // 组件第一次被渲染到 DOM 中的时候 称为挂载（mount）
    componentDidMount() {
        timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    // 当 DOM 中 Clock 组件被删除的时候 称为 “卸载（unmount）”。
    componentWillUnmount() {
        clearInterval(timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <Hello name="456"></Hello>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <RichText></RichText>
            </div>
        )
    }
}

export default Dashboard;
