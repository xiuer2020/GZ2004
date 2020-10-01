<template>
  <div id="app">
    <router-link to="/home">home</router-link> | 
    <router-link to="/about">about</router-link> | 
    <router-link to="/concat">concat</router-link>

    <hr>
    <!-- 路由出口视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
