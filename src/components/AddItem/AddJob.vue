<template>
    <div>
        <form @submit.prevent="addJob">
            <input type="text" v-model="title" name="title" placeholder="add job to queue...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
    name: "AddJob",
    data() {
        return {
            title: '',
        }
    },
    methods: {
        addJob(e) {
            e.preventDefault();
            const newJob = {
                id: uuidv4(),
                title: this.title,
                completed: false,
            }

            this.$emit('add-job-to-queue', newJob);
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