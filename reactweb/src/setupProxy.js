// 接口转发代理

//1.先安装http-proxy-middleware
// npm install http-proxy-middleware --save
//2.然后在src目录下创建 setupProxy.js 文件
//3.最后设置代理（setupProxy.js文件内容）
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy.createProxyMiddleware('/api', {  //`api`是需要转发的请求 
            target: 'http://127.0.0.1:3000',  // 这里是接口服务器地址
            changeOrigin: true,
            pathRewrite: { '^/api': '' }
        })
    )
}