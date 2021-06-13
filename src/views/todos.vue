<template>
    <div >
        <h2>Application todo</h2>
        <router-link to="/">Home</router-link>
        <hr>
        <addTodo @add-todo="addTodo"/>
        <select v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
        </select>
        <Loader v-if="loading"/>

        <todoList v-else-if="!loading" :todos="todos" @del-todo="delTodo"/>

        <p v-else>API doesn't work!</p>

        <!--<div class="code" style="display: none">-->
            <!--<pre>-->
                <!--{{todos}}-->
            <!--</pre>-->
        <!--</div>-->

    </div>
</template>

<script>
    import todoList from '@/components/todoList'
    import addTodo from '@/components/addTodo'
    import Loader from '@/components/loader'

    export default {
        name: 'app',
        data() {
            return {
                todos: [],
                loading: true,
                filter: 'All'
            }
        },
        mounted(){
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
                .then(response => response.json())
                .then(json => {
                    setTimeout(()=> {
                        this.todos = json
                        this.loading = false
                    }, 1000)
                })
        },
        // watch: {
        //     filter(value) {
        //         if (this.filter === value) {
        //             return this.todos
        //         }
        //         if (this.filter === value) {
        //             return this.todos.filter(t => t.completed)
        //         }
        //         if(this.filter === value) {
        //             return this.todos.filter(t => !t.completed)
        //         }
        //     }
        // },
        // computed: {
        //    filteredTodo () {
        //       if (this.filter === 'all') {
        //           return this.todos
        //       }
        //       if (this.filter === 'completed') {
        //           return this.todos.filter(t => t.completed)
        //       }
        //       if(this.filter === 'not-competed') {
        //           return this.todos.filter(t => !t.completed)
        //       }
        //   }
        // },
        methods: {
            delTodo(id) {
                this.todos.splice(id, 1)
            },
            addTodo(text){
                this.todos.push(
                    {
                        id: Date.now(),
                        title: text,
                        completed: false
                    }
                );
                console.log(text);
            }
        },
        components: {
            todoList,
            addTodo,
            Loader
        }
    }
</script>

<style scoped>
    body {
        background: #000;
    }
    .code {
        text-align: left;

    }
    .code pre {
        background: #ccc;
        width: 300px;
        margin: 0 auto;
        border: 1px solid chartreuse;
        border-radius: 10px;
        color: darkblue;
    }
</style>