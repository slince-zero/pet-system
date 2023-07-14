import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home'
import User from '../views/User'
import Main from '../views/Main'
import Mail from '../views/Mail'
import Page1 from '../views/Page1'
import Page2 from '../views/Page2'

Vue.use(VueRouter)

const routes = [

    // 主路由
    {
        path: '/',
        component: Main,
        redirect: '/home',
        // 子路由
        children: [
            {
                path: '/home',
                component: Home
            },
            {
                path: '/user',
                component: User
            },
            {
                path: '/mail',
                component: Mail
            },
            {
                path: '/page1',
                component: Page1
            },
            {
                path: '/page2',
                component: Page2
            }
        ]
    },

]

export default new VueRouter({
    routes
})


