<template>
  <div class="task">
      <div class="actions">
          <h3 @click="showDetails = !showDetails">{{task.title}}</h3>
          <div class="icon">
              <span class="material-icons">edit</span>
              <span class="material-icons">delete</span>
              <span class="material-icons">done</span>
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
        showDetails: false
        }
    },
    props: [
        'task'
    ]
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

  .material-icons:hover{
      color: rgb(23, 194, 66);
  }

</style>