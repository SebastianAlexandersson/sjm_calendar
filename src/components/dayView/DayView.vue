<template>
  <div class="day-wrapper">
    <div class="row" v-for="d in data" v-bind:key="d.id">
      <span class="time">{{d.time}}</span>
      <h4 @click="isVisible = true">{{d.text}}</h4>
      <span class="edit">X</span>
    </div>
    <div>
      <PoseTransition>
        <Shade v-on:click.native="isVisible = false" class="shade" v-if="isVisible">
          <Modal class="modal" v-for="event in events" v-bind:key="event.id">
            <div class="header">
              <h3>{{event.task}}</h3>
            </div>
            <div class="body">
              <h5 class="room">Room:</h5>
              <h5 class="start">Start: {{event.start}}</h5>
              <h5 class="start">End: {{event.end}}</h5>
              <p>{{event.body}}</p>
              <button v-on:click="test">Click</button>
            </div>
          </Modal>
        </Shade>
      </PoseTransition>
    </div>
  </div>
</template>

<script>
import posed, { PoseTransition } from "vue-pose";
import dayData from "./dayViewData";
export default {
  name: "DayView",
  data: () => ({ isVisible: false }),
  components: {
    PoseTransition,
    Shade: posed.div({
      enter: {
        opacity: 1,
        beforeChildren: true,
        transition: { duration: 200, ease: "linear" }
      },
      exit: {
        opacity: 0,
        afterChildren: true,
        transition: { duration: 200, ease: "linear" }
      }
    }),
    Modal: posed.div({
      enter: { opacity: 1, z: 0 },
      exit: { opacity: 0, z: -150 }
    })
  },
  computed: {
    events() {
      return this.$store.state.events.events.filter(
        event => event.type === "Meeting"
      );
    },
    data() {
      return dayData;
    }
  },
  created() {
    this.$store.dispatch("getEvents");
  },
  methods: {
    test() {
      alert("click");
    }
  }
};
</script>

<style scoped>
.day-wrapper {
  padding: 1rem;
  box-shadow: 1px 1px 2px var(--dark-primay);
  min-height: 100%;
}
.row {
  display: flex;
  border: 2px solid var(--dark-primary);
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  margin: 0.12rem 0;
  box-shadow: 1px 1px 2px var(--dark-primary);
}

.time {
  font-size: 1.6rem;
}

.row h4 {
  font-size: 2.5rem;
  text-align: center;
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

