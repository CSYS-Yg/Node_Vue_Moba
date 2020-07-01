let myDate = new Date();

// myDate.getYear();        //获取当前年份(2位)
// myDate.getFullYear();    //获取完整的年份(4位,1970-????)
// myDate.getMonth();       //获取当前月份(0-11,0代表1月)
// myDate.getDate();        //获取当前日(1-31)
// myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
// myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
// myDate.getHours();       //获取当前小时数(0-23)
// myDate.getMinutes();     //获取当前分钟数(0-59)
// myDate.getSeconds();     //获取当前秒数(0-59)
// myDate.getMilliseconds();    //获取当前毫秒数(0-999)
// myDate.toLocaleDateString();     //获取当前日期
// var mytime = myDate.toLocaleTimeString();     //获取当前时间
// console.log(myDate.toLocaleString());        //获取日期与时间

const monthZh = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

/**
 *  获取当前月份
 */

function getMonth() {
    return monthZh[myDate.getMonth()];
}

/**
 *  获取今天星期几
 */

function getWeek() {
    return week[myDate.getDay()];
}


/**
 * 获取当前年月日
 */
function getNowFormatDate() {
    let seperator1 = "-";
    let year = myDate.getFullYear();
    let month = myDate.getMonth() + 1;
    let strDate = myDate.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return year + seperator1 + month + seperator1 + strDate;
}

/**
 * 获取当前时分秒
 */
function getNowTimeDate() {
    let seperator1 = ":";
    let hour = myDate.getHours();
    let minute = myDate.getMinutes();
    let second = myDate.getSeconds();
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }
    if (minute >= 0 && minute <= 9) {
        minute = "0" + minute;
    }
    if (second >= 0 && second <= 9) {
        second = "0" + second;
    }
    return hour + seperator1 + minute + seperator1 + second;
}

function consoleLog() {
    // 当前月份
    console.log('###  ' + getMonth())
    console.log('')
    // 当前年月日 + 当前星期
    console.log('#### ' + getNowFormatDate() + ' ' + getWeek())
    console.log('')
    // 当前时间
    console.log('##### ' + getNowTimeDate())
}
// 打印
consoleLog()
// 运行  node getTime.js