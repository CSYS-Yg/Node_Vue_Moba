import axios from '../axiosPackage'; // 导入http中创建的axios实例

const sportsCategory: {
    getTypeList: Function,
    // getCategories: Function,
    // postNotifyAuthor: Function,
    // getFilterList: Function
} = {
    getTypeList: (params: any) => {
        return axios.get('getTypeList', { params: params });
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

export default sportsCategory;