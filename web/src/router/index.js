import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routersList'

Vue.use(VueRouter)

const routes = routers

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    base: process.env.BASE_URL,
    routes
})

router.afterEach(to => {
    document.title = to.meta.title
})

export default router