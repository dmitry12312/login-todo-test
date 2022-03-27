import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/router'
import VueLocalStorage from 'vue-localstorage'
import store from './store'


Vue.config.productionTip = false

Vue.use(VueLocalStorage);
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
