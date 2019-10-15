import Vuex from 'vuex';
import Vue from 'vue';
import events from './modules/events';
import todos from './modules/todos';
import calendar from "./modules/calendar"

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    events,
    todos,
    calendar
  },
});
