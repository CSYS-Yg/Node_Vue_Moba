const entryPlanList = [
    {
        name: '', // 动作名称
        weight_claim: '', // 重量要求
        weight_unit: '', // 重量单位
        weight_value: '', // 训练重量数值
        frequency_claim: '', // 次数要求
        frequency_unit: '', // 次数单位
        frequency_value: '', // 训练数值
        training_date: [], // 训练显示日期,一周
        group_times: [], // 训练组次
    }
]

const entryPlanList1 = [
    { // 第一组数据
        idea: '', // 完成第一组后的想法
        training_details: [  // 第一组动作与完成数据
            {
                action_id: '', // 动作 id
                weight_value: '', // 完成重量数值
                frequency_value: '', // 完成次数/距离
                time: '时间', // 训练日期
                group_times: '', // 动作组次
            },
            {
                action_id: '', // 动作 id
                weight_value: '', // 完成重量数值
                frequency_value: '', // 完成次数/距离
                time: '时间', // 训练日期
                group_times: '', // 动作组次
            }
        ],
    }
]

export { entryPlanList, entryPlanList1 }

