<template>
  <div id="app">
    <!-- <AddJob v-on:add-job-to-queue="addJob" /> -->
    <JobQueue v-bind:currentJob="currentItem" v-bind:jobQueue="jobQueue" v-on:extend-job="extendJob" v-on:del-job="deleteJob" v-on:del-current-job="deleteCurrentJob" />
    <Members v-bind:members="members" v-on:queue-job="addJob" />
  </div>
</template>

<script>
import axios from 'axios';

import JobQueue from '../components/job-queue/JobQueue';
// import AddJob from '../components/job-queue/AddJob';
import Members from '../components/team-members/Members';

export default {
  name: 'Home',
  components: {
    Members,
    JobQueue,
    // AddJob
  },
  data() {
    return {
      currentItem: {

      },
      jobQueue: [
      ],
      members: [

      ],
    }
  },
  /**
   * For axios requests please use the following URL to find stuff
   * https://my-json-server.typicode.com/Trinitok/test-job-json/jobs
   */
  methods: {
    extendJob(item) {
      var date = new Date(item.complete);
      date.setMinutes(date.getMinutes() + 15);
      const complete = date;
      const title = item.title;
      axios.put(`https://my-json-server.typicode.com/Trinitok/test-job-json/jobs/${item.id}`, {
        complete,
        title
      })
        .then(res => {
          this.currentItem = res.data;
          // this.jobQueue = this.jobQueue.filter(jobQueueItem => jobQueueItem.id !== id);
        })
        .catch(err => alert(err));
    },
    deleteCurrentJob(id) {
      axios.delete(`https://my-json-server.typicode.com/Trinitok/test-job-json/jobs/${id}`)
        .then(() => {
          this.currentItem = this.jobQueue.shift();
          // this.jobQueue = this.jobQueue.filter(jobQueueItem => jobQueueItem.id !== id);
        })
        .catch(err => alert(err));
      // this.todos = this.todos.filter(todo => todo.id !== id);
    },
    deleteJob(id) {
      axios.delete(`https://my-json-server.typicode.com/Trinitok/test-job-json/jobs/${id}`)
        .then(() => {
          this.jobQueue = this.jobQueue.filter(jobQueueItem => jobQueueItem.id !== id);
        })
        .catch(err => alert(err));
      // this.todos = this.todos.filter(todo => todo.id !== id);
    },
    /**
     * Adds a job to hte queue.  If there are already at least 10 jobs an alert will appear
     */
    addJob(member) {
      
      if (this.jobQueue.length >= 10) {
        alert('The max queue size is 10 jobs');
        return;
      }

      //  get the last job
      //  get the date
      //  add 2 hours
      //  set that as the new job complete
      var title = member.title;
      var complete = newJobCompleteDate;
      if (this.jobQueue.length > 0) {
        
      
        const lastJob = this.jobQueue[this.jobQueue.length - 1];

        const lastJobCompleteDate = new Date(lastJob.complete);

        var newJobCompleteDate = lastJobCompleteDate;

        newJobCompleteDate.setHours(lastJobCompleteDate.getHours() + 2);

        member.complete = newJobCompleteDate;
      }
      else {
        title = member.title;
        var completeDate = new Date();
        completeDate.setHours(completeDate.getHours() + 2);
        complete = completeDate;
      }

      // member.complete = new Date(this.jobQueue[this.jobQueue - 1].complete);

      axios.post('https://my-json-server.typicode.com/Trinitok/test-job-json/jobs', {
        complete,
        title
      })
        .then(res => {
          //  replace this when db is up and running.
          // const data = res.data;
          if (this.currentItem){
            this.jobQueue = [...this.jobQueue, res.data];
          }
          else {
            this.currentItem = res.data;
          }
        })
        .catch(err => alert(err));

      // this.todos = [...this.todos, newTodos]
    },
  },
  /**
   * This is the data that will be used to render the web page
   */
  created() {
    //  get jobs
    axios.get('https://my-json-server.typicode.com/Trinitok/test-job-json/jobs?_limit=5')
      .then(res => {
        this.currentItem = res.data.shift();
        this.jobQueue = res.data;
      })
      .catch(err => alert(err));
    
    //  get members
    axios.get('https://my-json-server.typicode.com/Trinitok/test-job-json/people')
      .then(res => {
        this.members = res.data;
      })
      .catch(err => alert(err));
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
