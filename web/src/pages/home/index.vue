<template>
    <div>
        <a-row :gutter="16">
            <a-col :span="6">
                <a-card hoverable title="训练计划">
                    <p>已坚持 n 天</p>
                    <template slot="actions" class="ant-card-actions">
                        <a-popover content="查看日记">
                            <IconFont
                                type="iconchakan"
                                :style="{ fontSize: '16px' }"
                                @click="$router.push('/fitness/diary')"
                            ></IconFont>
                        </a-popover>
                        <a-popover content="数据概览">
                            <IconFont
                                type="icontongji"
                                :style="{ fontSize: '16px' }"
                                @click="$router.push('/fitness/diary')"
                            ></IconFont>
                        </a-popover>
                        <a-popover content="新增记录">
                            <IconFont
                                type="iconxinzeng"
                                :style="{ fontSize: '16px' }"
                                @click="$router.push('/fitness/addNotes')"
                            ></IconFont>
                        </a-popover>
                    </template>
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card hoverable title="训练计划">
                    <p>已坚持 n 天</p>
                    <template slot="actions" class="ant-card-actions">
                        <IconFont
                            type="iconchakan"
                            :style="{ fontSize: '16px' }"
                            @click="$router.push('/fitness/diary')"
                        ></IconFont>
                        <IconFont
                            type="icontongji"
                            :style="{ fontSize: '16px' }"
                            @click="$router.push('/fitness/diary')"
                        ></IconFont>
                        <IconFont
                            type="iconxinzeng"
                            :style="{ fontSize: '16px' }"
                            @click="$router.push('/fitness/diary')"
                        ></IconFont>
                    </template>
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card hoverable title="训练计划">
                    <p>已坚持 n 天</p>
                    <template slot="actions" class="ant-card-actions">
                        <IconFont
                            type="iconchakan"
                            :style="{ fontSize: '16px' }"
                            @click="$router.push('/fitness/diary')"
                        ></IconFont>
                        <IconFont
                            type="icontongji"
                            :style="{ fontSize: '16px' }"
                            @click="$router.push('/fitness/diary')"
                        ></IconFont>
                        <IconFont
                            type="iconxinzeng"
                            :style="{ fontSize: '16px' }"
                            @click="$router.push('/fitness/diary')"
                        ></IconFont>
                    </template>
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card hoverable title="训练计划">
                    <p>已坚持 n 天</p>
                    <template slot="actions" class="ant-card-actions">
                        <IconFont
                            type="iconchakan"
                            :style="{ fontSize: '16px' }"
                            @click="$router.push('/fitness/diary')"
                        ></IconFont>
                        <IconFont
                            type="icontongji"
                            :style="{ fontSize: '16px' }"
                            @click="$router.push('/fitness/diary')"
                        ></IconFont>
                        <IconFont
                            type="iconxinzeng"
                            :style="{ fontSize: '16px' }"
                            @click="$router.push('/fitness/diary')"
                        ></IconFont>
                    </template>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {};
</script>

<style lang="stylus" scoped></style>