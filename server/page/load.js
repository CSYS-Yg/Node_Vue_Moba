/**
 *  系统第一次必须加载的接口
 */

const express = require('express')
const mysqlDB = require('../mysql');
const router = express.Router()

// 递归 拼接菜单
let meunList = []
const spliceMeun = (parentId, childen) => {
    for (let i = 0; i < meunList.length; i++) {
        if (meunList[i].parent_id == parentId) {
            meunList[i].childItem = []
            childen.push(meunList[i])
            spliceMeun(meunList[i].id, meunList[i].childItem)
        }
    }
    return childen
}
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/getMeunList', (req, res) => {
    const sql = `
    SELECT
        * 
    FROM
        menu 
    ORDER BY
        sort
    `
    mysqlDB.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            meunList = result
            res.send({ data: spliceMeun(null, []) })
        }
    })
})

module.exports = router

