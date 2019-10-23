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
      <div class='eventCompleted' v-if='event.completed'>Done!</div>
      <div class='eventCompleted' v-else>Not completed yet</div>
      <div class='eventBody'>{{ event.body }}</div>
      <div class='eventLabels' > Labels:
        <div class='singleLabel'>
          <div v-for="label in event.labels" :key='label.index'>{{ label }}</div>
        </div>
      </div>
      <div class='eventEndDate'>Deadline: {{ event.end }}</div>
      <div class='eventButtons'>
        <button class='eventButton' v-on:click='callEditModal(event)'>Edit todo</button>
        <button class='eventButton' v-on:click='callDeleteModal(event)'>Delete todo</button>
      </div>
    </div>
    <div>
      <PoseTransition>
        <!-- // Show event -->
        <Shade
          v-on:click.native='closeModal'
          class='shade'
          v-if='isShowVisible'
          v-bind:todo='todoModal'
        >
          <Modal class='modal'>
            <div class='header'>
              <h3>{{todo.task}}</h3>
            </div>
            <div class='body'>
              <h5 class='start'>Color group: {{todo.color}}</h5>
              <h5 class='start'>Labels: {{todo.lable}}</h5>
              <h5 class='start'>End date: {{todo.end}}</h5>
              <h5 class='start'>
                Completed?:
                <div v-if='todo.completed'>Done!</div>
                <div v-else>Not completed yet</div>
              </h5>
              <p>{{todo.body}}</p>
            </div>
          </Modal>
        </Shade>
      </PoseTransition>
    </div>
    <div>
      <PoseTransition>
        <!-- Add event -->
        <Shade class='shade' v-if='isAddVisible' v-bind='newTodo'>
          <Modal class='modal'>
            <div class='header'>
              <input v-model='newTodo.task' placeholder='Add a task name' />
              <select v-model='newTodo.color'>
                <option disabled value>Choose a color</option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Blue</option>
                <option>Orange</option>
                <option>Pink</option>
              </select>
            </div>
            <div class='body'>
              <input class='end' v-model='newTodo.end' placeholder='YYYYMMDD' />
              <input
                v-model='addLabel'
                placeholder='Add text here'
                v-on:keyup.enter='pushLabel(addLabel)'
              />
              <input v-model='newTodo.body' placeholder='Add text here' />
              <button v-on:click='saveNewTodo(newTodo)'>Save</button>
              <button v-on:click='closeModal'>Cancel</button>
            </div>
          </Modal>
        </Shade>
      </PoseTransition>
    </div>
    <div>
      <PoseTransition>
        <!-- Edit event -->
        <Shade class='shade' v-if='isEditVisible' v-bind:todo='todoModal'>
          <Modal class='modal'>
            <div class='header'>
              <input v-model='todo.task' placeholder='todo.task' />
              <select v-model='todo.color'>
                <option disabled value>{{ todo.color }}</option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Blue</option>
                <option>Orange</option>
                <option>Pink</option>
              </select>
            </div>
            <div class='body'>
              <input type='radio' id='one' v-bind:value='true' v-model='todo.completed' />
              <label for='one'>Done</label>
              <br />
              <input type='radio' id='two' v-bind:value='false' v-model='todo.completed' />
              <label for='two'>Not yet.</label>
              <br />
              <input class='end' v-model='todo.end' placeholder='todo.end' />
              <input v-model='todo.body' placeholder='todo.body' />
              <button v-on:click='editTodo(todo)'>Save</button>
              <button v-on:click='closeModal'>Cancel</button>
            </div>
          </Modal>
        </Shade>
      </PoseTransition>
    </div>
    <div>
      <PoseTransition>
        <!-- // Delete event -->
        <Shade class='shade' v-if='isDeleteVisible' v-bind:todo='todoModal'>
          <Modal class='modal'>
            <div class='header'>
              <h4>Are you sure you want to delete this event?</h4>
              <h3>{{todo.task}}</h3>
            </div>
            <div class='body'>
              <button v-on:click='deleteTodo(todo)'>Delete</button>
              <button v-on:click='closeModal'>Cancel</button>
            </div>
          </Modal>
        </Shade>
      </PoseTransition>
    </div>
  </div>
</div>
</template>

<script>
import posed, { PoseTransition } from 'vue-pose';

export default {
  name: 'TodoList',
  data() {
    return {
      isAddVisible: false,
      isEditVisible: false,
      isDeleteVisible: false,
      isShowVisible: false,
      todoModal: {},

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
      addLable: '',
      allLabels: [],
      allColors: [],
    };
  },
  components: {
    PoseTransition,

    Shade: posed.div({
      enter: {
        opacity: 1,
        beforeChildren: true,
        transition: { duration: 200, ease: 'linear' },
      },
      exit: {
        opacity: 0,
        afterChildren: true,
        transition: { duration: 200, ease: 'linear' },
      },
    }),
    Modal: posed.div({
      enter: { opacity: 1, z: 0 },
      exit: { opacity: 0, z: -150 },
    }),
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
      this.$store.dispatch('addEvent', payload);
      this.isAddVisible = false;
      this.created();
    },
    editTodo(payload) {
      this.$store.dispatch('updateEvent', payload);
      this.isEditVisible = false;
    },
    deleteTodo(payload) {
      this.$store.dispatch('deleteEvent', payload.id);
      this.isDeleteVisible = false;
      this.resetTodoObject();
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
      for (let a = 0; a < this.events.length; a += 1) {
        for (let i = 0; i < this.events[a].labels.length; i += 1) {
          if (!(this.allLabels.includes(this.events[a].labels[i]))) {
            console.log(this.events[a].labels[i]);
            this.allLabels.push(this.events[a].labels[i]);
          }
        }
      }
      console.log('this.allLabels');
      console.log(this.allLabels);
    },
    searchColors() {
      for (let a = 0; a < this.events.length; a += 1) {
        if (!(this.allColors.includes(this.events[a].color))) {
          console.log(this.events[a].color);
          this.allColors.push(this.events[a].color);
        }
      }
      console.log('this.allColors');
      console.log(this.allColors);
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
    this.$store.dispatch('getEvents').then(this.searchLabels()).then(this.searchColors());
  },
  // }
};
</script>

<style scoped>
.todoList {
  margin-top: 3rem;
  border-radius: 1rem;
  overflow: hidden;
  padding: 3rem;
  text-align: center;
  background-color: var(--blue);
   /* rgb(50, 99, 198); */
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
  background-color: rgb(233, 233, 233);
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
.todos .eventTask:hover{
 cursor: pointer;
}
.todos .eventCompleted{
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  font-size: var(--XS);
  margin-bottom: 1rem;
}
.todos .eventBody{
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  margin-bottom: 1rem;
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
  grid-row-end: 3;
  font-size: var(--S);
  margin-bottom: 1rem;
}
.todos .eventLabels .singleLabel{
  font-size:var(--xs);
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

.shade {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  perspective: 500px;
  transform: translateZ(0);
}

.modal {
  max-width: 50rem;
  min-height: 250px;
  background: white;
  border-radius: 10px;
  padding: 1rem 1.5rem;
}

.modal .header {
  font-size: 2.1rem;
  text-transform: capitalize;
  border-bottom: 2px solid var(--dark-primary);
  margin: 0 0 2rem 0;
}

.modal .body {
  padding: 1rem 0.6rem;
}
.modal .body h5 {
  font-size: 1.2rem;
  margin-right: auto;
}

.modal .body p {
  font-size: 1.2rem;
  line-height: 2rem;
}
</style>>
