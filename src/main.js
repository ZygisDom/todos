import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import './assets/styles.scss'
import router from './router'
import './icons'
//import {store} from "@/store/store";

Vue.component('NavBar', require('./components/NavBar.vue'))

Vue.config.productionTip = false

new Vue({
  // store: store,
  router,
  render: h => h(App)
}).$mount('#app')
