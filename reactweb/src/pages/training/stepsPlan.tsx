
import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';

import EntryPlan from "./entryPlan";

// 导入接口
import TrainingApi from '../../assets/util/api/training';
const { Step } = Steps;

// 定于 StepsList 的数组对象的数据项
class StepsList {
    'title': string;
    'group_times': string;
}
interface state {
    current: number
    steps: Array<StepsList>
}

class StepsPlan extends Component<{}, state> {
    componentDidMount() {
        TrainingApi.getTrainingGroup({ training_date: 'sunday' }).then(res => {
            this.setState({ steps: res.data });
        })
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    state: state = {
        current: 0,
        steps: [],
    }
    render() {
        const { current, steps } = this.state;
        return (<>
            <div className="steps-box">

                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.group_times} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">
                    <EntryPlan></EntryPlan>
                </div>
                <div className="steps-action">

                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                            上一步
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            提交
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            下一步
                        </Button>
                    )}

                </div>
            </div>
        </>
        )
    }
}

export default StepsPlan
