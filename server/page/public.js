const getAllTable = (db, req, res) => {
    // 递归 拼接菜单

    const sql = `
    SELECT
        * 
    FROM
        ${} 
    ORDER BY
        sort
    `
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send({ data: result })
        }
    })
}
