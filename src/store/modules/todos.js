import axios from 'axios';

const state={
    todos:null
};

const getters={
    allTodos: state => state.todos
};

const actions={
    async fetchTodos({commit}){
        let response= await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
        // setTodos: (state, todos) => (state.todos=todos)
        commit('setTodos',response.data);
    },
    async addTodo({commit}, title){
        let response = await axios.post('https://jsonplaceholder.typicode.com/todos',{
            title, completed: false, userId: 1
        });
        commit('addTodo', response.data);
    },
    async deleteTodo({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('deleteTodo', id);
    },
    updateTodo({commit}, id){
        commit('updateTodo', id)
    }
};

const mutations={
    setTodos: (state, todos) => state.todos=todos,
    addTodo:(state, todo) => state.todos.unshift(todo),
    deleteTodo: (state, id) => state.todos =  state.todos.filter(todo => todo['id'] !== id),
    updateTodo: (state, id) =>{
        state.todos.forEach(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            };
        });
        }
};

export default{
    state,
    getters,
    actions,
    mutations
}
