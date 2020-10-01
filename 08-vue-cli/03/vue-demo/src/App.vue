<template>
  <div id="app">
    <HelloWorld ref="xxx"></HelloWorld>

    <header>APP.vue HEADER</header>

    <navigation-link url="/profile">
      <!-- <p>插槽内容可以是复杂的{{msg}}</p>
      <mark>Your Profile</mark>-->
    </navigation-link>

    <hr />
    <base-layout>
      <template v-slot:footer>
        <h3>footer</h3>
      </template>
      <p>我是默认插槽 父级传递的状态{{msg}}</p>
      <template v-slot:header>
        <h3>这里会分发到组件的header插槽</h3>
      </template>
    </base-layout>

    <hr />
    <div class="tabs">
      <button v-for="(tab, index) in tabs" :key="index" @click="currentTab = tab">{{tab}}</button>
      <!-- 保持存活 第一次创建之后就缓存起来 -->
      <keep-alive>
        <component v-bind:is="currentTabComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavigationLink from "./components/NavigationLink.vue";
import BaseLayout from "./components/BaseLayout.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    NavigationLink,
    BaseLayout
    // "my-component": () => import("./my-async-component")
  },
  data: function() {
    return {
      msg: "hello App",
      tabs: ["Home", "About", "Concat"],
      currentTab: "Home"
    };
  },
  computed: {
    currentTabComponent: function() {
      return "Tab" + this.currentTab;
    }
  },
  created() {
    
    // 访问根实例
    
    

    // 父组件获取子组件
    var refs = this.$refs;
    
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
  margin-top: 60px;
}
header {
  font-size: 24px;
}
</style>
