
/* 
{       // 单菜单
        title: '首页',  //  第一层级名字
        id: 'mail',    //  选中的 key
        iconClass: 'iconsousuo', //图标
        subMenu: [{  
            typeName: '训练计划1',  // 第二层级分类
            childItem: [{          // 分类下的子菜单
                title: '锻炼',
                id: '',
                iconClass: 'iconsousuo',
            },
            {
                title: '锻炼2',
                id: '',
                iconClass: 'iconsousuo',
            }]
        },
},
*/
const menu = [
    {
        title: '首页',
        id: 'mail',
        iconClass: 'iconsousuo',
    },
    {
        title: '锻炼',
        id: '',
        iconClass: 'iconsousuo',
        subMenu: [{
            typeName: '训练计划1',
            childItem: [{
                title: '锻炼',
                id: '',
                iconClass: 'iconsousuo',
            },
            {
                title: '锻炼2',
                id: '',
                iconClass: 'iconsousuo',
            }]
        },
        {
            typeName: '训练计划2',
            childItem: [{
                title: '锻炼',
                id: '',
                iconClass: 'iconsousuo',
            },
            {
                title: '锻炼2',
                id: '',
                iconClass: 'iconsousuo',
            }]
        }]
    },
    {
        title: '锻炼2',
        id: '',
        iconClass: 'iconsousuo',
        subMenu: [{
            typeName: '训练计划',
            childItem: [{
                title: '锻炼',
                id: '',
                iconClass: 'iconsousuo',
            }]
        }]
    }
]

export default menu