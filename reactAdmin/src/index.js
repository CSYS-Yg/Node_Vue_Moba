import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


import ReactLayout from '../src/layout/index'

// 菜单管理
import Menu from '../src/pages/menu/index'

// 主面板
import Dashboard from '../src/pages/dashboard/index'

// 运动相关
import ActionType from '../src/pages/train/actionType/index'
import TypeList from '../src/pages/train/typeList/index'

// 全局中文配置
import { ConfigProvider } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/es/locale/zh_CN';

ReactDOM.render(
    // <React.StrictMode>
    <ConfigProvider locale={locale}>
        <Router>
            <ReactLayout>
                <Route path="/" exact component={Dashboard}>
                </Route>
                <Route path="/menu" component={Menu}>
                </Route>
                <Route path="/train/typeList" component={TypeList}>
                </Route>
                <Route path="/train/actionType" component={ActionType}>
                </Route>
            </ReactLayout>
        </Router>
    </ConfigProvider>
    // </React.StrictMode>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
