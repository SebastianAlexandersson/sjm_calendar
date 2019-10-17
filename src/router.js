import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/day-view',
      name: 'DayView',
      component: () => import('./components/dayView/DayView'),
    },
    {
      path: '/event-form',
      name: 'EventForm',
      component: () => import('./components/eventForm/EventForm'),
    },
  ],
});
