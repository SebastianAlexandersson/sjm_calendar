import Vue from 'vue';
import Router from 'vue-router';
import Todos from './components/Events/Todos.vue';
import Calendar from './components/Calendar/Calendar.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/day-view/:date',
      name: 'DayView',
      component: () => import('./components/dayView/DayView'),
    },
    {
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
