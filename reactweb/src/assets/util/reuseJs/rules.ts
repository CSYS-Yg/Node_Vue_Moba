
const rules: any = {
    name: [{ required: true, message: '请选择当前时间' }],
    number: [{ required: true, message: '请选择当前时间' }],
}

function setRules(key: string, message?: string) {
    let rule: Array<any> = rules[key]
    if (message) {
        rule[0].message = message
    }
    return rule[0]
}

export { setRules }