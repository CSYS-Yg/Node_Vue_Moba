const path = require('path')


module.exports = {
    configureWebpack: {
        resolve: {
            alias: { '~': resolve('src') }
        }
    }

}

function resolve(dir) {
    return path.join(__dirname, dir)
}
