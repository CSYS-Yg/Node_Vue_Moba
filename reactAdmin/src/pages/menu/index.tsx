import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import { Input, Space, Button } from 'antd';

import './index.css';

interface State {
    numberOne: number | null
    numberTwo: number | null
}
// 记录定时器
// Greeting, HelloState 默认传递为 props 与 State 属性


class InputNumber extends Component<State> {
    state: State = {
        numberOne: null,
        numberTwo: null
    }
    // componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行
    // 组件第一次被渲染到 DOM 中的时候 称为挂载（mount）
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown)

    }
    // 当 DOM 中 Clock 组件被删除的时候 称为 “卸载（unmount）”。
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown)
    }
    onKeyDown = (e: any) => {
        switch (e.keyCode) {
            case 13://回车事件
                this.copyText()
                break
        }
    }
    copyText = () => {
        if (this.state.numberTwo && this.state.numberOne) {
            let text: string = this.state.numberOne + ' - ' + this.state.numberTwo + '(M)'
            text = text + '' + (this.state.numberTwo * 100 - this.state.numberOne * 100).toFixed(0) + 'cm' + '（' + (this.state.numberTwo - this.state.numberOne).toFixed(2) + 'M）'
            console.log(text)
            let input: any = document.getElementById('hide-input')
            input.value = text // 修改文本框的内容
            input.select() // 选中文本
            document.execCommand('copy') // 执行浏览器复制命令
        }

    }

    onChangeOne = (e: any) => {
        if (e && e.target && e.target.value) {
            let value = e.target.value;
            this.setState(() => ({ numberOne: value }))
        }
    }
    onChangeTwo = (e: any) => {
        if (e && e.target && e.target.value) {
            let value = e.target.value;
            this.setState(() => ({ numberTwo: value }))
        }
    }

    render() {
        return (
            <>
                <Space direction="vertical">
                    <div >
                        <input type="text" id="hide-input" />
                    </div>
                    <Input placeholder="请输入开始值" allowClear style={{ width: 200 }} onChange={event => this.onChangeOne(event)} />
                    <Input placeholder="请输入结束值" allowClear style={{ width: 200 }} onChange={event => this.onChangeTwo(event)} />
                    <Button onClick={this.copyText} type="primary">
                        点击复制
                    </Button>
                </Space>
            </>
        )
    }
}

export default InputNumber;
