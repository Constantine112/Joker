import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/html/login/component/Login'
// import OrderIndex from '@/html/orderIndex/component/OrderIndex'
// import OrderSearch from '@/html/orderSearch/component/OrderSearch'
// import BatchSearch from '@/html/batchSearch/component/BatchSearch'
// import OrderBuy from '@/html/orderBuy/component/OrderBuy'
import PrinterIndex from '@/html/printerIndex/component/PrinterIndex'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '',
    //   name: '',
    //   component: Login
    // },
    // {
    //   path:'/orderindex',
    //   name:'OrderIndex',
    //   component: OrderIndex
    // },
    // {
    //   path:'/orderbuy',
    //   name:'OrderBuy',
    //   component: OrderBuy
    // },

    // {
    //   path:'/batchsearch',
    //   name:'BatchSearch',
    //   component: BatchSearch
    // },
    {
      path:'/printerindex',
      name:'PrinterIndex',
      component: PrinterIndex
    },
    // {
    //   path:'/ordersearch',
    //   name:'OrderSearch',
    //   component: OrderSearch
    // }

  ]
})
