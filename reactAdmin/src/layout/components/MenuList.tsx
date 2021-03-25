import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Icon from '../../assets/iconfont/index'
import { Menu } from 'antd';

const { SubMenu } = Menu;

// 定义接口
interface MenuProps {
    list: any;
}

interface State {
    current: string;
    subMenukey: string;
}



class MenuList extends Component<MenuProps, State> {
    static defaultProps = {
        list: [],
    }
    state = {
        current: '1',
        subMenukey: '3',
    };
    // 当子组件的 Props 接收值变化时触发，即监控父组件传递值的变化
    componentWillReceiveProps(nextProps: any) {
        this.getCurrent(window.location.pathname, nextProps.list)
    }
    handleClick = (e: any) => {
        this.setState({
            current: e.key,
        });
    };

    menuTabs = (list: any) => {
        return list.map((menu: any) => {
            if (menu.childItem.length > 0) {
                return <SubMenu key={menu.id} title={menu.title} icon={<Icon type={menu.class_icon} />}>
                    {
                        this.menuTabs(menu.childItem)
                    }
                </SubMenu>
            } else {
                return <Menu.Item key={menu.id} icon={<Icon type={menu.class_icon} />}>
                    <Link to={menu.url || '/'}>{menu.title}</Link>
                </Menu.Item>
            }
        })
    }

    // 查找菜单 id  
    getCurrent(pathname: string, list: any) {
        list.forEach((element: any) => {
            if (element.url === pathname) {
                this.setState({ current: element.id.toString() });
                if (element.parent_id) {
                    this.setState({ subMenukey: element.parent_id.toString() });
                }
                return
            } else if (element.childItem.length > 0) {
                this.getCurrent(pathname, element.childItem)
            }
        });
    }
    render() {
        return (
            <Menu onClick={this.handleClick} theme="dark" mode="inline" defaultOpenKeys={[this.state.subMenukey]} selectedKeys={[this.state.current]}>
                {
                    this.menuTabs(this.props.list)
                }
            </Menu>

        )
    }
}

export default MenuList;