<template>
  <div class="home">
    <div v-if="tasks.length">
      <div v-for="task in tasks" :key="task.id">
        <single-task :task="task" @delete = "handleDelete" @complete="handleComplete"/>
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

  methods: {
    handleDelete(id) {
       this.tasks = this.tasks.filter((task) => {
         return task.id !== id
       })
    },
    handleComplete(id) {
      let task = this.tasks.find(task => {
        return task.id === id
      })
      task.complete = !task.complete
    }
  }

}
</script>
