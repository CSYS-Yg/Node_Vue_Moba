
// 引入 阿里图标项目，因 react 与 vue 的构建思维差异， react 更支持组件的即导即用（即不使用全局组件）。

// 每次使用图标时 均进行导入使用
import { createFromIconfontCN } from '@ant-design/icons';

const Icon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1908771_5gw52tuxs02.js',
    extraCommonProps: {
        className: 'icon'  //  React 中使用 className
    }
});

export default Icon;