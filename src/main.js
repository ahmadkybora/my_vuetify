import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuetify from './plugins/vuetify';
//import '../node_modules/@mdi/font/css/materialdesignicons.min.css';
import Datefilter from './filters/date';
import Alert from './components/Shared/Alert';

Vue.config.productionTip = false;
Vue.filter('date', Datefilter);
Vue.component('app-alert', Alert);
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
})

new Vue({
  router,
  store,
  Vuetify,
  render: h => h(App)
}).$mount('#app');
