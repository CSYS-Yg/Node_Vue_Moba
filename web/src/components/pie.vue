<template>
    <div v-if="pieData" ref="typeChart" style="width:500px;height:240px;"></div>
</template>

<script>
// 引入 ECharts 主模块
let echarts = require("echarts/lib/echarts");
// 引入折线图/柱状图等组件
require("echarts/lib/chart/pie");
// 引入提示框和title组件，图例
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");

export default {
    data() {
        return {
            name: "",
            pieData: [],
            color: []
        };
    },
    methods: {
        setData(name, data, color) {
            this.name = name;
            this.pieData = data;
            this.color = color || ["#c23531", "#EA7075", "#7AD596", "#00C0EF"];
            this.typeChart();
        },
        typeChart() {
            let pieData = this.pieData;

            // 基于准备好的dom，初始化echarts实例
            let typeChart = echarts.init(this.$refs.typeChart);
            // 指定图表的配置项和数据
            let option = {
                color: this.color,
                title: {
                    text: this.name,
                    textStyle: {
                        color: "#333333",
                        fontWeight: "400",
                        fontSize: 14
                    }
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: "vertical",
                    left: 260,
                    top: "middle",
                    textStyle: {
                        color: "#77899c",
                        rich: {
                            uname: {
                                width: 80
                            },
                            unum: {
                                width: 40,
                                align: "left"
                            }
                        }
                    },
                    formatter(name) {
                        for (let i = 0; i < pieData.length; i++) {
                            if (pieData[i].name == name) {
                                return `{uname|${pieData[i].name}}${
                                    pieData[i].value
                                }{uset| | }${(
                                    (parseFloat(pieData[i].value || 0) * 100) /
                                    parseFloat(pieData[0].total || 0)
                                ).toFixed(2)}%`;
                            }
                        }
                    }
                },
                series: [
                    {
                        name: this.name,
                        type: "pie",
                        radius: ["50%", "80%"],
                        center: ["30%", "50%"],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: "center"
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: "20",
                                fontWeight: "bold"
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: this.pieData
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            typeChart.setOption(option);
        }
    }
};
</script>

<style lang="stylus" scoped></style>