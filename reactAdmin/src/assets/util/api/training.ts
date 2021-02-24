
/**
 * 示例
 * return axios.get('', { params: params });
 * return axios.post('', qs.stringify(params));
 * 
 * 该接口主要用于项目初次打开加载的数据
 */


import axios from '../axiosPackage'; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

const TrainingApi = {
    // 获取运动组次
    getTrainingGroup(params: any) {
        return axios.get('/getPlanGroup', { params: params });
    },
    // 获取训练详情
    getTrainingDetails(params: any) {
        return axios.get('/getActionQuery', { params: params });
    }
}
export default TrainingApi;