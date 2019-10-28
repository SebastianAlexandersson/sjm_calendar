<template>
    <div>
      <PoseTransition>
        <Shade class='shade'>
          <Modal class='modal'>
            <div class='header'>
              <div class='editEvent'>Edit this event?</div>
            </div>
            <div class='body'>
              <input class='todoTask' v-model='fixTodo.task' placeholder='todo.task' />
              <select class='todoColor' v-model='fixTodo.color'>
                <option disabled value>{{ fixTodo.color }}</option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Blue</option>
                <option>Orange</option>
                <option>Pink</option>
              </select>
              <input class='endDate' v-model='fixTodo.end' placeholder='todo.end' />
              <textarea class='todoBody' v-model='fixTodo.body' placeholder='todo.body' />
              <div class='radioButtons'>
                <input type='radio' id='one' v-bind:value='true' v-model='fixTodo.completed' />
                <label for='one'>Done</label>
                <br />
                <input type='radio' id='two' v-bind:value='false' v-model='fixTodo.completed' />
                <label for='two'>Not yet.</label>
                <br />
              </div>
              <div id='taskLabelText'>Add a few labels</div>
              <input
                class='todoLabels'
                v-model='addLabel'
                v-on:keyup.enter='pushLabel(addLabel)'
              />
              <div class='newLabels'>
                <div class='labels' v-for="label in fixTodo.labels"
                v-bind:key='label.id'> {{ label }}
                  <button v-on:click='removeLabel(label)'>X</button>
                </div>
              </div>
              <div id='buttons'>
                <button class="eventButton" v-on:click='editTodo(fixTodo)'>Save</button>
                <button class="eventButton" id="cancel" v-on:click='closeModal'>Cancel</button>
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
  name: 'EditEvent',
  created() {
    this.fixTodo = this.editThisTodo;
  },
  data() {
    return {
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
      this.fixTodo.labels.push(label);
      this.addLabel = '';
    },
    removeLabel(label) {
      this.fixTodo.labels.splice(this.fixTodo.labels.indexOf(label), 1);
    },
    editTodo(payload) {
      this.$emit('edit', payload);
    },
    closeModal() {
      this.$emit('close');
    },
  },
  props: ['editThisTodo'],
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
  z-index: 15;
  transform: translateZ(0);
}

.modal {
  z-index: 20;
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

.modal .body {
  text-align: center;
  margin-bottom: 1rem;
  padding: 1rem 0.6rem;
  display: grid;
  width: 50rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.3fr 0.3fr 0.3fr 0.3fr 0.3fr 0.3fr 0.3fr 0.5fr;

}

.todoTask {
  text-align: center;
  margin: 1rem;
  font-size: 1.5rem;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.todoColor{
  text-align: center;
  height: 2rem;
  width: auto;
  font-size: 1rem;
  margin: 1rem;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}

.endDate{
  text-align: center;
  margin: 1rem;
  font-size: 1rem;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
}

.todoBody{
  resize: none;
  height: 8rem;
  max-width: 27rem;
  font-size: 1rem;
  margin: 1rem;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
}

.todoLabels{
  margin: 1rem;
  text-align: center;
  width: auto;
  font-size: 1rem;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
}
.newLabels{
  display: flex;
  text-align: center;
  margin-bottom: 1rem;
  margin-right: 1rem;
  width: auto;
  font-size: 1rem;
  justify-content: center;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
}
.newLabels .labels{
  margin: 0.4rem;
}
.radioButtons{
  text-align: center;
  width: auto;
  font-size: 1rem;
  margin: 1rem;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
}

#buttons {
  margin: 1rem;
  display: flex;
  padding: 1rem;
  justify-content: center;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 8;
  grid-row-end: 9;
}
.eventButton{
  display: inline-block;
  text-align: center;
  border-radius: 0.5rem;
  padding: 0.8rem 2rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  background-color: var(--blue);
  color: var(--white);
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
.modal .body {
  width: 30rem;
}
}

@media (min-width: 768px) {
.modal .body {
  width: 30rem;
}
}

@media (min-width: 992px) {
.modal .body {
  width: 30rem;
}
}

@media (min-width: 1200px) {
.modal .body {
  width: 30rem;
}
}

</style>
