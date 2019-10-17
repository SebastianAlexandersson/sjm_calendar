import Vue from 'vue';
import Router from 'vue-router';
import Todos from './components/Events/Todos'
import Calendar from './components/Calendar'

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/Todos',
      name: 'Todos',
      component: Todos,
    },
    {
      path: '/',
      name: 'Calendar',
      component: Calendar,
    },

  ],
});
