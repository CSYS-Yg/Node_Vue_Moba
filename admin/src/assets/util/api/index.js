/** 
 * api接口的统一出口
 */
// 登录模块接口
import login from '~/assets/util/api/login';

// 个人中心模块接口
import personal from '~/assets/util/api/personal';
// 其他模块的接口……

// 导出接口
export default {
    // 导出报表录入模块接口
    login,
    personal,
}