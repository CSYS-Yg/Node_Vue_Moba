/**
 *  系统第一次必须加载的接口
 */

const getLoadMeunList = (conn, req, res) => {
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

    const sql = `
    SELECT
        * 
    FROM
        menu 
    ORDER BY
        sort
    `
    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            meunList = result
            res.send({ data: spliceMeun(null, []) })
        }
    })
}

exports.getLoadMeunList = getLoadMeunList