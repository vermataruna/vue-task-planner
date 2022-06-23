<template>
  <div class="home">
    <filter-nav @filter="currentFilter = $event" :current-filter="currentFilter"></filter-nav>
    <div v-if="tasks.length">
      <div v-for="task in filteredTasks" :key="task.id">
        <single-task :task="task" @delete = "handleDelete" @complete="handleComplete"/>
      </div>
    </div>
  </div>
</template>

<script>
import SingleTask from '../components/SingleTask.vue';
import FilterNav from "@/components/FilterNav";

export default {
  name: 'HomeView',
  components: {
    SingleTask,
    FilterNav
  },

  data() {
    return {
      tasks: [],
      currentFilter: 'all',
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
  },
  computed: {
    filteredTasks() {
      if (this.currentFilter === 'completed') {
        return this.tasks.filter(task => task.complete)
      }
      if (this.currentFilter === 'ongoing') {
        return this.tasks.filter(task => !task.complete)
      }
      return this.tasks
    }
  }

}
</script>
