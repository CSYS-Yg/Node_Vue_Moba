
import React, { Component } from 'react'
// 定义接口
import { Steps, Button, message } from 'antd';

import EntryPlan from "./entryPlan";

const { Step } = Steps;

const steps = [
    {
        title: '第一组',
        content: 'First-content',
    },
    {
        title: '第二组',
        content: 'Second-content',
    },
    {
        title: '第三组',
        content: 'Last-content',
    },
    {
        title: '第四组',
        content: 'Last-content',
    },
];


interface state {
    current: number
}

class StepsPlan extends Component<{}, state> {
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
    }
    render() {
        const { current } = this.state;
        return (<>
            <div className="steps-box">
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
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
