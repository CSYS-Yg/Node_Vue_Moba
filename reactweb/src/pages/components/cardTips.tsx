import React, { Component } from 'react'
import { Card } from 'antd';


// 定义接口
interface CardProps {
    title: string;
    content: string
}

class CardTips extends Component<CardProps, {}> {
    static defaultProps = {
        title: '暂无数据',
        content: '暂无数据'
    }
    render() {
        return (
            <Card title={this.props.title} bordered={false}>
                <p>{this.props.content}</p>
            </Card>
        )
    }
}

export default CardTips;