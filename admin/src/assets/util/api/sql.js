
/**
 * 示例
 * return axios.get('', { params: params });
 * return axios.post('', qs.stringify(params));
 */


import axios from '../axiosPackage'; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

const sql = {
    test(params) {
        return axios.get('', { params: params });
    }
}

export default sql;