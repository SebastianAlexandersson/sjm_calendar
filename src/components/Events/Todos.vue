<template>
  <div class="todoList">
    <h1>Todos</h1>
    <div v-for="todo in this.$store.state.todos.todos" :key="todo.id">
      <h3 class>{{todo.text}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList"
};
</script>

<style scoped>
.todoList {
  padding: 3rem;
}
</style>>