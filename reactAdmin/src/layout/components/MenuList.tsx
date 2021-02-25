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
    };
    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {
                    this.props.list.map((menu: any) => {
                        if (menu.childItem.length > 0) {
                            return <SubMenu key={menu.id} title={menu.title} icon={<Icon type={menu.class_icon} />}>
                                <MenuList list={menu.childItem} ></MenuList>
                            </SubMenu>
                        } else {
                            return <Menu.Item key={menu.id} icon={<Icon type={menu.class_icon} />}>
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