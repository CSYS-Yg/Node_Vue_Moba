

import './index.css';

import React from 'react';
import { Layout } from 'antd';

import MenuList from "./components/MenuList";

import load from '../assets/util/api/load';

const { Header, Content, Footer } = Layout;

interface Layout {
    current: string;
    menuList: any
}

class ReactLayout extends React.Component<Layout, {}> {
    state: Layout = {
        current: '1',
        menuList: []
    }
    componentDidMount() {
        load.getMeunList({}).then((res: any) => {
            this.setState({
                menuList: res.data
            })
            this.getCurrent(window.location.pathname, res.data)
        })
    }
    // 查找菜单 id  
    getCurrent(pathname: string, list: any) {
        if (pathname === '/') {
            this.setState({ current: '1' });
            return
        }
        list.forEach((element: any) => {
            if (element.page_url === pathname) {
                this.setState({ current: element.id.toString() });
                return
            } else if (element.childItem) {
                this.getCurrent(pathname, element.childItem)
            }
        });
    }
    render() {
        return (
            <div>
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#ffffff', boxShadow: '0 2px 8px #f0f1f2' }}>
                        <div className="logo" />
                        <MenuList list={this.state.menuList}></MenuList>
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
            </div>
        )
    }
}
export default ReactLayout;
