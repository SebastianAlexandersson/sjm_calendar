import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);




export default new Vuex.Store({
  state: {
    events: {},
  },
  mutations: {
    addTodo(newTodo) {
      events.push(newTodo)
    },
    modifyTodo(modifiedTodo) {
      // Find id of todo and replace with argumented todo
    },
    deleteTodo(deleteTodo) {
      // find id of todo and delete this object.
    }


  },
  actions: {

  },
});
