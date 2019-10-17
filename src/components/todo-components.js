// Generate button for adding a Todo
Vue.component('add-todo', {

  data() {
    return {
      counter: 0
    }
  },
  methods: {
    onClick() {

    }
  },
  template: `<div>
                <input v-on:click="onClick" type="button" value="Add new Todo">
            </div>`
})
// When add-todo button is pressed, open this modal for adding data.
Vue.component('add-todo-modal', {
  created() {
    this.eventId = "newid" // Uuid
    this.eventDedline = "now + 1day?" // Use moment to fix this.

  },
  data() {
    return {
      newTodo: {
        eventId, // a random generated Id:number ---> 
        eventGroup, // Group color i.e. Red,Green.....
        eventType, // Todo or Meeting
        eventStartTime, // Start time of the Meeting
        eventStopTime, // Stop time of the Meeting
        eventDedline, // Deadline for Todo
        eventHeadline, // Event headline
        eventText, // Event text for body
      }
    }
  },
  methods: {
    onClick() {

    }
  },
  template: `<div>
                
            </div>`
})


// Button for modify Todo. One per todo.
Vue.component('modify-todo', {
  props: ['todoEvent'],
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    onClick() {
      // Open modal and use "todoEvent" as payload
    }
  },
  template: '<input v-on:click="onClick" type="button" value="Edit">'
})
// When modify-todo button is pressed, open this modal for modifing data.
Vue.component('modify-todo-modal', {
  props: ['todoEvent'],
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    onClick() {

    }
  },
  template: `<div>
                
            </div>`
})

// Button for delete the todo. Opens an modal to ask if sure to delete.
Vue.component('delete-todo', {
  props: ['todoEvent'],
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    onClick() {

    }
  },
  template: '<input v-on:click="onClick" type="button" value="Delete">'
})
// When delete-todo button is pressed, open this modal for deletion of data.
Vue.component('delete-todo-modal', {
  props: ['todoEvent'],
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    onClick() {
      // delete the event with this ID in store object.
    }
  },
  template: `<div>
                
            </div>`
})
