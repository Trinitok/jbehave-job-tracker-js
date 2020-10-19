<template>
  <div id="app">
    <!-- <AddJob v-on:add-job-to-queue="addJob" /> -->
    <div v-if="currentItem">
    <JobQueue 
      v-bind:currentJob="currentItem"
      v-bind:jobQueue="jobQueue"
      v-on:extend-job="extendJob"
      v-on:del-job="deleteJob"
      v-on:del-current-job="deleteCurrentJob"
      v-on:job-finished="deleteJob"
    />
    </div>
    <div v-else>
      <h1>
            There is currently no job
        </h1>
    </div>
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
      axios.put(`https://secure-retreat-15328.herokuapp.com/jobs/${item.ID}`, {
        complete,
        title
      })
        .then(res => {
          const jobs = res.data.jobs;
          this.currentItem = jobs.shift();
          this.jobQueue = jobs;
          // this.jobQueue = this.jobQueue.filter(jobQueueItem => jobQueueItem.id !== id);
        })
        .catch(err => alert(err));
    },
    deleteCurrentJobCompleted(id) {
      axios.delete(`https://secure-retreat-15328.herokuapp.com/jobs/${id}/current/complete`)
        .then(res => {
          const jobs = res.data.jobs;
          if (jobs) {
            this.currentItem = this.jobQueue.shift();
          } else {
            this.currentItem = undefined;
          }
          // this.jobQueue = this.jobQueue.filter(jobQueueItem => jobQueueItem.id !== id);
        })
        .catch(err => alert(err));
      // this.todos = this.todos.filter(todo => todo.id !== id);
    },
    deleteCurrentJob(id) {
      axios.delete(`https://secure-retreat-15328.herokuapp.com/jobs/${id}/current`)
        .then(() => {
          if (this.jobQueue && this.jobQueue.length > 0){
            this.currentItem = this.jobQueue.shift();
          }
          else {
            this.currentItem = undefined;
          }
          // this.jobQueue = this.jobQueue.filter(jobQueueItem => jobQueueItem.id !== id);
        })
        .catch(err => alert(err));
      // this.todos = this.todos.filter(todo => todo.id !== id);
    },
    deleteJob(id) {
      axios.delete(`https://secure-retreat-15328.herokuapp.com/jobs/${id}`)
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
      // var complete = newJobCompleteDate;
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
        // complete = completeDate;
      }

      // member.complete = new Date(this.jobQueue[this.jobQueue - 1].complete);

      axios.post(`https://secure-retreat-15328.herokuapp.com/add/${title}`, {
        title
      })
        .then(res => {
          //  replace this when db is up and running.
          // const data = res.data;
          var jobArr = res.data.jobs;
          if (jobArr.length > 0){
            if (this.currentItem && this.currentItem === jobArr[0]){
              
              // var jobArrLen = jobArr.len
              this.jobQueue = [res.data.jobs];
            }
            else if (this.currentItem && this.currentItem !== jobArr[0]) {
              this.currentItem = jobArr.shift();
              this.jobQueue = jobArr;
            }
            else {
              this.currentItem = jobArr[0];
            }
          }
        })
        .catch(err => alert(err));
    },
  },
  /**
   * This is the data that will be used to render the web page
   */
  created() {
    //  get jobs
    axios.get('https://secure-retreat-15328.herokuapp.com/jobs')
      .then(res => {
        if (res.data.jobs){
          this.currentItem = res.data.jobs.shift();
          this.jobQueue = res.data.jobs;
        }
      })
      .catch(err => alert(err));
    
    //  get members
    axios.get('https://secure-retreat-15328.herokuapp.com/people')
      .then(res => {
        this.members = res.data;
      })
      .catch(err => {
        alert(err);
      });
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
