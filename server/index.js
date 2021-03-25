
// 引入 express
const express = require('express');

//实现本地链接
const mysql = require('mysql');
const Deploy = require('./config')

// 创建一个 express 类
const app = express();

// 导入接口
const load = require('./page/load')
const train = require('./page/train')

function handleError(err) {
    if (err) {
        // 如果是连接异常，自动重新连接
        console.log('err code:' + err.code);
        if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR' || err.code === 'ETIMEDOUT') {
            setTimeout(star, 2000);
        } else {
            console.error(err.stack || err);
        }
    }
}

function star() {
    const mysqlDB = mysql.createConnection(Deploy.deploy)
    mysqlDB.connect(handleError);
    //监听错误
    mysqlDB.on('error', handleError);

    // 配置请求头信息
    app.all("*", function (req, res, next) {
        // res.header("Access-Control-Allow-Origin", "*"); // “Access-Control-Allow-Origin”表示允许跨域访问，“*”表示允许所有来源进行跨域访问，这里也可以替换为特定的域名或ip。 
        // res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS,HEAD,FETCH"); // 设置请求方式
        // res.header("Access-control-Allow-Headers", "xCors");    //允许请求头中携带 xCors
        next();
    })

    app.use('/load', load)
    app.use('/train', train)

    // 开启一个服务器
    app.listen(3020, '127.0.0.5', () => {
        console.log("127.0.0.5:3020")
    })
}

star();






