import Vue from 'vue';
import Vuex from 'vuex';
import logistic from './modules/logistic/logic/store';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    logistic
  },
  strict: process.env.ENV !== 'prod'
});

export default store;
