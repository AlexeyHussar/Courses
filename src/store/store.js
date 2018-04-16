import Vue from 'vue';
import Vuex from 'vuex';
import breadcrumbsActions from './breadcrumbsStore/breadcrumbsActions';
import breadcrumbsMutations from './breadcrumbsStore/breadcrumbsMutations';
import breadcrumbsState from './breadcrumbsStore/breadcrumbsState';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    ...breadcrumbsState
  },
  mutations: {
    ...breadcrumbsMutations
  },
  actions: {
    ...breadcrumbsActions
  }
});