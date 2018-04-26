import Vue from 'vue'
import Router from 'vue-router'
import OrderIndex from '../component/OrderIndex'
// import OrderBuy from '../../orderBuy/component/OrderBuy'
// import BatchSearch from '../../batchSearch/component/BatchSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component:OrderIndex
    },
    {
      path:'/orderindex',
      name:'OrderIndex',
      component: OrderIndex
    },
    // {
    //   path:'/orderbuy',
    //   name:'OrderBuy',
    //   component: OrderBuy
    // },
    // {
    //   path:'/batchsearch',
    //   name:'BatchSearch',
    //   component: BatchSearch
    // }
  ]
})
