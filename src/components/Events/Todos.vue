<template>
<div>
<div  class='todoList'>
  <h1>Todos</h1>
    <select class='eventSelectorColor'>
      <option v-on:click='selectColor("")'>Show all colors</option>
      <option v-for='color in allColors'
      :key='color.index'
      v-on:click='selectColor(color)'> {{ color }} </option>
    </select>
     <select class='eventSelectorLabel'>
      <option v-on:click='selectLabel(true)'>Show all labels</option>
      <option v-for='label in allLabels'
      :key='label.index'
      v-on:click='selectLabel(label)'> {{ label }} </option>
     </select>
  <button class='eventButton' v-on:click='callAddModal()'>Add New Todo</button>
</div>

<div>
    <div
      v-for='event in events'
      :key='event.id'
      class='todos'
    >
      <div class='eventColor' v-bind:style='{backgroundColor:event.color}'></div>
      <div class='eventTask' v-on:click='callShowModal(event)'>{{ event.task }}</div>
      <div class='eventBody'>{{ event.body }}</div>
      <div class='eventLabels'> Labels:
        <ul class='singleLabel'>
          <li v-for="label in event.labels" :key='label.index'>{{ label }}</li>
        </ul>
      </div>
      <div class='eventEndDate'>Deadline: {{ event.end }}</div>
      <div class='eventButtons'>
        <button class='eventButton' v-on:click='callEditModal(event)'>Edit todo</button>
        <button class='eventButton' v-on:click='callDeleteModal(event)'>Delete todo</button>
      </div>
    </div>
    <AddEvent  v-if='isAddVisible' v-on:close="closeModal" v-on:save='saveNewTodo'/>
    <EditEvent  v-if='isEditVisible'
    v-bind:editThisTodo='todo'
    v-on:close='closeModal'
    v-on:edit='editTodo'/>
    <DeleteEvent  v-if='isDeleteVisible'
    v-bind:deleteThisTodo='todo'
    v-on:close='closeModal'
    v-on:delete='deleteTodo'/>
  </div>
</div>
</template>

<script>
import AddEvent from './AddEvent.vue';
import EditEvent from './EditEvent.vue';
import DeleteEvent from './DeleteEvent.vue';

export default {
  name: 'TodoList',
  data() {
    return {
      isAddVisible: false,
      isEditVisible: false,
      isDeleteVisible: false,
      isShowVisible: false,
      newTodo: {
        task: '',
        completed: false,
        type: 'Todo',
        room: '',
        body: '',
        start: '',
        end: '',
        color: '',
        labels: [],
        startTime: '',
        endTime: '',
      },
      choosenColor: '',
      choosenLabel: true,
      addLabel: '',
      allLabels: [],
      allColors: [],
    };
  },
  components: {
    AddEvent,
    EditEvent,
    DeleteEvent,
  },
  methods: {
    selectColor(color) {
      this.choosenColor = color;
    },
    selectLabel(label) {
      this.choosenLabel = label;
    },
    callShowModal(modalObject) {
      this.todo = modalObject;
      this.isShowVisible = true;
    },
    callAddModal() {
      this.isAddVisible = true;
    },
    callEditModal(modalObject) {
      this.todo = modalObject;
      this.isEditVisible = true;
    },
    callDeleteModal(modalObject) {
      this.todo = modalObject;
      this.isDeleteVisible = true;
    },
    closeModal() {
      this.isAddVisible = false;
      this.isEditVisible = false;
      this.isDeleteVisible = false;
      this.isShowVisible = false;
      this.resetTodoObject();
    },
    saveNewTodo(payload) {
      console.log(payload);
      this.$store.dispatch('addEvent', payload).then(this.searchLabels).then(this.searchColors);
      this.isAddVisible = false;
    },
    editTodo(payload) {
      this.$store.dispatch('updateEvent', payload).then(this.searchLabels).then(this.searchColors);
      this.isEditVisible = false;
    },
    deleteTodo(payload) {
      this.$store.dispatch('deleteEvent', payload.id).then(this.searchLabels).then(this.searchColors);
      this.isDeleteVisible = false;
    },
    resetTodoObject() {
      this.newTodo.task = '';
      this.newTodo.completed = false;
      this.newTodo.type = 'Todo';
      this.newTodo.room = '';
      this.newTodo.body = '';
      this.newTodo.start = '';
      this.newTodo.end = '';
      this.newTodo.color = '';
      this.newTodo.labels = [];
      this.newTodo.startTime = '';
      this.newTodo.endTime = '';
    },
    pushLabel(label) {
      this.newTodo.labels.push(label);
      this.addLabel = '';
    },
    searchLabels() {
      this.allLabels = [];
      for (let a = 0; a < this.events.length; a += 1) {
        for (let i = 0; i < this.events[a].labels.length; i += 1) {
          if (!(this.allLabels.includes(this.events[a].labels[i]))) {
            this.allLabels.push(this.events[a].labels[i]);
          }
        }
      }
    },
    searchColors() {
      this.allColors = [];
      for (let a = 0; a < this.events.length; a += 1) {
        if (!(this.allColors.includes(this.events[a].color))) {
          this.allColors.push(this.events[a].color);
        }
      }
    },
  },
  computed: {
    events() {
      return this.$store.state.events.events.filter(
        event => event.type === 'Todo'
        && (event.color === this.choosenColor || this.choosenColor === '')
        && (event.labels.includes(this.choosenLabel) || this.choosenLabel === true),
      );
    },
  },
  created() {
    this.$store.dispatch('getEvents').then(this.searchLabels).then(this.searchColors);
  },
};
</script>

