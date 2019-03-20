<template>
  <div id="addTodo">
      <form @submit.prevent="postTodo">
        <div class="form-group">
          <input type="text" class="form-control" v-model="title" placeholder="Enter Title Todo" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
      name: "",
      data: () => ({
          title: ''
      }),
      methods:{
          ...mapActions(['addTodo']),
          postTodo(){
              this.addTodo(this.title);
              this.title=''
          }
      }
    }
</script>

<style  scoped>
    #addTodo{
        margin-bottom: 45px;
    }
</style>
