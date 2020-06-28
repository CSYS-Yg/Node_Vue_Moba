<template>
    <div>
        <a-row :gutter="16">
            <a-col :span="6">
                <a-card hoverable title="训练计划">
                    <p>已坚持 n 天</p>
                    <template slot="actions" class="ant-card-actions">
                        <IconFont
                            type="iconbianji"
                            :style="{ fontSize: '14px' }"
                            @click="$router.push('/fitness/diary')"
                        ></IconFont>
                        <a-icon key="edit" type="edit" />
                        <a-icon key="ellipsis" type="ellipsis" />
                    </template>
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card title="Card title" :hoverable="true" :bordered="false">
                    <p>card content</p>
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card title="Card title" :hoverable="true" :bordered="false">
                    <p>card content</p>
                </a-card>
            </a-col>
            <a-col :span="6">
                <a-card title="Card title" :hoverable="true" :bordered="false">
                    <p>card content</p>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>
