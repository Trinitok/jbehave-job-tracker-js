<template>
    <div class="current-item" v-bind:class="{'is-complete':jobQueueItem.completed}">
        <h1>
            Current Job
        </h1>
        <div>
            <Counter
                :utcTimeString="jobQueueItem.complete"
                :year='2021'
                :month='11'
                :date='24'
                :hour='4'
                :minute='10'
                :second='5'
                :millisecond='0'
            />
        </div>
        
        <p>
            <button @click="$emit('extend-job', jobQueueItem)" class="extend-job">
                Extend Job
            </button>
            {{ jobQueueItem.title }}
            <button @click="$emit('del-current-job', jobQueueItem.id)" class="del">
                x
            </button>
        </p>
    </div>
</template>

<script>
import Counter from '../../components/Counter/Counter';

export default {
    name: "CurrentItem",
    components: {
        Counter,
    },
    props: ["jobQueueItem"],
    methods: {
        // markComplete() {
        //     this.jobQueueItem.completed = !this.jobQueueItem.completed;
        // }
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