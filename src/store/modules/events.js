// import moment from 'moment';

const state = {
  events: [],
  current: null,
  loading: false,
  getDateForDayView: null,
};
// const getters = {};

const actions = {
  setLoading({ commit }) {
    commit('loading');
  },
  async getEvents({ commit }) {
    const res = await fetch('http://localhost:4000/events');
    const data = await res.json();
    commit('setEvents', data);
  },
  async addEvent({ commit }, event) {
    const res = await fetch('http://localhost:4000/events', {
      method: 'post',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    commit('newEvent', data);
  },
  async updateEvent({ commit }, event) {
    const res = await fetch(`http://localhost:4000/events/${event.id}`, {
      method: 'PUT',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    await commit('editEvent', data);
    await this.dispatch('getEvents');
  },
  async searchEvents({ commit }, text) {
    const res = await fetch(`http://localhost:4000/events?q=${text}`);
    const data = await res.json();
    await commit('findEvent', data);
  },

  async deleteEvent({ commit }, id) {
    await fetch(`http://localhost:4000/events/${id}`, {
      method: 'DELETE',
    });
    commit('removeEvent', id);
    await this.dispatch('getEvents');
  },
  setCurrent({ commit }, event) {
    commit('setCurrentValue', event);
  },
  getDataForDateView({ commit }, date) {
    commit('date', date);
  },
};

const mutations = {
  setEvents(commit, data) {
    state.loading = false;
    state.events = data;
  },
  findEvent(state, data) {
    state.events = data;
  },
  newEvent(state, event) {
    state.events.push(event);
  },

  editEvent(state, payload) {
    state.events.map(event => (event.id === payload.id ? payload : event));
  },
  removeEvent(state, payload) {
    const removedEvent = state.events.filter(event => event.id !== payload.id);
    return removedEvent;
  },
  setCurrentValue(state, payload) {
    state.current = payload;
  },
  loading(state) {
    state.loading = true;
  },
  setDateForDayView(state, payload) {
    state.getDateForDayView = payload;
  },
  date(state, payload) {
    state.getDateForDayView = payload;
  },
};

export default {
  state,
  actions,
  mutations,
};
