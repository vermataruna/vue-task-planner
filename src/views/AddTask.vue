<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required>
    <label>Details:</label>
    <textarea v-model="details"></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      details: '',
      localUrl: 'http://localhost:3000/tasks'
    }
  },
  methods: {
    handleSubmit()
    {
      let task = {
        title: this.title,
        details: this.details,
        complete: false
      }
      fetch(this.localUrl,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
      }).then(()=>{
        this.$router.push('/')
      }).catch((error) => console.log(error))
    }
  }
}
</script>

<style>
  form {
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
  label {
    display: block;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
  }
  input {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #d2c8c8;
    width: 100%;
    box-sizing: border-box;
  }
  textarea {
    border: 1px solid #d2c8c8;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
  }
  form button {
    display: block;
    margin: 20px auto 0;
    background: darkviolet;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
  }
</style>
