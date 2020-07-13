import React from 'react';
// import ReactDOM from 'react-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    // componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行
    // 组件第一次被渲染到 DOM 中的时候 称为挂载（mount）
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    // 当 DOM 中 Clock 组件被删除的时候 称为 “卸载（unmount）”。
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (<div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>)
    }
}

export default Dashboard;
