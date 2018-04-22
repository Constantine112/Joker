import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import OrderIndex from '@/pages/OrderIndex'
import OrderSearch from '@/pages/OrderSearch'
import BatchSearch from '@/pages/BatchSearch'
import OrderBuy from '@/pages/OrderBuy'
import PrinterIndex from '@/pages/PrinterIndex'

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
    {
      path:'/orderindex',
      name:'OrderIndex',
      component: OrderIndex
    },
    {
      path:'/orderbuy',
      name:'OrderBuy',
      component: OrderBuy
    },

    {
      path:'/batchsearch',
      name:'BatchSearch',
      component: BatchSearch
    },
    {
      path:'/printerindex',
      name:'PrinterIndex',
      component: PrinterIndex
    },
    {
      path:'/ordersearch',
      name:'OrderSearch',
      component: OrderSearch
    }

  ]
})
