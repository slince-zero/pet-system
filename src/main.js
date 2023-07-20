import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import './api/mock'
import Cookies from 'js-cookie'

Vue.config.productionTip = false

Vue.use(ElementUI)

// 添加全局前置导航守卫
router.beforeEach((to, from,next) => {
  // 判断token是否存在，若不存在，跳转至登录页
  const token = Cookies.get('token')
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'home' })
  } else {
    next()
  }
})


new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
