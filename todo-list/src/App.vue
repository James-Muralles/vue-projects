<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>


    <form @submit.prevent="addTodo()">
      <div class="mb-3">
        <label for="newTodo" class="form-label">New Todo</label>
        <input v-model="newTodo" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="newTodoHelp"
          placeholder="Walk the dog">
        <div id="newTodoHelp" class="form-text">Enter a new todo</div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>


    <ul class="list-group mt-5">
      <li class="list-group-item" v-for="todo in todos">
      <button type="button" class="btn btn-primary">DONE</button>
      {{ todo }}
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

  methods: {
    addTodo() {
      this.todos.push({
        title: this.newTodo,
        done: false
      });
      this.newTodo = '';
      console.log(this.todos);
    }
  },


}

</script>

<style>
</style>
