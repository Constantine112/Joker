import Vue from 'vue'
import App from './App'
import router from './route'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
Vue.use(iView)
Vue.config.productionTip = false
process.on('unhandledRejection', error => {
    // Won't execute
    console.log('unhandledRejection', error.test);
  });
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})