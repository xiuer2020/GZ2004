<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/concat">Concat</router-link>|
      <router-link to="/user">User</router-link>
|
      <!-- 声明式导航 -->
      <router-link to="/search">Search</router-link>|
      <!-- 编程式导航 -->
      <button @click="$router.push('/')">跳转到首页</button>
    </div>

    <router-view />

    <hr />
    <button @click="getJSON">getJSON</button>
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    getJSON: function() {
      //
      
      this.axios
        .get("https://api.kele8.cn")
        .then(function(response) {
          
        })
        .catch(function(error) {
          
        });
    }
  },
  mounted() {
    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
