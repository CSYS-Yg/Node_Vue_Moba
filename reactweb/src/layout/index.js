

import './index.css';
import Icon from '../assets/iconfont/index'

import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
class ReactLayout extends React.Component {
    state = {
        current: 'mail',
    };
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { current } = this.state;
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu onClick={this.handleClick} selectedKeys={[current]} theme="dark" mode="horizontal">
                        <Menu.Item key="mail" icon={<Icon type='iconsousuo' />}>
                            Navigation One</Menu.Item>
                        <Menu.Item key="app" disabled icon={<Icon type='iconsousuo' />}>
                            Navigation Two</Menu.Item>
                        <SubMenu icon={<Icon type='iconsousuo' />} title="Navigation Three - Submenu">
                            <Menu.ItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Item 2">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item key="alipay">
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                                Navigation Four - Link</a>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="site-layout-content">{
                        React.Children.map(this.props.children, function (child) {
                            return <div>{child}</div>;
                        })
                    }</div>
                </Content>
                <Footer style={{ width: '100%', textAlign: 'center', position: 'fixed', bottom: 0 }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout >
        )
    }
}
export default ReactLayout;
