<template>
    <div>
        <h1>
            Members
        </h1>
        <div v-for="member in members" v-bind:key="member.id">
            <Member v-bind:member="member" v-on:queue-job="$emit('queue-job', member)" />
        </div>
    </div>    
</template>

<script>
import Member from './Member.vue';

export default {
    name: "Members",
    props: ["members"],
    components: {
        Member
    },
}
</script>

<style scoped>

</style>