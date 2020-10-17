<template>
    <div>
        <form @submit.prevent="addTodos">
            <input type="text" v-model="title" name="title" placeholder="add todo...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
    name: "AddTodos",
    data() {
        return {
            title: '',
        }
    },
    methods: {
        addTodos(e) {
            e.preventDefault();
            const newTodo = {
                id: uuidv4(),
                title: this.title,
                completed: false,
            }

            this.$emit('add-todo', newTodo);
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
}

input[type="text"] {
    flex: 10;
    padding: 5px;
}

input[type="submit"] {
    flex: 2;
}
</style>