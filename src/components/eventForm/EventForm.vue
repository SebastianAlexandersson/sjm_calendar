<template>
  <div class="wrapper">
    <div class="form-wrapper">
      <h1>add a avent</h1>
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
          <input type="submit" value="Submit" v-on:click="handleSubmit" />
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
export default {
  name: "EventForm",
  data: () => ({
    task: "",
    type: "",
    body: "",
    start: new Date(),
    end: new Date(),
    labels: []
  }),
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const payload = {
        task: this.task,
        type: this.type,
        body: this.body,
        start: this.start,
        end: this.end,
        labels: this.labels
      };
      // console.log("PAYLOAD !!", payload);
      this.$store.dispatch("addEvent", payload);
      this.$router.push("/day-view");
    }
  }
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
  background: #53e3a6;
  clip-path: polygon(12% 0, 100% 0%, 92% 100%, 4% 100%);
}

form {
  padding: 2rem 0;
  position: relative;
  z-index: 2;
}

form input {
  appearance: none;
  outline: 0;
  border: 1px solid rgba(55, 55, 55, 0.3);
  background-color: rgba(5, 5, 5, 0.3);
  border-radius: 3px;
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
  font-family: "Open Sans", "Helvetica Neue", "Segoe UI", "Calibri", "Arial",
    sans-serif;
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
  color: #53e3a6;
}

form input[type="submit"] {
  appearance: none;
  outline: 0;
  background-color: #53e3a746;
  border: 0;
  padding: 10px 15px;
  color: #53e3a6;
  border-radius: 3px;
  width: 250px;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.25s;
}
form input[type="submit"]:hover {
  background-color: #53e3a79c;
  color: #fff;
}
/* TODO: here */
.checkbox-group {
  display: flex;
  width: 2rem;
  position: relative;
  margin: 2rem auto;
  justify-content: center;
}

.checkbox-group input[type="checkbox"] {
  width: 4rem;
  margin: 0 0.5rem;
  border: 2px solid #53e3a746;
}

input[type="checkbox"]:checked {
  background: #53e3a746;
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
  background-color: #2fe69a48;
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
  background-color: #4ad69c8a;
}
.bg-bubbles li:nth-child(5) {
  left: 70%;
}
.bg-bubbles li:nth-child(6) {
  left: 80%;
  width: 120px;
  height: 120px;
  animation-delay: 3s;
  animation-delay: 3s;
  background-color: #53e3a7c4;
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
</style>