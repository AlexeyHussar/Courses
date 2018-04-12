import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import routes from './routes';
import durationIndicator from './directives';
import showInHoures from './filters'

Vue.config.productionTip = false;

export const bus = new Vue();

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.directive('durationIndicator', durationIndicator);

Vue.filter('showInHoures', showInHoures);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
