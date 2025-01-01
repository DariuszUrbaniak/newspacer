import Vue from 'vue';
import Router from 'vue-router';
import SearchPage from './views/Search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: SearchPage,
    },
  ],
});
