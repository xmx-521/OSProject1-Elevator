<template>

  <div style="overflow:auto">
    <elevator v-for="count in this.elevatorNum" :key="count" :floorNum="this.floorNum" />
  </div>
</template>

<script>
  import Elevator from './components/Elevator.vue'

  export default {
    name: 'App',
    data() {
      return {
        elevatorNum: 5,
        floorNum: 20
      }
    },
    components: {
      Elevator
    }
  }
</script>

<style>
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>