import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';
import calendar from "./modules/calendar"

Vue.use(Vuex);
export default new Vuex.Store({
 modules: {
   todos,
   calendar
 },
});