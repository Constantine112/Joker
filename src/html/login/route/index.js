import Vue from 'vue'
import Router from 'vue-router'
import Login from '../component/login'
import Register from '../component/Register'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/register',
      name:'Register',
      component: Register
    },
  ]
})
