//引入数据库
const mysql = require('mysql');
//实现本地链接
const Deploy = require('./config')

const db = mysql.createPool(Deploy.deploy)

module.exports = db