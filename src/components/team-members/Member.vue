<template>
    <div class="job-queue-item" >
        
        <p>
            {{ member.title }}
            <button @click="$emit('queue-job', member)" class="add">
                Queue Job
            </button>
        </p>
    </div>
</template>

<script>
export default {
    name: "Member",
    props: [
        "member"
    ],
    methods: {
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
.add {
    background: #3cff00;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
}
</style>