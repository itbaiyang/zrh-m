<template>
  <div id="app">
    <!-- <Topbar></Topbar> -->
    <router-view name="top"></router-view>
    <router-view name="side"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
// import Topbar from './components/topbar'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
