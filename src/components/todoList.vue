<template>
    <div id="todoList">
        <ul v-if="todos.length">
            <li v-for="(todo, i) in todos" :todos="todos" :key="i">
                <span :class="{done: todo.completed}">
                    <input type="checkbox" @change="todo.completed = !todo.completed">
                    <strong>{{i+1}}</strong>
                    {{todo.title | upperFirst}}
                </span>
                <button type="submit" @click="delTodo(i)">&times;</button>
            </li>
        </ul>
        <p v-else>You can add tasks:)</p>
    </div>
</template>

<script>
export default {
    props: ['todos'],
    filters: {
        upperFirst(value) {
            return value[0].toUpperCase() + value.slice(1);
        }
    },
    methods: {
        delTodo(id) {
            this.$emit('del-todo', id);
        }
    }
}
</script>
<style scoped>
    li {
        list-style: none;
    }
    .done {
        text-decoration: line-through;
    }
</style>