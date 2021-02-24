const Deploy = require('./config')
console.log("🚀 ~ file: index.js ~ line 2 ~ Deploy", Deploy.deploy)

// 引入 express

const express = require('express');


// 创建一个 express 类
const app = express();

//引入数据库
const mysql = require('mysql');
const e = require('express');

//实现本地链接
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

// // 创建数据库测试
// app.get('/create', (req, res) => {
//     let sql = "CREATE DATABASE nodemysql"
//     db.query(sql, (err, result) => {  // 两个参数，第一个参数固定接收错误
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(result);
//             res.send('DateBase create success ...')
//         }
//     })
// })

// // 创建数据表
// app.get('/create_table', (req, res) => {
//     let sql = "CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255),body VARCHAR(255),PRIMARY KEY(ID))"
//     db.query(sql, (err, result) => {  // 两个参数，第一个参数固定接收错误
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(result);
//             res.send('创建表格成功')
//         }
//     })
// })

// // 递归 拼接菜单
// let meunList = []
// function spliceMeun(parentId, childen) {
//     for (let i = 0; i < meunList.length; i++) {
//         if (meunList[i].parents_id == parentId) {
//             meunList[i].childItem = []
//             childen.push(meunList[i])
//             spliceMeun(meunList[i].id, meunList[i].childItem)
//         }
//     }
//     return childen
// }

// // 查询数据表
// app.get('/getMeunList', (req, res) => {
//     let sql = `SELECT * FROM meun`
//     db.query(sql, (err, result) => {  // 两个参数，第一个参数固定接收错误
//         if (err) {
//             console.log(err)
//         } else {
//             meunList = result
//             res.send({ data: spliceMeun(null, []) })
//         }
//     })
// })


// function setGroup(list) {
//     let title = ['第 0 组', '第一组', '第二组', '第三组', '第四组', '第五组', '第六组', '第七组', '第八组',]
//     list.forEach((element, index) => {
//         list[index]['title'] = title[element.group_times]
//     });
//     return list
// }
// // 查询当前计划组次
// app.get('/getPlanGroup', (req, res) => {
//     let sql = `
//     SELECT distinct my_plan.group_times
//     FROM my_plan
//     WHERE my_plan.training_date = '${req.query.training_date}'
//     `
//     db.query(sql, (err, result) => {  // 两个参数，第一个参数固定接收错误
//         if (err) {
//             console.log(err)
//         } else {
//             res.send({ data: setGroup(result) })
//         }
//     })
// })

// // 每日动作查询 group_times 组次 ， training_date = 训练日期，星期几
// app.get('/getActionQuery', (req, res) => {
//     let sql = `
//     SELECT a.id,b.action_name,a.weight_claim,a.weight_unit,a.frequency_claim,a.frequency_unit,a.training_order
//     FROM my_plan as a,training_action as b
//     WHERE a.action_id = b.id 
//     AND a.group_times = '${req.query.group_times}'
//     AND a.training_date = '${req.query.training_date}'
//     ORDER BY a.training_order ASC
//     `
//     db.query(sql, (err, result) => {  // 两个参数，第一个参数固定接收错误
//         if (err) {
//             console.log(err)
//         } else {
//             res.send({ data: result })
//         }
//     })
// })



// 开启一个服务器
app.listen(3000, () => {
    console.log("127.0.0.4:3000")
})


