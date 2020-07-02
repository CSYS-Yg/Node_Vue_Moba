<template>
    <div class="page-box">
        <a-date-picker
            :default-value="moment(new Date(), dateFormat)"
            :allowClear="false"
            inputReadOnly
            @change="onChange"
        />
        <span>{{week}}</span>

        <a-form-model
            layout="horizontal"
            :label-col="{ span: 1 }"
            :wrapper-col="{ span: 6 }"
        >
            <squat></squat>
            <a-form-model-item>
                <a-button type="primary">Submit</a-button>
            </a-form-model-item>
        </a-form-model>
    </div>
</template>

<script>
import date from "~/assets/util/reuseJs/date.js";
import squat from "./components/squat";
import moment from "moment";
export default {
    componets: {
        squat
    },
    data() {
        this.dateFormat = "YYYY-MM-DD";
        return {
            week: ""
        };
    },
    mounted() {
        this.week = date.getWeekDate(new Date());
    },
    methods: {
        moment,
        onChange(dateJson) {
            this.week = date.getWeekDate(dateJson._d);
        }
    }
};
</script>

<style lang="stylus" scoped>
.page-box
    margin 15px
    padding 15px
    background rgba(255, 255, 255, 1)
    border-radius 8px
</style>