
/* 
{
    menuItem: '',  // 单主菜单
    manyMenuItem:[{
    
    }]
    menuItem: '',  // 单主菜单
} 
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