import Vue from 'vue'
import App from './App'
import router from './route'
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})