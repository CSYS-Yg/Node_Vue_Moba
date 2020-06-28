const routers = [
    {
        path: '/',
        name: 'home',
        redirect: '/home',
        component: () => import('~/layout/Main.vue'),
        children: [
            {
                path: 'home',
                meta: { title: '导航页', keepAlive: true },
                component: () => import('~/pages/home/index.vue')
            }
        ]
    },
    {
        path: '/fitness',
        name: 'fitness',
        component: () => import('~/layout/Main.vue'),
        children: [
            {
                path: 'diary',
                meta: { title: '健身日记' },
                component: () => import('~/pages/fitness/diary/index.vue')
            },
            {
                path: 'addNotes',
                meta: { title: '新增记录' },
                component: () => import('~/pages/fitness/addNotes/index.vue')
            }
        ]
    },

    {
        path: '*',
        redirect: '/hide/page404'
    }
]

export default routers;