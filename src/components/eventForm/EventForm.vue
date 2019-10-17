<template>
  <form>
    <div class="form-group">
      <input type="text" v-model="task" />
    </div>

    <div class="form-group">
      <select name="type" id="type" v-model="type">
        <option value="Todo">Todo</option>
        <option value="Meeting">Meeting</option>
      </select>
    </div>

    <div class="form-group">
      <input type="text" id="body" v-model="body" />
    </div>

    <div class="form-group">
      <input type="date" id="start" v-model="start" />
    </div>

    <div class="form-group">
      <input type="date" id="end" v-model="end" />
    </div>

    <div class="form-group">
      <input type="checkbox" id="important" value="important" v-model="labels" />
      <label for="checkbox">Important</label>

      <input type="checkbox" id="hobby" value="hobby" v-model="labels" />
      <label for="checkbox">Hobby</label>

      <input type="checkbox" id="home" value="home" v-model="labels" />
      <label for="checkbox">Home</label>
    </div>

    <div class="form-group">
      <h2>Submit</h2>
      <input type="submit" value="Submit" v-on:click="handleSubmit" />
    </div>
  </form>
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
      console.log(
        this.task,
        this.type,
        this.body,
        this.start,
        this.end,
        this.labels
      );
    }
  }
};
</script>

<style>
</style>