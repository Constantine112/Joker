import Vue from 'vue'
import Router from 'vue-router'

import OrderBuy from '../component/OrderBuy'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: OrderBuy
    },

    {
      path:'/orderbuy',
      name:'OrderBuy',
      component: OrderBuy
    },



  ]
})
