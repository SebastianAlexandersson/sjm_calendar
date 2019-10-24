<template>
  <div class="wrapper">
    <div class="form-wrapper">
      <h1>update your event</h1>
      <form>
        <div class="form-group">
          <input type="text" v-model="task" placeholder="task" />
        </div>

        <div class="form-group">
          <select name="type" id="type" v-model="type">
            <option value disabled>Choose Your Event Type</option>
            <option value="Todo">Todo</option>
            <option value="Meeting">Meeting</option>
          </select>
        </div>

        <div class="form-group">
          <select name="startTime" id="startTime" v-model="startTime">
            <option value disabled>Update Your Time</option>
            <option value="00:00">00:00</option>
            <option value="01:00">01:00</option>
            <option value="02:00">02:00</option>
            <option value="03:00">03:00</option>
            <option value="04:00">04:00</option>
            <option value="05:00">05:00</option>
            <option value="06:00">06:00</option>
            <option value="07:00">07:00</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
            <option value="24:00">24:00</option>
          </select>
        </div>

        <div class="form-group">
          <input type="date" id="start" v-model="start" />
        </div>

        <div class="form-group">
          <input type="date" id="end" v-model="end" />
        </div>

        <div class="form-group checkbox-group">
          <label for="checkbox">
            <input type="checkbox" id="important" value="important" v-model="labels" />
          </label>

          <label for="checkbox">
            <input type="checkbox" id="hobby" value="hobby" v-model="labels" />
          </label>

          <label for="checkbox">
            <input type="checkbox" id="home" value="home" v-model="labels" />
          </label>
        </div>

        <div class="form-group">
          <input type="text" id="body" v-model="body" placeholder="about" />
        </div>

        <div class="form-group">
          <input type="submit" value="Update" v-on:click="handleSubmit" />
        </div>
      </form>
    </div>

    <ul class="bg-bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'UpdateEvent',
  data: () => ({
    task: '',
    type: '',
    body: '',
    startTime: '',
    endTime: '',
    start: new Date(),
    end: new Date(),
    labels: []
  }),
  components: {},
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      const payload = {
        id: this.getCurrentState.id,
        task: this.task,
        type: this.type,
        body: this.body,
        start: this.start,
        startTime: this.startTime,
        endTime: this.endTime,
        end: this.end,
        labels: this.labels
      };
      console.log(payload);
      this.$store.dispatch('updateEvent', payload);
      this.$router.push('/');
    }
  },
  computed: {
    getCurrentState() {
      return this.$store.state.events.current;
    },
    created() {
      this.$store.dispatch('getEvents');
    }
  },
  created() {
    if (this.getCurrentState) {
      this.task = this.getCurrentState.task;
      this.type = this.getCurrentState.type;
      this.body = this.getCurrentState.body;
      this.start = this.getCurrentState.start;
      this.startTime = this.getCurrentState.startTime;
      this.end = this.getCurrentState.end;
      this.labels = this.getCurrentState.labels;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
.form-wrapper {
  max-width: 600px;
  margin: 0 auto;
  padding: 80px 0;
  /* height: 400px; */
  text-align: center;
}
.form-wrapper h1 {
  font-size: 3rem;
  transition-duration: 1s;
  transition-timing-function: ease-in-put;
  font-weight: 200;
  text-transform: capitalize;
  background: var(--blue);
  border-radius: 2rem;
  color: var(--white);
  z-index: 5;
  /* clip-path: polygon(2% 20%, 100% 0%, 92% 100%, 4% 100%); */
}

form {
  padding: 2rem 0;
  position: relative;
  z-index: 2;
}

form input {
  appearance: none;
  outline: 0;
  border: 3px solid var(--blue);
  background-color: rgba(5, 5, 5, 0.3);
  border-radius: 0.5rem;
  padding: 10px 15px;
  margin: 5px auto 10px auto;
  display: block;
  text-align: center;
  font-size: 1.2rem;
  color: var(--dark-secondary);
  transition-duration: 0.25s;
  font-weight: 300;
  width: 30rem;
}

form select {
  position: relative;
  display: block;
  width: 30rem;
  margin: 0 auto;
  font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
  font-size: 18px;
  color: #60666d;
}

form input:hover {
  background-color: rgba(5, 5, 5, 0.8);
  color: var(--white);
}

form input:focus {
  background-color: white;
  width: 300px;
  color: var(--blue);
}

form input[type='submit'] {
  appearance: none;
  outline: 0;
  background-color: rgb(50, 99, 198, 0.8);
  border: 0;
  padding: 10px 15px;
  color: var(--white);
  border-radius: 1rem;
  width: 250px;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.25s;
  /* transition: all 300ms ease-in-out; */
}
form input[type='submit']:hover {
  background-color: rgba(5, 5, 5, 0.8);
  transform: scale(1.1);
  z-index: 2;
}
/* TODO: here */
.checkbox-group {
  display: flex;
  width: 2rem;
  position: relative;
  margin: 2rem auto;
  justify-content: center;
}

.checkbox-group input[type='checkbox'] {
  width: 4rem;
  margin: 0 0.5rem;
  border: 2px solid var(--blue);
}
.checkbox-group input[value='important']::after {
  content: 'VIP';
  position: absolute;
  top: -1.5rem;
  right: 5rem;
}
.checkbox-group input[value='home']::after {
  content: 'Home';
  position: absolute;
  top: -1.5rem;
  left: -0.2rem;
}
.checkbox-group input[value='hobby']::after {
  content: 'Hobby';
  position: absolute;
  top: -1.5rem;
  left: 4rem;
}

input[type='checkbox']:checked {
  background: var(--blue);
  font-style: normal;
}

#body {
  height: 10rem;
}

.form-group label {
  font-size: 0.9rem;
}
.form-group input {
}

.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.bg-bubbles li {
  position: absolute;
  list-style: none;
  display: block;
  width: 40px;
  height: 40px;
  background-color: rgba(50, 99, 198, 0.404);
  bottom: -160px;
  animation: square 15s infinite;
  animation: square 15s infinite;
  transition-timing-function: linear;
}
.bg-bubbles li:nth-child(1) {
  left: 10%;
}
.bg-bubbles li:nth-child(2) {
  left: 20%;
  width: 80px;
  height: 80px;
  animation-delay: 2s;
  animation-delay: 2s;
  animation-duration: 17s;
  animation-duration: 17s;
}
.bg-bubbles li:nth-child(3) {
  left: 25%;
  animation-delay: 4s;
  animation-delay: 4s;
}
.bg-bubbles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-duration: 22s;
  animation-duration: 22s;
  background-color: rgba(50, 99, 198, 0.473);
}
.bg-bubbles li:nth-child(5) {
  left: 70%;
}
.bg-bubbles li:nth-child(6) {
  left: 80%;
  width: 120px;
  height: 120px;
  animation-delay: 3s;
  border-radius: 3rem;
  animation-delay: 3s;
  background-color: rgba(50, 99, 198, 0.589);
}
.bg-bubbles li:nth-child(7) {
  left: 32%;
  width: 160px;
  height: 160px;
  animation-delay: 7s;
  animation-delay: 7s;
}
.bg-bubbles li:nth-child(8) {
  left: 55%;
  width: 20px;
  height: 20px;
  animation-delay: 15s;
  animation-delay: 15s;
  animation-duration: 40s;
  animation-duration: 40s;
}
.bg-bubbles li:nth-child(9) {
  left: 25%;
  width: 10px;
  height: 10px;
  animation-delay: 2s;
  animation-delay: 2s;
  animation-duration: 40s;
  animation-duration: 40s;
  background-color: rgba(5, 5, 5, 0.3);
}
.bg-bubbles li:nth-child(10) {
  left: 90%;
  /* width: 160px;
  height: 160px; */
  animation-delay: 11s;
  animation-delay: 11s;
}
@keyframes square {
  0% {
    transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    transform: translateY(-700px) rotate(600deg);
    transform: translateY(-700px) rotate(600deg);
  }
}
@keyframes square {
  0% {
    transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    transform: translateY(-700px) rotate(600deg);
    transform: translateY(-700px) rotate(600deg);
  }
}
@media (max-width: 510px) {
  input[type='text'],
  input[type='date'] {
    width: 20rem;
  }
  select {
    width: 20rem !important;
  }
}
</style>