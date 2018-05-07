import Vue from 'vue'
import Router from 'vue-router'

import OrderSearch from '../component/OrderSearch'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: OrderSearch
    },

  ]
})
