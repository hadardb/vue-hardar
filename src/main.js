import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Bus from './libs/bus'
if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
