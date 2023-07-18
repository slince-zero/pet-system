import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home'
import User from '../views/User'
import Main from '../views/Main'
import Mail from '../views/Mail'
import Page1 from '../views/Page1'
import Page2 from '../views/Page2'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


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
                name: 'home',
                component: Home
            },
            {
                path: '/user',
                name: 'user',
                component: User
            },
            {
                path: '/mail',
                name: 'mail',
                component: Mail
            },
            {
                path: '/page1',
                name: 'page1',
                component: Page1
            },
            {
                path: '/page2',
                name: 'page2',
                component: Page2
            }
        ]
    },

]

export default new VueRouter({
    routes
})


