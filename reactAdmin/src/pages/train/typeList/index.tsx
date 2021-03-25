import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Table } from 'antd';

import './index.css';

// 导入接口
import train from '../../../assets/util/api/train';

// 导入约束
import { EmployeeTrainList } from '../../../interface/train'

const { Column } = Table

// 导入组件
interface State {
    menuList: EmployeeTrainList
}
// import RichText from "../../components/RichText";
class Dashboard extends Component<{}, State> {
    state: State = {
        menuList: undefined
    }
    // componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行
    // 组件第一次被渲染到 DOM 中的时候 称为挂载（mount）
    componentDidMount() {
        train.getTypeList({}).then((res: any) => {
            this.setState({
                menuList: res.data
            })
        })
    }
    // 当 DOM 中 Clock 组件被删除的时候 称为 “卸载（unmount）”。
    componentWillUnmount() {
    }

    render() {
        return (
            <>
                <Table dataSource={this.state.menuList}>
                    <Column title="排序" dataIndex="id" key="id" />
                    <Column title="分类名字" dataIndex="type_name" key="type_name" />
                    <Column title="描述" dataIndex="explanation" key="explanation" />
                </Table>
            </>
        )
    }
}

export default Dashboard;
