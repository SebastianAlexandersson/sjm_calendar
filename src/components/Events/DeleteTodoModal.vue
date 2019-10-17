<template>
  <div class="modal">
    <div class="content">
      <h1>Are you sure that you want to delete this Todo?</h1>
      <h2>{{ this.todo.title }}</h2>
      <input type="button" value="Delete" v-on:click="deleteTodo" class="buttons" />
      <input type="button" value="Cancel" v-on:click="cancelAction" class="buttons" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    deleteTodo() {},
    cancelAction() {
      modal.style.display - none;
    },
    props: ["todo"]
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
