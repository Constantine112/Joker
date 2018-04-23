import Vue from 'vue'
import Router from 'vue-router'
import OrderIndex from './../component/OrderIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/orderindex',
      name:'OrderIndex',
      component: OrderIndex
    },
  ]
})
