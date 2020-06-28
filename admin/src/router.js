import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('./views/Main.vue'),
    }
]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    base: process.env.BASE_URL,
    routes
})

export default router