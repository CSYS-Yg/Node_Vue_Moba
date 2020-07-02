<template>
    <div>
        <a-divider orientation="left">深蹲目标</a-divider>
        <p>
            第一组：训练重量：80% * 次数：6 次
            <br />第二组：训练重量：80% * 次数：6 次
            <br />第三组：训练重量：80% * 次数：6 次
            <br />第四组：训练重量：80% * 次数：6 次
            <br />
        </p>
        <a-form-model-item label="第一组">
            重量：
            <a-input-number v-model="form.fieldA" :min="0" />KG * 次数：
            <a-input-number v-model="form.fieldA" :min="0" />次
        </a-form-model-item>
        <a-form-model-item label="第二组">
            重量：
            <a-input-number v-model="form.fieldA" :min="0" />KG * 次数：
            <a-input-number v-model="form.fieldA" :min="0" />次
        </a-form-model-item>
        <a-form-model-item label="第四组">
            重量：
            <a-input-number v-model="form.fieldA" :min="0" />KG * 次数：
            <a-input-number v-model="form.fieldA" :min="0" />次
        </a-form-model-item>
        <a-form-model-item label="第三组">
            重量：
            <a-input-number v-model="form.fieldA" :min="0" />KG * 次数：
            <a-input-number v-model="form.fieldA" :min="0" />次
        </a-form-model-item>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                fieldA: "",
                fieldB: "",
                fieldC: "",
                fieldD: ""
            }
        };
    }
};
</script>

<style lang="stylus" scoped></style>