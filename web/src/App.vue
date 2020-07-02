<template>
    <a-locale-provider :locale="locale">
        <div id="app">
            <router-view></router-view>
        </div>
    </a-locale-provider>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
    name: "App",
    data() {
        return {
            locale: zhCN
        };
    }
};
</script>

<style lang="stylus">
html, body
    margin 0
    padding 0
.iconfont
    font-family 'iconfont' !important
    font-size 16px
    font-style normal
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
</style>

