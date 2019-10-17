
const state = {
  events: []
}
const getters = {

}
const actions = {
  async getEvents({ commit }) {
    const res = await fetch("http://localhost:4000/events")
    const data = await res.json()
    commit("setEvents", data)
  }
}

const mutations = {
  setEvents(commit, data) {
    state.events = data
  }
}

export default {
  state,
  actions,
  mutations
}
