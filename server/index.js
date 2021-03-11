
// 引入 express

const express = require('express');


// 创建一个 express 类
const app = express();

//引入数据库
const mysql = require('mysql');
const e = require('express');

//实现本地链接
const Deploy = require('./config')

// 导入接口

const load = require('./page/load')

let db = mysql.createConnection(Deploy.deploy)


function handleError() {
    //创建一个mysql连接对象
    db = mysql.createConnection(Deploy.deploy)
    //连接错误，2秒重试
    db.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleError, 2000);
        }
    });
    //监听错误
    db.on('error', function (err) {
        console.log('db error', err);
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleError();
        } else {
            throw err;
        }
    });
    // 配置请求头信息
    app.all("*", function (req, res, next) {
        // res.header("Access-Control-Allow-Origin", "*"); // “Access-Control-Allow-Origin”表示允许跨域访问，“*”表示允许所有来源进行跨域访问，这里也可以替换为特定的域名或ip。 
        // res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS,HEAD,FETCH"); // 设置请求方式
        // res.header("Access-control-Allow-Headers", "xCors");    //允许请求头中携带 xCors
        next();
    })

    app.get('/getMeunList', (req, res) => {
        load.getLoadMeunList(db, req, res)
    })

    // 查询数据表
    app.get('/getTypeList', (req, res) => {
        console.log(req.url)
        let sql = `
SELECT
    * 
FROM
    action_type
`
        db.query(sql, (err, result) => {  // 两个参数，第一个参数固定接收错误
            if (err) {
                console.log(err)
            } else {
                res.send({ data: result })
            }
        })
    })

    // 开启一个服务器
    app.listen(3000, () => {
        console.log("127.0.0.4:3000")
    })
}

handleError();






