<template>
  <div>
    <PoseTransition>
      <!-- Add event -->
      <Shade class='shade'>
        <Modal class='modal'>
          <div class='header'>
            <input class='todoTask' v-model='newTodo.task' placeholder='Add a task name' />
          </div>
          <div class='body'>
            <select class='todoColor' v-model='newTodo.color'>
              <option disabled value>Choose a color</option>
              <option>Red</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Blue</option>
              <option>Orange</option>
              <option>Pink</option>
            </select>
            <input type='date' class='endDate' v-model='newTodo.end' placeholder='YYYYMMDD' />
            <input
              class='todoLabels'
              v-model='addLabel'
              placeholder='Add labels here'
              v-on:keyup.enter='pushLabel(addLabel)'
            />
            <div class='newLabels'>
              <div v-for="label in newTodo.labels" v-bind:key='label.id'> {{ label }}</div>
            </div>
            <input class='todoBody' v-model='newTodo.body' placeholder='Add text here' />
            <div id='buttons'>
              <button class='eventButton' v-on:click='saveTodo(newTodo)'>Save</button>
              <button class='eventButton' id='cancel' v-on:click='closeModal'>Cancel</button>
            </div>
          </div>
        </Modal>
      </Shade>
    </PoseTransition>
  </div>
</template>

<script>
import posed, { PoseTransition } from 'vue-pose';

export default {
  name: 'AddEvent',
  data() {
    return {
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
      addLabel: '',

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
    pushLabel(label) {
      this.newTodo.labels.push(label);
      this.addLabel = '';
    },
    saveTodo(payload) {
      this.$emit('save', payload);
    },
    closeModal() {
      this.$emit('close');
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
      this.addLabel = '';
    },
  },
  created() {
    this.resetTodoObject();
  },
};
</script>

<style scoped>


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
  border-radius: 1rem;

}

.modal .header {
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  overflow: hidden;
  padding: 1rem;
  text-align: center;
  background-color: var(--blue);
  color: var(--white);
  font-size: 2.1rem;
}
.modal .todoTask {
  width: auto;
  margin-bottom: 1rem;
  text-align: center;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
}

.modal .body {
  text-align: center;
  padding: 1rem 0.6rem;
  display: grid;
  width: 50rem;
  grid-template-columns: 30% auto 30%;
  grid-template-rows: 20% 20% auto 20% 10%;

}

.todoColor{
  text-align: center;
  width: auto;
  font-size: 1rem;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
}
.todoLabels{
  text-align: center;
  width: auto;
  font-size: 1rem;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}
.newLabels{
  text-align: center;
  width: auto;
  font-size: 1rem;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 6;
}
.endDate{
  text-align: center;
  font-size: 1rem;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 1;
}
.todoBody{
  text-align: center;
  font-size: 1rem;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}

#buttons {
  margin: 1rem;
  display: flex;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
}
.eventButton{
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
#cancel {
  background-color: var(--danger)
}

@media (min-width: 0px) {
.shade .modal {
  max-width: 30rem;
  min-width: 20rem;
}
.modal .body {
  width: 30rem;
}
}

@media (min-width: 576px) {
.shade .modal {
  max-width: 30rem;
  min-width: 20rem;
}
.modal .body {
  width: 30rem;
}
}

@media (min-width: 768px) {
.shade .modal {
  max-width: 40rem;
  min-width: 30rem;
}
.modal .body {
  width: 40rem;
}
}

@media (min-width: 992px) {
.shade .modal {
  max-width: 50rem;
  min-width: 40rem;
}
.modal .body {
  width: 50rem;
}
}

@media (min-width: 1200px) {
.shade .modal {
  max-width: 50rem;
  min-width: 40rem;
}
.modal .body {
  width: 50rem;
}
}

</style>
