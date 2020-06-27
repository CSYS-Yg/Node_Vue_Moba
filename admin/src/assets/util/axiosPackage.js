// axios 的封装
import axios from 'axios'
/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        case 1:
            // 需要提示
            console.log(other);
            break;
        case 100000:
            // token 失效
            localStorage.clear()
            sessionStorage.clear()
            break;
        // 401: 未登录状态，跳转登录页
        case 401:
            break;
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
            break;
        // 404请求不存在
        case 404:
            break;
        default:
            console.log(other);
    }
}
// 创建axios实例,并设置超时时间
var instance = axios.create({ timeout: 1000 * 12 });
// 设置默认 url
instance.defaults.baseURL = '127.0.0.1:3000'
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */
instance.interceptors.request.use(
    config => {
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。        
        config.headers.common['Access-Token'] = localStorage.getItem('access_token')
        config.headers.common['Client-Type'] = 0
        return config;
    },
    error => Promise.error(error)
)

// 响应拦截器
instance.interceptors.response.use(
    // 请求成功
    (res) => {
        if (res.status === 200) {
            if (res.data.errcode) {
                // 有 code 错误拦截
                errorHandle(res.data.errcode, res.data.errmsg);
                return Promise.reject(res);
            } else {
                // 正常执行
                return Promise.resolve(res.data)
            }
        } else {
            // 请求已发出，但是不在2xx的范围 
            return Promise.reject(res)
        }
    },
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围 
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            if (!window.navigator.onLine) {
                // store.commit('changeNetwork', false);
            } else {
                return Promise.reject(error);
            }
        }
    })

export default instance;