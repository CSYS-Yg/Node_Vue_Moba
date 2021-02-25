
// 引入 express

const express = require('express');


// 创建一个 express 类
const app = express();

//引入数据库
const mysql = require('mysql');
const e = require('express');

//实现本地链接
const Deploy = require('./config')
const db = mysql.createConnection(Deploy.deploy)

db.connect((err) => {
    if (err) throw err;
    console.log('数据库连接成功')
})


// 配置请求头信息
app.all("*", function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*"); // “Access-Control-Allow-Origin”表示允许跨域访问，“*”表示允许所有来源进行跨域访问，这里也可以替换为特定的域名或ip。 
    // res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS,HEAD,FETCH"); // 设置请求方式
    // res.header("Access-control-Allow-Headers", "xCors");    //允许请求头中携带 xCors
    next();
})

// 递归 拼接菜单
let meunList = []
function spliceMeun(parentId, childen) {
    for (let i = 0; i < meunList.length; i++) {
        if (meunList[i].parent_id == parentId) {
            meunList[i].childItem = []
            childen.push(meunList[i])
            spliceMeun(meunList[i].id, meunList[i].childItem)
        }
    }
    return childen
}

// 查询数据表
app.get('/getMeunList', (req, res) => {
    let sql = `
    SELECT
        * 
    FROM
        menu 
    ORDER BY
        sort
    `
    db.query(sql, (err, result) => {  // 两个参数，第一个参数固定接收错误
        if (err) {
            console.log(err)
        } else {
            meunList = result
            res.send({ data: spliceMeun(null, []) })
        }
    })
})

// 开启一个服务器
app.listen(3000, () => {
    console.log("127.0.0.4:3000")
})


