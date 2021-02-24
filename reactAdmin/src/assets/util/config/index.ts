const test: { baseUrl: string } = {
    baseUrl: '127.0.0.1.4/',  // 测试接口请求域名
}

const prod: { baseUrl: string } = {
    baseUrl: '127.0.0.1.4/', // 正式接口请求域名
}

let config: { baseUrl: string }
// process.env.NODE_ENV 通过 package.json 中启动命令获取
if (process.env.NODE_ENV === 'production') {
    config = prod
} else if (process.env.NODE_ENV === 'development') {
    config = test
} else {
    config = test
}
export { config }
