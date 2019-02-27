import Vue from 'vue';
import Vuex from 'vuex';

import infoLicense from './modules/info/license';
import infoFoodBusiness from './modules/info/foodBusiness';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';


export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    infoLicense,
    infoFoodBusiness
  },
  strict: debug,
});



