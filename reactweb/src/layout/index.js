

import './index.css';
import Icon from '../assets/iconfont/index'

import React from 'react';
import { Layout, Menu } from 'antd';
import menuList from './menu'


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
                        {
                            menuList.map((menu) => {
                                if (menu.subMenu && menu.subMenu.length > 0) {
                                    return <SubMenu icon={<Icon type={menu.iconClass} />} title={menu.title}>
                                        {menu.subMenu.map((subMenu) => {
                                            return <Menu.ItemGroup title={subMenu.typeName}>
                                                {
                                                    subMenu.childItem.map((child) => {
                                                        return <Menu.Item key={child.id}>{child.title}</Menu.Item>
                                                    })
                                                }
                                            </Menu.ItemGroup>
                                        })}
                                    </SubMenu>
                                } else {
                                    return <Menu.Item key={menu.id} icon={<Icon type={menu.iconClass} />}>{menu.title}</Menu.Item>
                                }
                            }
                            )
                        }
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
