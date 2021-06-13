<template>
    <div id="addList">
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="text">
            <button>Add todo</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
      return {
          text: ''
      }
    },
    methods: {
        onSubmit() {
            this.$emit('add-todo', this.text);
            this.text = '';
        }
    }
}
</script>