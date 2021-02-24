// 创建一个 ts 函数式组件

import React from 'react'

import { Button } from 'antd'
// 创建接口 Greeting
interface Greeting {
    name: string;
    firstName: string;
    lastName: string;
}

// 设置 props 遵循接口协议
const Hello = (props: Greeting) => <Button>Hello {props.name} </Button>

Hello.defaultProps = {
    firstName: '',
    lastName: ''
}

export default Hello;