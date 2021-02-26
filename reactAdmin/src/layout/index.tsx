

import './index.css';

import React from 'react';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';



import MenuList from "./components/MenuList";

import load from '../assets/util/api/load';


const { Header, Content, Sider } = Layout;

interface Layout {
    current: string;
    menuList: any,
    collapsed: boolean
}


class ReactLayout extends React.Component<Layout, {}> {
    state: Layout = {
        current: '1',
        menuList: [],
        collapsed: false
    }

    componentDidMount() {
        load.getMeunList({}).then((res: any) => {
            this.setState({
                menuList: res.data
            })
        })
    }
    // 菜单显示
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <MenuList list={this.state.menuList}></MenuList>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                        </Header>
                        <Content className="site-layout-background content-minH"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                            }}  >
                            <div className="site-layout-content">{
                                React.Children.map(this.props.children, function (child) {
                                    return <div>{child}</div>;
                                })
                            }</div>
                        </Content>
                    </Layout >
                </Layout >
            </>
        )
    }
}
export default ReactLayout;
