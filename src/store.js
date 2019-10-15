import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eventObject: { // Master object for all types of event i.e. Meetings and Todos.
      eventId, // a random generated Id:number ---> 
      eventGroup, // Group color i.e. Red,Green.....
      eventType, // Todo or Meeting
      eventStartTime, // Start time of the Meeting
      eventStopTime, // Stop time of the Meeting
      eventDedline, // Deadline for Todo
      eventHeadline, // Event headline
      eventText, // Event text for body


    }
  },
  mutations: {

  },
  actions: {

  },
});
