
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
  async updateEvent({ commit }, event) {
    const res = await fetch(`http://localhost:4000/events/${event.id}`, {
      method: 'PUT',
      body: JSON.stringify(event),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    commit('editEvent', data);
  },
  async searchEvents({ commit }, text) {
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    commit('search_event', data);
  },
};

const mutations = {
  setEvents(commit, data) {
    state.events = data;
  },
  search_event(commit, data) {
    state.events = data;
  },
  newEvent(state, event) {
    state.events.unshift(event);
  },

  editEvent(commit, data) {

  },

};

export default {
  state,
  actions,
  mutations,
};
