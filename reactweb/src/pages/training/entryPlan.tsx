// 计划录入组件

import React, { Component } from 'react'
// 定义接口
import { DatePicker, Form, Input } from 'antd';

// 导入规则方法
// import { setRules } from "../../../assets/util/reuseJs/rules";

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 18 },
};


function onChange(date: any, dateString: any) {
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
                    label="记录时间"
                    rules={[{ required: true, message: '请选择当前时间' }]}
                >
                    <DatePicker onChange={onChange} />
                </Form.Item>
                <Form.Item
                    label="深蹲"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <div className="input-box">
                        <Input className="input-strength" addonBefore="训练重量：70% 最大重量" addonAfter="KG" />
                        <Input className="input-strength" addonBefore="次数：8 次" addonAfter="次" />
                    </div>
                </Form.Item>
                <Form.Item
                    label="硬拉"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <div className="input-box">
                        <Input className="input-strength" addonBefore="训练重量：70% 最大重量" addonAfter="KG" />
                        <Input className="input-strength" addonBefore="次数：8 次" addonAfter="次" />
                    </div>
                </Form.Item>
                <Form.Item
                    label="箭步蹲"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <div className="input-box">
                        <Input className="input-strength" addonBefore="训练重量：正常负重" addonAfter="KG" />
                        <Input className="input-strength" addonBefore="次数：8-12 次" addonAfter="次" />
                    </div>
                </Form.Item>
                <Form.Item
                    label="正手引体向上（负重）"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <div className="input-box">
                        <Input className="input-strength" addonBefore="训练重量：负重" addonAfter="KG" />
                        <Input className="input-strength" addonBefore="个数：8 个" addonAfter="个" />
                    </div>
                </Form.Item>
                <Form.Item
                    label="YTWL 飞鸟"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <div className="input-box">
                        <Input className="input-strength" addonBefore="训练重量：负重" addonAfter="KG" />
                        <Input className="input-strength" addonBefore="个数：8-12 次" addonAfter="次" />
                    </div>
                </Form.Item>
                <Form.Item
                    label="农夫行走"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <div className="input-box">
                        <Input className="input-strength" addonBefore="训练重量：比二头弯举 重30 %" addonAfter="KG" />
                        <Input className="input-strength" addonBefore="距离：100 米" addonAfter="米" />
                    </div>
                </Form.Item>
            </Form>
        );
    }
}


export default EntryPlan;