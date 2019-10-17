<template>
  <div class="modal">
    <input type="button" value="Edit" v-on:click="editTodo" class="buttons" />
    <input type="button" value="Cancel" v-on:click="cancelAction" class="buttons" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    editTodo() {},
    cancelAction() {
      modal.style.display - none;
    }
  },
  props: ["todo"]
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
