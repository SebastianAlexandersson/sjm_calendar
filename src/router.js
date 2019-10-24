import Vue from 'vue';
import Router from 'vue-router';
import Todos from './components/Events/Todos.vue';
import Calendar from './components/Calendar/Calendar.vue';
import EventForm from './components/eventForm/EventForm.vue';
import UpdateEvent from './components/eventForm/UpdateEvent.vue';
import DayView from './components/dayView/DayView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/day-view/:date',
      name: 'DayView',
      component: DayView,
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
    {
      path: '/create-event',
      name: 'EventForm',
      component: EventForm,
    },
    {
      path: '/update-event',
      name: 'UpdateEvent',
      component: UpdateEvent,
    },
  ],
});
