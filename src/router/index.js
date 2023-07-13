import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home'
import User from '../views/User'
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [

    // 主路由
    {
        path: '/',
        component: Main,
        // 子路由
        children: [
            {
                path: '/home',
                component: Home
            },
            {
                path: '/user',
                component: User
            }
        ]
    },

]

export default new VueRouter({
    routes
})


