import Vue from 'vue'
import App from './App'

// import router from './route'
import store from './store'
Vue.config.productionTip = false
process.on('unhandledRejection', error => {
  // Won't execute
  console.log('unhandledRejection', error.test);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  store,
  template: '<App/>',
  components: { App }
})
