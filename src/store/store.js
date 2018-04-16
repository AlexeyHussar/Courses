import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const computedCrumbs = {
  '/': 'home/',
  '/add-course': 'home/add course'
};

export const store = new Vuex.Store({
  state: {
    breadcrumbs: ''
  },
  mutations: {
    makeTrack(state, payload) {
      state.breadcrumbs = payload;
    }
  },
  actions: {
    makeTrack(context, payload) {
      context.commit('makeTrack', computedCrumbs[payload]);
    }
  }
});