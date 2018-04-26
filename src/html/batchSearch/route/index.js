import Vue from 'vue'
import Router from 'vue-router'

import OrderIndex from '../../orderIndex/component/OrderIndex'
import BatchSearch from '../component/BatchSearch'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: BatchSearch
    },
    {
      path:'/orderindex',
      name:'OrderIndex',
      component: OrderIndex
    },
    {
      path:'/batchsearch',
      name:'BatchSearch',
      component: BatchSearch
    },


  ]
})
