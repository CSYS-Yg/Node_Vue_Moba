<template>
    <div>
        <a-divider>深蹲目标</a-divider>
        <div class="text-center">
            <p>
                第一组：训练重量：80% * 次数：6 次
                <br />第二组：训练重量：80% * 次数：6 次
                <br />第三组：训练重量：80% * 次数：6 次
                <br />第四组：训练重量：80% * 次数：6 次
                <br />
            </p>
        </div>
        <a-form-model-item
            v-for="(item,index) in data"
            :key="index"
            :label="'第'+numberZh[index]+'组'"
        >
            重量：
            <a-input-number v-model="item.weight" :min="0" />KG * 次数：
            <a-input-number v-model="item.frequency" :min="0" />次
        </a-form-model-item>
    </div>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {
            numberZh: ["一", "二", "三", "四", "五", "六", "七"]
        };
    }
};
</script>

<style lang="stylus" scoped>
.text-center
    text-align c
</style>