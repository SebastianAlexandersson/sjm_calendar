<template>
  <div class="todoList">
    <h1>Todos</h1>

    <addTodoModal v-if="showAddModal"></addTodoModal>
    <editTodoModal v-if="showEditModal"></editTodoModal>
    <deleteTodoModal v-if="showDeleteModal" v-on:close-modal="closeModal"></deleteTodoModal>
    <input type="button" v-on:click="showAddTodoModal" value="Add new todo" />

    <div v-for="todo in this.$store.state.todos.todos" :key="todo.id">
      <h3 class>
        {{todo.text}}
        <input
          type="button"
          v-on:click="showeditTodoModal"
          v-bind:todo="this.todo"
          value="Edit this Todo"
        />
        <input
          type="button"
          v-on:click="showDeleteTodoModal"
          v-bind:todo="this.todo"
          value="Delete this Todo"
        />
      </h3>
    </div>
  </div>
</template>



<script>
import addTodoModal from './AddTodoModal'
import editTodoModal from './EditTodoModal'
import deleteTodoModal from './DeleteTodoModal'
export default {
  name: "TodoList",
  data() {
    return {
      showAddModal = false,
      showEditModal = false,
      showDeleteModal = false
    }
  },
  methods: {
    showAddTodoModal(){
      showAddModal = true
    },
    showeditTodoModal(){
      showEditModal = true
    },
    showDeleteTodoModal(){
      showDeleteModal = true
    },
    closeModal(){
      showAddModal = false,
      showEditModal = false,
      showDeleteModal = false
    },

  },
components: {
  addTodoModal
}

};
</script>

<style scoped>
.todoList {
  padding: 3rem;
}
</style>>




// Prototype object
// id 
// type
// category i.e. green, rea
// startTime
// stopTime
// deadlineTime
// titleText
// bodyText