<template>
  <div class="todoList">
    <h1>Todos</h1>
    <input type="button" value="Show red group" v-on:click="selectColor('red')" />
    <input type="button" value="Show pink group" v-on:click="selectColor('pink')" />
    <input type="button" value="Show all" v-on:click="selectColor" />
    <input type="button" value="Add New Todo" v-on:click="callAddModal()" />

    <div
      v-for="event in events"
      :key="event.id"
      class="todos"
      v-bind:style="{backgroundColor:event.color}"
    >
      <div v-on:click="callShowModal(event)">{{ event.task }}</div>
      <div>{{ event.body }}</div>
      <div v-if="event.completed">Done!</div>
      <div v-else>Not completed yet</div>
      <div>{{ event.end }}</div>
      <div>{{ event.label }}</div>
    </div>
    <div>
      <PoseTransition>
        // Show event
        <Shade
          v-on:click.native="closeModal"
          class="shade"
          v-if="isShowVisible"
          v-bind:todo="todoModal"
        >
          <Modal class="modal">
            <div class="header">
              <h3>{{todo.task}}</h3>
            </div>
            <div class="body">
              <h5 class="start">Color group: {{todo.color}}</h5>
              <h5 class="start">Labels: {{todo.lable}}</h5>
              <h5 class="start">End date: {{todo.end}}</h5>
              <p>{{todo.body}}</p>
            </div>
          </Modal>
        </Shade>
      </PoseTransition>
    </div>
    <div>
      <PoseTransition>
        // Add event
        <Shade v-on:click.native="closeModal()" class="shade" v-if="isAddVisible" v-bind="newTodo">
          <Modal class="modal">
            <div class="header">
              <input v-model="newTodo.task" placeholder="Add a task name" />
              <select v-model="newTodo.color">
                <option disabled value>Choose a color</option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Blue</option>
                <option>Orange</option>
              </select>
            </div>
            <div class="body">
              <input class="end" v-model="this.newTodo.end" placeholder="YYYYMMDD" />
              <input v-model="this.newTodo.body" placeholder="Add text here" />
              <button v-on:click="saveNewTodo(this.newTodo)">Save</button>
            </div>
          </Modal>
        </Shade>
      </PoseTransition>
    </div>
    <!-- <div>
      <PoseTransition>
        // Edit event
        <Shade v-on:click.native="isEditVisible = false" class="shade" v-if="isEditVisible">
          <Modal class="modal">
            <div class="header">
              <input v-model="this.event.task" placeholder="this.event.task" />
              <select v-model="this.event.color">
                <option disabled value>{{ this.event.color }}</option>
                <option>Red</option>
                <option>Green</option>
                <option>Yellow</option>
                <option>Blue</option>
                <option>Orange</option>
              </select>
            </div>
            <div class="body">
              <input class="end" v-model="this.event.end" placeholder="this.event.end" />
              <input v-model="this.event.body" placeholder="this.event.body" />
              <button v-on:click="editTodo(this.event)">Save</button>
            </div>
          </Modal>
        </Shade>
      </PoseTransition>
    </div>-->
    <!-- <div>
      <PoseTransition>
        // Delete event
        <Shade v-on:click.native="isDeleteVisible = false" class="shade" v-if="isDeleteVisible">
          <Modal class="modal">
            <div class="header">
              <h1>Are you sure you want to delete this event?</h1>
              <h3>{{event.task}}</h3>
            </div>
            <div class="body">
              <button v-on:click="deleteTodo(this.event)">Delete</button>
            </div>
          </Modal>
        </Shade>
      </PoseTransition>
    </div>-->
  </div>
</template>



<script>
import posed, { PoseTransition } from "vue-pose";
import { number } from "style-value-types";
export default {
  name: "TodoList",
  data: () => {
    return {
      isAddVisible: false,
      isEditVisible: false,
      isDeleteVisible: false,
      isShowVisible: false,
      todoModal: {},

      newTodo: {
        id: number,
        task: "",
        completed: false,
        type: "Todo",
        room: "",
        body: "",
        start: "",
        end: "",
        color: "",
        label: []
      }
    };
  },
  components: {
    PoseTransition,

    Shade: posed.div({
      enter: {
        opacity: 1,
        beforeChildren: true,
        transition: { duration: 200, ease: "linear" }
      },
      exit: {
        opacity: 0,
        afterChildren: true,
        transition: { duration: 200, ease: "linear" }
      }
    })
  },
  Modal: posed.div({
    enter: { opacity: 1, z: 0 },
    exit: { opacity: 0, z: -150 }
  }),
  methods: {
    selectColor(color) {
      console.log(color);
    },
    callShowModal(modalObject) {
      this.todo = modalObject;
      this.isShowVisible = true;
      console.log(this.isShowVisible, this.todo);
    },
    callAddModal() {
      this.isAddVisible = true;
      console.log(this.isAddVisible, this.newTodo);
    },
    closeModal() {
      this.isAddvisible = false;
      this.isEditVisible = false;
      this.isDeleteVisible = false;
      this.isShowVisible = false;
      console.log("Closing", this.isAddvisible);
    },
    saveNewTodo(todo) {
      this.isAddvisible = false;
    },
    editTodo(todo) {
      this.isEditVisible = false;
    },
    deleteTodo(todo) {
      this.isDeleteVisible = false;
    }
  },
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
  // }
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
}

.modal .header {
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
}
</style>>

