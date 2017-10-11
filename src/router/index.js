import Vue from 'vue';
import Router from 'vue-router';
import LayoutView from '@/views/layout';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LayoutView',
      component: LayoutView
    }
  ]
});
