
const state = {
  events: [],
};
const getters = {

};
const actions = {
  async getEvents({ commit }) {
    const res = await fetch('http://localhost:4000/events');
    const data = await res.json();
    commit('setEvents', data);
  },
  async addEvent({ commit }, event) {
    const res = await fetch('http://localhost:4000/events', { method: 'post', body: JSON.stringify(event), headers: { 'Content-Type': 'application/json' } });
    const data = await res.json();
    commit('newEvent', data);
  },
};

const mutations = {
  setEvents(commit, data) {
    state.events = data;
  },
  newEvent(state, event) {
    state.events = data;
  },

};

export default {
  state,
  actions,
  mutations,
};
