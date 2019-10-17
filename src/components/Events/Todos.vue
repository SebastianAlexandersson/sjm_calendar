<template>
  <div class="todoList">
    <h1>Todos</h1>
    <input type="button" value="Show red group" v-on:click="selectColor('red')" />
    <input type="button" value="Show pink group" v-on:click="selectColor('pink')" />
    <input type="button" value="Show all" v-on:click="selectColor" />

    <div
      v-for="event in events"
      :key="event.id"
      class="todos"
      v-bind:style="{backgroundColor:event.color}"
    >
      <div>{{ event.task }}</div>
      <div>{{ event.body }}</div>
      <div v-if="event.completed">Done!</div>
      <div v-else>Not completed yet</div>
      <div>{{ event.end }}</div>
      <div>{{ event.label }}</div>
    </div>
  </div>
</template>



<script>
export default {
  name: "TodoList",
  data() {
    return {};
  },
  methods: {
    selectColor(color) {
      console.log(color);
      return this.events.filter(event => event.color === color);
    }
  },
  components: {},

  computed: {
    events() {
      return this.$store.state.events.events.filter(
        event => event.type === "Todo"
      );
    }
  },
  created() {
    this.$store.dispatch("getEvents");
  }
};
</script>

<style scoped>
.todoList {
  padding: 3rem;
}
.todos {
  padding: 1.1rem;
  margin-bottom: 1rem;
}
</style>>

