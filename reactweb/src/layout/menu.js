
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
const menu = [{ "id": 1, "parents_id": null, "title": "首页", "iconClass": "iconcaidancengji", "page_url": "", "is_show": 1, "childItem": [] }, { "id": 2, "parents_id": null, "title": "与行", "iconClass": "iconrenwubiaoge", "page_url": "", "is_show": 1, "childItem": [{ "id": 4, "parents_id": 2, "title": "健身计划", "iconClass": "", "page_url": null, "is_show": 1, "childItem": [{ "id": 5, "parents_id": 4, "title": "今日计划", "iconClass": null, "page_url": null, "is_show": 1, "childItem": [] }, { "id": 6, "parents_id": 4, "title": "历史完成", "iconClass": null, "page_url": null, "is_show": 1, "childItem": [] }, { "id": 7, "parents_id": 4, "title": "图表详情", "iconClass": null, "page_url": null, "is_show": 1, "childItem": [] }] }, { "id": 8, "parents_id": 2, "title": "健身教程", "iconClass": "", "page_url": null, "is_show": 1, "childItem": [{ "id": 9, "parents_id": 8, "title": "健身动作", "iconClass": null, "page_url": null, "is_show": 1, "childItem": [] }, { "id": 10, "parents_id": 8, "title": "健身器材", "iconClass": null, "page_url": null, "is_show": 1, "childItem": [] }, { "id": 11, "parents_id": 8, "title": "健身肌群", "iconClass": null, "page_url": null, "is_show": 1, "childItem": [] }] }] }, { "id": 3, "parents_id": null, "title": "与思", "iconClass": "iconshikongpengzhuang", "page_url": null, "is_show": 1, "childItem": [{ "id": 12, "parents_id": 3, "title": "所思所想", "iconClass": null, "page_url": null, "is_show": 1, "childItem": [{ "id": 13, "parents_id": 12, "title": "小想法", "iconClass": null, "page_url": null, "is_show": 1, "childItem": [] }, { "id": 14, "parents_id": 12, "title": "健身体会", "iconClass": null, "page_url": null, "is_show": 1, "childItem": [] }] }] }]

export default menu