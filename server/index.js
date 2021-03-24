
// 引入 express

const express = require('express');
const mysqlDB = require('./mysql');

// 创建一个 express 类
const app = express();

// 导入接口
const load = require('./page/load')
const train = require('./page/train')

// 配置请求头信息

function star() {
    mysqlDB.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
            setTimeout(star, 2000);
        }
    });
    //监听错误
    mysqlDB.on('error', function (err) {
        console.log('db error', err);
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            star();
        } else {
            throw err;
        }
    });

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






