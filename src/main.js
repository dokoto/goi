import Vue from 'vue';
import VueMq from 'vue-mq';
import { sync } from 'vuex-router-sync';
import store from './store';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

sync(store, router);

Vue.use(VueMq, {
  breakpoints: {
    sm: 600,
    md: 768,
    lg: Infinity
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
