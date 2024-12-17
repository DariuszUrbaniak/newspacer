import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './views/Home.vue';
import AboutPage from './views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage,
    },
  ],
});
