<template>
  <div class="day-wrapper">
    <div class="searchbar">
      <label for="text">
        Search a event...
        <input type="text" @change="handleSearch" />
        <img src="../../images/search.svg" alt="searchIcon" />
      </label>
    </div>
    <div>
      <div class="row" v-for="d in data" v-bind:key="d.id" @click="handleClick(d.time)">
        <span class="time">{{d.time}}</span>
        <div v-for="event in events" v-bind:key="event.id">
          <h3 v-if="d.time === event.startTime && getDateFromParent === event.start">{{event.task}}</h3>
        </div>
        <span class="edit">X</span>
      </div>
      <div>
        <PoseTransition>
          <Shade v-on:click.native="isVisible = false" class="shade" v-if="isVisible">
            <Modal class="modal" v-for="event in events" v-bind:key="event.id">
              <div class="header" v-if="currentTime === event.startTime">
                <h3>{{event.task}}</h3>
              </div>
              <div v-else class="header-no-content">
                <h3>Add a event</h3>
              </div>
              <div class="body" v-if="currentTime === event.startTime">
                <span id="delete" @click="handleDelete(event.id)">Delete</span>
                <h5 class="room">Room:</h5>
                <h5 class="start">Start: {{event.start}}</h5>
                <h5 class="start">End: {{event.end}}</h5>
                <p>{{event.body}}</p>
                <router-link :to="'/create-event'" class="add-event">create new event</router-link>
                <a
                  :to="'/update-event'"
                  @click="handleSetcurrent(event)"
                  class="update-event"
                >update event</a>
              </div>
              <div v-else class="no-event-body">
                <router-link :to="'/create-event'" class="add-event">create new event</router-link>
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
import dayData from './dayViewData';

export default {
  name: 'DayView',
  data: () => ({ isVisible: false, currentTime: null }),
  components: {
    PoseTransition,
    Shade: posed.div({
      enter: {
        opacity: 1,
        beforeChildren: true,
        transition: { duration: 200, ease: 'linear' }
      },
      exit: {
        opacity: 0,
        afterChildren: true,
        transition: { duration: 200, ease: 'linear' }
      }
    }),
    Modal: posed.div({
      enter: { opacity: 1, z: 0 },
      exit: { opacity: 0, z: -150 }
    })
  },
  computed: {
    events() {
      return this.$store.state.events.events.filter(event => event.type === 'Meeting');
    },
    data() {
      return dayData;
    },

    newDaydata(value) {
      const timeArr = dayData.map(data => data.time);

      return timeArr;
    },

    filtredEvents() {
      return this.$store.state.events.events;
    },
    getState() {
      return this.$store.state.events;
    },
    getDateFromParent() {
      return this.$route.params.date;
    }
  },
  created() {
    this.$store.dispatch('getEvents');
  },

  methods: {
    handleDelete(eventId) {
      this.$store.dispatch('deleteEvent', eventId);
    },
    handleSearch(EventText) {
      this.$store.dispatch('searchEvents', eventText);
    },
    handleSetcurrent(event) {
      this.$store.dispatch('setCurrent', event);
      this.$router.push('/update-event');
    },
    handleClick(data) {
      this.isVisible = true;
      this.currentTime = data;
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
.searchbar {
  padding: 1rem;
}
.searchbar label {
  font-size: 1.2rem;
}
.searchbar img {
  width: 1.5rem;
}
.searchbar input {
  position: relative;
  margin-top: 0.5rem;
  margin-right: auto;
  display: block;
  width: 2%;
  cursor: pointer;
  border: 2px solid var(--dark-primary);
  padding: 0.6rem 0.9rem;
  border-radius: 1rem;
  transition: all 300ms ease-in-out;
}
.searchbar input:focus {
  width: 90%;
  margin-left: 0 4rem;
  border: 2px solid var(--blue);
  transform: scale(1.1);
}

.row {
  display: flex;
  border: 2px solid var(--dark-primary);
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  margin: 0.12rem 0;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  box-shadow: 1px 1px 2px var(--dark-primary);
}

.row h3 {
  font-size: 1.3rem;
  letter-spacing: 0.5rem;
  border-bottom: 1px solid var(--dark-primary);
}

.row:hover {
  background: var(--blue);
  color: var(--white);
  box-shadow: 2px 2px 3px var(--dark-primary);
  z-index: 2;
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
  position: relative;
}
.modal #delete {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  cursor: pointer;
  font-size: 1.1rem;
}

.modal .header,
.header-no-content {
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
  margin-bottom: 2rem;
}

.modal .no-event-body {
  display: flex;
  height: 10rem;
  align-items: flex-end;
  position: relative;
}
.modal .no-event-body a {
  margin-left: auto;
}
.add-event,
.update-event {
  border: 2px solid var(--blue);
  font-size: 1.2rem;
  margin: 1rem 0.54rem;
  padding: 0.2rem 0.8rem;
  color: var(--dark-primary);
  transition: all 300ms ease-in-out;
  cursor: pointer;
}
.update-event:hover,
.add-event:hover {
  color: var(--white);
  background: var(--blue);
  border: 2px solid var(--dark-primary);
}
</style>>

