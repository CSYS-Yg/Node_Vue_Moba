/**
 * 接口模板命名
 * return axios.get('url', { params: params });
 * return axios.post('url', qs.stringify(params));
 */

import axios from '../axiosPackage'; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

const train: {
    getTypeList: Function,
} = {
    getTypeList: (params: any) => {
        return axios.get('train/getTypeList', { params: params });
    }
}

export default train;