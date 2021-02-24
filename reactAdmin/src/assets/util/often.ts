// 复制方法
function oftenCopy(str: string) {
    let input: any = document.createElement("input");
    input.value = str; // 修改文本框的内容
    document.body.appendChild(input); // 添加至 body 中
    input.select(); // 选中文本
    document.execCommand("copy"); // 复制操作
    document.body.removeChild(input); // 清除输入框
    return true
}
// 判断当前运行环境
function BrowserType(ua: any) {
    // 权重：系统 + 系统版本 > 平台 > 内核 + 载体 + 内核版本 + 载体版本 > 外壳 + 外壳版本
    // ua 获取当前运行环境
    // const ua = navigator.userAgent.toLowerCase();
    const testUa: any = (regexp: any) => regexp.test(ua);
    //  获取当前系统环境
    let system = "unknow";
    if (testUa(/windows|win32|win64|wow32|wow64/g)) {
        system = "windows"; // windows系统
    } else if (testUa(/macintosh|macintel/g)) {
        system = "macos"; // macos系统
    } else if (testUa(/x11/g)) {
        system = "linux"; // linux系统
    } else if (testUa(/android|adr/g)) {
        system = "android"; // android系统
    } else if (testUa(/ios|iphone|ipad|ipod|iwatch/g)) {
        system = "ios"; // ios系统
    }
    // 判断当前平台
    let platform = "unknow";
    if (system === "windows" || system === "macos" || system === "linux") {
        platform = "desktop"; // 桌面端
    } else if (system === "android" || system === "ios" || testUa(/mobile/g)) {
        platform = "mobile"; // 移动端
    }
    return platform

}

export { oftenCopy, BrowserType };