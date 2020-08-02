// 计划录入组件

import React, { Component } from 'react'
// 定义接口
import { DatePicker, Form, Input, Button, Checkbox } from 'antd';

// 导入规则方法
import { setRules } from "../../../assets/util/reuseJs/rules";

const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 2, span: 8 },
};


function onChange(date: any, dateString: any) {
    console.log(setRules('name', '测试'));
    console.log(date, dateString);
}

class EntryPlan extends Component<{}, {}> {
    static defaultProps = {
        title: '暂无数据',
        content: '暂无数据'
    }
    render() {
        const onFinish = (values: any) => {
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        };
        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: '请选择当前时间' }]}
                >
                    <DatePicker onChange={onChange} />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default EntryPlan;