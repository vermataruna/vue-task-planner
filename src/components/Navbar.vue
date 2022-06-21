<template>
  <nav class="main-nav">
    <router-link :to="{name: 'home'}">Task</router-link>
    <router-link :to="{name: 'addTask'}">Add Task</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
 .main-nav {
  text-align: center;
  margin: 40px auto;
}
 .main-nav a {
   display: inline-block;
   text-decoration: none;
   margin: 0 10px;
   font-size: 18px;
 }
 a.router-link-active {
   border-bottom: 4px solid #84f816;
   padding-bottom: 4px;
   font-weight: bold;
 }
</style>
