

import './index.css';
import Icon from '../assets/iconfont/index'

import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'

import load from '../assets/util/api/load';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

class ReactLayout extends React.Component {
    componentDidMount() {
        load.getMeunList({}).then(res => {
            this.setState({
                menuList: res.data
            })
            console.log(window.location.pathname)
            // this.setCurrent(res.data)
        })
    }
    onSelect = e => {
        this.setState({ current: e.key });
    };
    // setCurrent(list) {
    //     for (let i in list) {
    //     }
    // }
    constructor(props) {
        super(props);
        this.state = {
            current: '1',
            menuList: []
        };
    }
    render() {
        const { current } = this.state;
        return (
            <Layout theme="light">
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#ffffff', boxShadow: '0 2px 8px #f0f1f2' }}>
                    <div className="logo" />
                    <Menu onClick={this.onSelect} selectedKeys={[current]} mode="horizontal">
                        {
                            this.state.menuList.map((menu) => {
                                if (menu.childItem && menu.childItem.length > 0) {
                                    return <SubMenu key={menu.id} icon={<Icon type={menu.iconClass} />} title={menu.title}>
                                        {menu.childItem.map((child) => {
                                            return <Menu.ItemGroup key={child.id} title={child.title}>
                                                {
                                                    child.childItem.map((child) => {
                                                        return <Menu.Item key={child.id}><Link to={child.page_url || '/'}>{child.title}</Link></Menu.Item>
                                                    })
                                                }
                                            </Menu.ItemGroup>
                                        })}
                                    </SubMenu>
                                } else {
                                    return <Menu.Item key={menu.id} icon={<Icon type={menu.iconClass} />}><Link to={menu.page_url}>{menu.title}</Link></Menu.Item>
                                }
                            }
                            )
                        }
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '15px', marginTop: 64, backgroundColor: '#f0f2f5' }}>
                    <div className="site-layout-content">{
                        React.Children.map(this.props.children, function (child) {
                            return <div>{child}</div>;
                        })
                    }</div>
                </Content>
                <Footer style={{ width: '100%', textAlign: 'center', position: 'fixed', bottom: 0 }}>BY YuGuangMengYi</Footer>
            </Layout >
        )
    }
}
export default ReactLayout;
