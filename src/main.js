import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from '@/plugins/router';
import requester from '@/plugins/requester.js';


Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router,
  requester
}).$mount('#app');
