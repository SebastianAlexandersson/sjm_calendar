<template>
  <div class="modal"></div>
</template>
<script>
import uuid from "uuid/v4";
export default {
  methods: {
    createTodo() {
      let newTodo = {};
      newTodo.id = uuid();
      newTodo.type = "Todo";
      newTodo.category = this.category;

      this.$emit("add-new-todo", { newTodo });
    },
    cancelAction() {
      modal.style.display - none;
    }
  }
};
</script>


<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.buttons {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.buttons:hover,
.buttons:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
