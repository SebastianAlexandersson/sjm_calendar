<template>
    <div>
      <PoseTransition>
        <Shade class='shade'>
          <Modal class='modal'>
            <div class='header'>
              <div class='deleteEvent'>Delete this event?</div>
            </div>
            <div class='eventTitle'> {{todo.task}} </div>
            <div class='body'>
              <button class='eventButton' id="delete" v-on:click='deleteTodo(todo)'>Delete</button>
              <button class='eventButton' v-on:click='closeModal'>Cancel</button>
            </div>
          </Modal>
        </Shade>
      </PoseTransition>
    </div>
</template>

<script>
import posed, { PoseTransition } from 'vue-pose';

export default {
  name: 'DeleteEvent',
  created() {
    this.todo = this.deleteThisTodo;
  },
  data() {
    return {
      addLabel: '',
      todo: {},
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
    deleteTodo(payload) {
      this.$emit('delete', payload);
    },
    closeModal() {
      this.$emit('close');
    },
  },
  props: ['deleteThisTodo'],
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
.modal .header .deleteEvent {
  margin-bottom: 1rem;
  font-weight: 800;
  text-align: center;
}
.modal .eventTitle {
  margin-bottom: 2rem;
  text-align: center;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
}

.body {
  padding: 1rem 0.6rem;
  display: flex;
  justify-content: center;
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
#delete {
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
