import uuid from "uuid/v4"

// Prototype object
// id 
// type
// category i.e. green, rea
// startTime
// stopTime
// deadlineTime
// titleText
// bodyText




const state = {
  events: [{
      id: uuid(),
      text: 'Go Out with the dog',
      completed: false,
      start: Date.now().toLocaleString(),
      end: Date.now() + 5,
    },
    {
      id: uuid(),
      text: 'Meeting ',
      completed: false,
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
}
const getters = {
  allEvents: state => state.events
}
const actions = {
  //
}

export default {
  state,
  actions
}
