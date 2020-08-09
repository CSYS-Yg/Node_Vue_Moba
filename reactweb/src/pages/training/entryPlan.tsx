// 计划录入组件
import React, { Component } from 'react'
import { Form, Input } from 'antd';

// 导入接口
import TrainingApi from '../../assets/util/api/training';
// 导入规则方法
// import { setRules } from "../../../assets/util/reuseJs/rules";

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 18 },
};

class Detail {
    "action_name": string
    "frequency_claim": string
    "frequency_unit": string
    "id": number
    "training_order": number
    "weight_claim": string
    "weight_unit": string
}


interface state {
    detailList: Array<Detail>
}

// function onChange(date: any, dateString: any) {
//     console.log(date, dateString);
// }

class EntryPlan extends Component<{}, state> {
    static defaultProps = {
        title: '暂无数据',
        content: '暂无数据'
    }
    state: state = {
        detailList: [],
    }
    componentDidMount() {
        this.getTrainingDetails()
    }
    getTrainingDetails(item: object | null = null) {
        let param = item || { group_times: '1', training_date: 'sunday' }
        TrainingApi.getTrainingDetails(param).then(res => {
            console.log("EntryPlan -> componentDidMount -> res.data", res.data)
            this.setState({ detailList: res.data });
        })
    }
    render() {
        const { detailList } = this.state;
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
                {detailList.map(item => (
                    <Form.Item
                        key={item.id}
                        label={item.action_name}
                    >
                        <div className="input-box">
                            <Input className="input-strength" addonBefore={item.weight_claim} addonAfter={item.weight_unit} />
                            <Input className="input-strength" addonBefore={item.frequency_claim} addonAfter={item.frequency_unit} />
                        </div>
                    </Form.Item>
                ))}
            </Form>
        );
    }
}


export default EntryPlan;