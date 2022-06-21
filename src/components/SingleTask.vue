<template>
  <div class="task" :class="{complete : task.complete}">
      <div class="actions">
          <h3 @click="showDetails = !showDetails">{{task.title}}</h3>
          <div class="icon">
            <router-link :to="{name: 'editTask', params: {id: task.id}}">
              <span class="material-icons">edit</span>
            </router-link>
              <span class="material-icons" @click="deleteTask">delete</span>
              <span class="material-icons tick" @click="completeTask">done</span>
          </div>
      </div>
      <div v-if="showDetails" class="details">
          <p>{{task.details}}</p>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
        showDetails: false,
        uri: 'http://localhost:3000/tasks/' + this.task.id
        }
    },
    props: [
        'task'
    ],
    methods: {
        deleteTask() {
            fetch(this.uri, {method: 'DELETE'})
                .then(() => this.$emit('delete', this.task.id))
                .catch(error => console.log(error))
        },
        completeTask() {
          console.log('ehr')
            fetch(this.uri, {
                method: 'PATCH',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify({ complete: !this.task.complete })
            }).then(() => {
              this.$emit('complete', this.task.id)
            }).catch((error)=> console.log(error))
        },

    }
}
</script>

<style>

  .task {
      margin: 20px auto;
      background: white;
      padding: 10px 20px;
      border-radius: 4px;
      box-shadow: 1px 2px 3px rgb(0,0,0,0.5);
      border-left: 4px solid red;
  }
  
  h3 {
      cursor: pointer;
  }

  .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  .material-icons {
      font-size: 24px;
      margin-left: 10px;
      color: rgb(248, 40, 40);
      cursor: pointer;
  }

  .material-icons:hover {
      color: rgb(23, 194, 66);
  }

  .task.complete {
    border-left: 4px solid limegreen;
    text-decoration: line-through;
  }

  .task.complete .tick {
    color: limegreen;
  }
</style>
