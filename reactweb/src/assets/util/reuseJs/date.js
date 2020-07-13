export default {
    /**
     * 获取当前日期是星期几
     */
    getWeekDate(nowDate) {
        let day = nowDate.getDay(); //  getDay() 方法可返回一周（0~6）的某一天的数字。 注意： 星期天为 0, 星期一为 1, 以此类推。
        let weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        let week = weeks[day];
        return week;
    }
}