<template>
  <navbar/>
  <router-view/>
</template>

<script>
  import Navbar from "@/components/Navbar";
  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
body{
  background: #e9cdff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #3e454d;
}
</style>
