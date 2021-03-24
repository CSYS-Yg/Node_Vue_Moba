
const express = require('express')
const mysqlDB = require('../mysql');
const router = express.Router()

router.get('/getTypeList', (req, res) => {
    console.log(req.url)
    let sql = `
SELECT
    * 
FROM
    action_type
`
    mysqlDB.query(sql, (err, result) => {  // 两个参数，第一个参数固定接收错误
        if (err) {
            console.log(err)
        } else {
            res.send({ data: result })
        }
    })
})


module.exports = router