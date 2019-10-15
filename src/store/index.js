import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/events';
import calendar from "./modules/calendar"

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    events,
    todos,
    calendar
  },
});
