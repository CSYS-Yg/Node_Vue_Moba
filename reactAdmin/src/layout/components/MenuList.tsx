import React, { Component } from 'react'
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
        collapsed: false,
    };
    render() {
        return (
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
            >
                {
                    this.props.list.map((menu: any) => {
                        if (menu.childItem.length > 0) {
                            return <SubMenu key={menu.id} title={menu.title}>
                                <MenuList list={menu.childItem}></MenuList>
                            </SubMenu>
                        } else {
                            return <Menu.Item key={menu.id}>
                                {menu.title}
                            </Menu.Item>
                        }
                    })
                }
            </Menu>

        )
    }
}

export default MenuList;