<style scoped>
.todoList {
  border-radius: 1rem;
  overflow: hidden;
  padding: 3rem;
  text-align: center;
  background-color: var(--blue);
  color: var(--white);
}
.todoList h1{
  font-size: var(--L);
}
.eventSelectorColor{
  border-radius: 1rem;
  margin: 0.3rem 0.5rem;
}
.eventSelectorLabel{
  border-radius: 1rem;
  margin: 0.3rem 0.5rem;
}
.todos {
  display: grid;
  grid-template-columns: 10% auto 20%;
  grid-template-rows: 20% 20% auto 20% 10%;
  padding: 1.1rem;
  margin-top: 1rem;
  background-color: #fff;
  border-radius: 1rem;
}
.todos .eventColor{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 6;

  margin-right: 3rem;
  border-radius: 1.5rem;
  overflow: hidden;
}
.todos .eventTask{
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: var(--M);
  margin-bottom: 1rem;
}
.todos .eventCompleted{
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  font-size: var(--xs);
  margin-bottom: 1rem;
}
.todos .eventBody{
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  margin-bottom: 1rem;
  font-size: var(--xs);
}
.todos .eventEndDate{
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  font-size: var(--S);
  margin-bottom: 1rem;
}
.todos .eventLabels{
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 6;
  font-size: var(--S);
  margin-bottom: 1rem;
  margin-left: 1rem;
}
.todos .eventLabels .singleLabel{
  font-size:var(--xs);
  margin-top: 1rem;
}
.eventButtons{
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  display: block;
}
.eventButton{

  display: inline-block;
  height: 2rem;
  width: 8rem;
  text-align: center;
  border-radius: 1rem;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
}
.eventButton:hover{
  cursor: pointer;
}

@media (min-width: 0px) {
.todos .eventColor{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 6;
  width: 35px;
  margin-right: 1rem;
  border-radius: 1.5rem;
  overflow: hidden;
}
}

@media (min-width: 576px) {
.todos .eventColor{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 6;
  margin-right: 1rem;
  border-radius: 1.5rem;
  overflow: hidden;
}
}

@media (min-width: 768px) {
  .main-page {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .main-page {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .main-page {
    max-width: 1140px;
  }
}
</style>>
