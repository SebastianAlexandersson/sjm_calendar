import uuid from 'uuid/v4';

const state = {
  todos: [
    {
      id: uuid(),
      text: 'Go Out with the dog',
      completed: false,
      start: Date.now().toLocaleString(),
      end: Date.now() + 5,
    },
    {
      id: uuid(),
      text: 'Meeting ',
      completed: true,
      start: Date.now().toLocaleString(),
      end: Date.now().toLocaleString() + 10,
    },
    {
      id: uuid(),
      text: 'Go Out with the dog',
      completed: false,
      start: Date.now().toLocaleString(),
      end: Date.now().toLocaleString() + 27,
    },
  ],
};
const getters = {
  allTodos: state => state.todos,
};
const actions = {



};


const mutaions = {

};
export default {
  state,
  getters,
  actions,
};
