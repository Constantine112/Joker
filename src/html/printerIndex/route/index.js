import Vue from 'vue'
import Router from 'vue-router'

import PrinterIndex from '../component/PrinterIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: PrinterIndex
    },
    {
      path:'/printerindex',
      name:'PrinterIndex',
      component: PrinterIndex
    },

  ]
})
