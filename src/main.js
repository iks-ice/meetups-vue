import Vue from 'vue';
import App from './App.vue';
import {router} from '@/router/index.js';
import HTTP from '@/plugins/HTTP-Plugin.js';
import "./assets/styles/index.css";
import store from './store'

Vue.config.productionTip = false;

Vue.use(HTTP);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
