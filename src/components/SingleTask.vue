<template>
  <div class="task">
      <div class="actions">
          <h3>{{task.title}}</h3>
      </div>
      <div class="details">
          <p>{{task.details}}</p>
      </div>
  </div>
</template>

<script>
export default {
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

</style>