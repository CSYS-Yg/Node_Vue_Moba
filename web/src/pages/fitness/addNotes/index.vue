<template>
    <div>123</div>
</template>

<script>
import date from "~/assets/util/reuseJs/date.js";
export default {
    data() {
        return {
            week: ""
        };
    },
    mounted() {
        this.week = date.getWeekDate();
    }
};
</script>

<style lang="stylus" scoped></style>