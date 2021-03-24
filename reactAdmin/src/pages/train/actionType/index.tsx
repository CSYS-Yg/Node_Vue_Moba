import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import './index.css';

// 导入组件
// import RichText from "../../components/RichText";
class Dashboard extends Component<{}, {}> {
    // componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行
    // 组件第一次被渲染到 DOM 中的时候 称为挂载（mount）
    componentDidMount() {

    }
    // 当 DOM 中 Clock 组件被删除的时候 称为 “卸载（unmount）”。
    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                123
            </div>
            // <RichText></RichText>
        )
    }
}

export default Dashboard;
