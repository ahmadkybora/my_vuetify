import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import "@mdi/font/css/materialdesignicons.css";
import Datefilter from './filters/date';

Vue.config.productionTip = false;
Vue.filter('', Datefilter);
Vue.use(vuetify, {
  iconfont: "mdi"
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
