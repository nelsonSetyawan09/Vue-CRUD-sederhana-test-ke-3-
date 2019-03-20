<template>
  <div>
      <div class="todos">
          <div
            @click="updateTodo(todo.id)"
            class="todo"
            v-for="todo in allTodos"
            :class="{'completed': todo.completed}" >
              {{todo.title}}
              <i  @click.stop="deleteTodo(todo.id)" class="far fa-times-circle"></i>
          </div>
      </div>
  </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: "Todos",
  methods:{
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    updateComplete(todo){
        let newTodo = {
            id: todo.id,
            userId: todo.userId,
            title: todo.title,
            completed: !todo.completed
        };
        this.updateTodo(newTodo);
    }
  },
  computed:mapGetters(['allTodos']),
  created(){
      this.fetchTodos();
  }
}
</script>


<style  scoped>
    .todos{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 1rem;
    }

    .todo{
        border:1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
    i{
        position: absolute;
        right: 2px;
        top: 2px;
        vertical-align: middle;
        cursor: pointer;
        color: #444;
    }
    .completed{
        text-decoration: line-through;
    }
</style>
