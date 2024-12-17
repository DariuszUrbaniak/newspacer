import Vue from 'vue';
import Router from 'vue-router';
import AboutPage from './views/About.vue';
import SearchPage from './views/Search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: SearchPage,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage,
    },
  ],
});
