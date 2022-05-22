<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <form @submit.prevent="addTodo()">
      <div class="mb-3">
        <label for="newTodo" class="form-label">New Todo</label>
        <input v-model="newTodo" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="newTodoHelp"
          placeholder="Walk the dog">
        <small id="newTodoHelp" class="form-text">Enter a new todo</small>
      </div>
      <button type="button" class="btn btn-primary">Submit</button>
    </form>
    <ul class="list-group mt-5">
      <li class="list-group-item" v-for="todo in todos">
        <button v-if="!todo.done" 
        @click="markDone(todo)" 
        type="button" 
        class="btn btn-primary">
          DONE</button>
        <button 
        type="button" 
        class="btn btn-danger" 
        @click="removeTodo(todo)">
          DELETE</button>
        <span :class="{
          isDone: todo.done
        }">{{ todo.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({

    newTodo: '',
    todos: [],



  }),

  watch: {

    todos: {
      handler() {
        localStorage.todos = JSON.stringify(this.todos)
      },
    deep: true

    },
  },

  mounted() {
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos)
    }
  },



  methods: {
    addTodo() {
      this.todos.push({
        title: this.newTodo,
        done: false
      });
      this.newTodo = '';
      console.log(this.todos);
    },
    markDone(todo) {
      todo.done = true;
      // console.log();
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    }
  },


}


</script>

<style>
.isDone {
  text-decoration: line-through;
  text-decoration-color: red;
}
</style>