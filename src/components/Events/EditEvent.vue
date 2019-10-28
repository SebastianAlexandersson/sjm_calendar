<template>
    <div>
      <PoseTransition>
        <Shade class='shade'>
          <Modal class='modal'>
            <div class='header'>
              <div class='editEvent'>Edit this event?</div>
            </div>
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
            <div class='body'>
              <div class='radioButtons'>
                <input type='radio' id='one' v-bind:value='true' v-model='fixTodo.completed' />
                <label for='one'>Done</label>
                <br />
                <input type='radio' id='two' v-bind:value='false' v-model='fixTodo.completed' />
                <label for='two'>Not yet.</label>
                <br />
              </div>
              <input class='endDate' v-model='fixTodo.end' placeholder='todo.end' />
              <input class='todoBody' v-model='fixTodo.body' placeholder='todo.body' />
              <button class="eventButton" v-on:click='editTodo(fixTodo)'>Save</button>
              <button class="eventButton" id="cancel" v-on:click='closeModal'>Cancel</button>
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
      this.newTodo.labels.push(label);
      this.addLabel = '';
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
.modal .header .editEvent {
  margin-bottom: 1rem;
  font-weight: 800;
  text-align: center;
}
.modal .todoTask {
  margin-bottom: 2rem;
  text-align: center;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
}
.todoColor{
    font-size: 2rem;
}
.body {
  padding: 1rem 0.6rem;
  display: grid;

}
.radioButton{
  display: inline-block;
}
.endDate{
  font-size: 2rem;
}
.todoBody{
  font-size: 1rem;
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
.modal .body .eventButton:hover{
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
}

@media (min-width: 576px) {
.shade .modal {
  max-width: 30rem;
  min-width: 20rem;
}
}

@media (min-width: 768px) {
.shade .modal {
  max-width: 40rem;
  min-width: 30rem;
}
}

@media (min-width: 992px) {
.shade .modal {
  max-width: 50rem;
  min-width: 40rem;
}
}

@media (min-width: 1200px) {
.shade .modal {
  max-width: 50rem;
  min-width: 40rem;
}
}

</style>
