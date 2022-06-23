<template>
  <nav class="navbar">
    <button @click="filter('all')"
            :class="{ active: currentFilter === 'all'}">
      View all
    </button>
    <button @click="filter('completed')"
            :class="{ active: currentFilter === 'completed'}">
      Completed
    </button>
    <button @click="filter('ongoing')"
            :class="{ active: currentFilter === 'ongoing'}">
      On going
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['currentFilter'],
  methods: {
    filter(by) {
      this.$emit('filter',by)
    }
  }
}
</script>

<style>
  .navbar button{
    background: none;
    border: none;
    color: #8b8585;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
  }
  .navbar button.active{
    color: #101113;
  }
</style>
