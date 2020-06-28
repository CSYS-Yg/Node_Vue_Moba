import Vue from 'vue'
import router from './router'

import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import IconFont from './assets/iconfont'

import api from '~/assets/util/api' // 导入api接口


Vue.config.productionTip = false;
Vue.prototype.$api = api; // 将api挂载到vue的原型上

Vue.component('IconFont', IconFont)
Vue.use(Antd);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
