/** 
 * api 接口的统一出口
 */
import load from './load';
import train from './train';
// 其他模块的接口……

// 导出接口
export default {
    load,
    train
}