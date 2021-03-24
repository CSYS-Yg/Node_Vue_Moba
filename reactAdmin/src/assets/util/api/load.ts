/**
 * 接口模板命名
 * return axios.get('url', { params: params });
 * return axios.post('url', qs.stringify(params));
 */

import axios from '../axiosPackage'; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块


const details: {
    getMeunList: Function,
    // getCategories: Function,
    // postNotifyAuthor: Function,
    // getFilterList: Function
} = {
    getMeunList: (params: any) => {
        return axios.get('load/getMeunList', { params: params });
    }
    // getCategories: (params: any) => {
    //     return axios.get('categories', { params: params });
    // },
    // postNotifyAuthor: (params: any) => {// 给作者发送通知
    //     return axios.post('notices/send', qs.stringify(params));
    // },
    // getFilterList: (params: any) => { // 获取筛选分类列表
    //     return axios.get('categories/labels', { params: params });
    // },
}

export default details;