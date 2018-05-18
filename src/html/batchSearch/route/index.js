import Vue from 'vue'
import Router from 'vue-router'
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
      path:'/batchsearch',
      name:'BatchSearch',
      component: BatchSearch
    },

  ]
})
