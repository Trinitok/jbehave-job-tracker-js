<template>
    <div class="job-queue-item" v-bind:class="{'is-complete':jobQueueItem.completed}">
        
        <p>
            {{ jobQueueItem.title }}
            <button @click="$emit('del-job', jobQueueItem.id)" class="del">x
            </button>
        </p>
    </div>
</template>

<script>
export default {
    name: "JobQueueItem",
    props: ["jobQueueItem"],
    methods: {
        markComplete() {
            this.jobQueueItem.completed = !this.jobQueueItem.completed;
        }
    }
}
</script>

<style scoped>
.job-queue-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}
.is-complete {
    text-decoration: line-through;
}
.del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
}
</style>