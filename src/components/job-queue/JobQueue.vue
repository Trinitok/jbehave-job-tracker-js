<template>
    <div v-if="currentJob">
        <div v-bind:key="currentJob.ID">
            <CurrentItem
                v-bind:jobQueueItem="currentJob"
                v-on:extend-job="$emit('extend-job', currentJob)"
                v-on:del-current-job="$emit('del-current-job', currentJob.ID)"
            />
        </div>
        <h1>
            Next in Queue (max 10)
        </h1>
        <div v-for="jobQueueItem in jobQueue" v-bind:key="jobQueueItem.ID">
            <JobQueueItem v-bind:jobQueueItem="jobQueueItem" v-on:del-job="$emit('del-job', jobQueueItem.ID)" />
        </div>
    </div>
    <div v-else>
        <h1>
            There is currently no job
        </h1>
    </div>  
</template>

<script>
import JobQueueItem from './JobQueueItem.vue';
import CurrentItem from './CurrentJob.vue';

export default {
    name: "JobQueue",
    props: [
        /**
         * The current job item
         */
        "currentJob",

        /**
         * The other items in the queue
         */
        "jobQueue",
    ],
    components: {
        JobQueueItem,
        CurrentItem
    },
}
</script>

<style scoped>

</style>