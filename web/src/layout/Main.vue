<template>
    <a-layout id="components-layout-demo-top" class="layout">
        <a-layout-header>
            <div class="logo" />
        </a-layout-header>
        <a-layout-content class="layout-content" style="padding: 10px">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </a-layout-content>
        <a-layout-footer
            style="background: '#ffffff';text-align: center"
        >Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
</template>

<style scoped>
.layout {
    min-height: 100vh;
}
</style>


