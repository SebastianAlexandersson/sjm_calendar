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
  template: '<input v-on:click="onClick" type="button" value="Add new Todo">'
})

Vue.component('modify-todo', {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    onClick() {

    }
  },
  template: '<input v-on:click="onClick" type="button" value="Edit">'
})

Vue.component('delete-todo', {
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
