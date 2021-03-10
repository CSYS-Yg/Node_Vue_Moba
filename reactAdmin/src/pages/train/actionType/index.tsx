import React, { Component } from 'react';
import sportsCategory from '../../../assets/util/api/sportsCategory';
import './index.css';

interface List {
    typeList: any
}
// 记录定时器
// Greeting, HelloState 默认传递为 props 与 State 属性
class Dashboard extends Component<List> {
    // componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行
    state: List = {
        typeList: [],
    }
    // 组件第一次被渲染到 DOM 中的时候 称为挂载（mount）
    componentDidMount() {
        sportsCategory.getTypeList({}).then((res: any) => {
            this.setState({
                typeList: res.data
            })
        })
    }
    // 当 DOM 中 Clock 组件被删除的时候 称为 “卸载（unmount）”。
    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
            </div>
        )
    }
}

export default Dashboard;
