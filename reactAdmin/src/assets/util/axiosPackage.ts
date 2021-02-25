// axios 的封装
import axios from 'axios'
import { message } from 'antd'

class Interceptors {
    public instance: any;
    constructor() {
        // 创建axios实例,并设置超时时间
        this.instance = axios.create({ timeout: 1000 * 12 });
        // 初始化拦截器
        this.initInterceptors();
    }
    // 初始化拦截器
    public initInterceptors() {
        // 设置默认 url
        this.instance.defaults.baseURL = '/api'
        // 设置post请求头
        this.instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        /** 
         * 请求拦截器 
         * 每次请求前，如果存在token则在请求头中携带token 
         */
        this.instance.interceptors.request.use(
            (config: any) => {
                // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
                // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
                // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
                // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。        
                return config;
            },
            (error: any) => {
                // 直接打印
                console.log(error);
                // 或通过 Promise 抛出
                // Promise.reject(error)
            }
        )
        // 响应拦截器
        this.instance.interceptors.response.use(
            // 请求成功
            (res: any) => {
                return res.status === 200 ? Promise.resolve(res.data.data) : Promise.reject(res)
            }
            ,
            // 请求失败
            (error: any) => {
                const { response } = error;
                if (response) {
                    // 请求已发出，但是不在2xx的范围 
                    this.errorHandle(response.status, response.data.message);
                    return Promise.reject(response);
                } else {
                    // 处理断网的情况
                    // eg:请求超时或断网时，更新state的network状态
                    // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
                    // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
                    if (!(window as any).navigator.onLine) {
                        // TS windows 的使用还存在问题
                        message.error('网络连接异常,请稍后再试!');
                    } else {
                        return Promise.reject(error);
                    }
                }
            })
    }

    /**
     *
     *
     * @private
     * @param {number} status
     * @param {*} other
     * @memberof Interceptors
     */
    private errorHandle(status: number, other: any) {
        // 状态码判断
        switch (status) {
            // 401: 未登录状态，跳转登录页
            case 401:
                break;
            // 403 token过期
            // 清除token并跳转登录页
            case 403:
                message.error(other);
                break;
            // 404请求不存在
            case 404:
                break;
            default:
                console.log(other);
        }
    }
}

let instance = new Interceptors().instance;
export default instance