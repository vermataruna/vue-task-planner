<template>
  <div class="home">
    <div v-if="tasks.length">
      <div v-for="task in tasks" :key="task.id">
        <single-task :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleTask from '../components/SingleTask.vue';

export default {
  name: 'HomeView',
  components: {
    SingleTask
  },

  data() {
    return {
      tasks: []
    }
  },
  mounted() {
    //local json server route
    fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => this.tasks = data)
      .catch(error => console.log(error.message))
  },
}
</script>
