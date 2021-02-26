import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Icon from '../../assets/iconfont/index'
import { Menu } from 'antd';

const { SubMenu } = Menu;

// 定义接口
interface MenuProps {
    list: any;
}

class MenuList extends Component<MenuProps, {}> {
    static defaultProps = {
        list: [],
    }
    state = {
        current: '1',
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
    // 查找菜单 id  
    getCurrent(pathname: string, list: any) {
        list.forEach((element: any) => {
            if (element.url === pathname) {
                this.setState({ current: element.id.toString() });
                return
            } else if (element.childItem.length > 0) {
                this.getCurrent(pathname, element.childItem)
            }
        });
    }
    render() {
        return (
            <Menu onClick={this.handleClick} theme="dark" mode="inline" selectedKeys={[this.state.current]}>
                {
                    this.props.list.map((menu: any) => {
                        if (menu.childItem.length > 0) {
                            return <SubMenu key={menu.id} title={menu.title} icon={<Icon type={menu.class_icon} />}>
                                <MenuList list={menu.childItem} ></MenuList>
                            </SubMenu>
                        } else {
                            return <Menu.Item key={menu.id} icon={<Icon type={menu.class_icon} />}>
                                <Link to={menu.url || '/'}>{menu.title}</Link>
                            </Menu.Item>
                        }
                    })
                }
            </Menu>

        )
    }
}

export default MenuList;