<template>
  <div id="app">
    <CustomInput></CustomInput>
    <SuggestList></SuggestList>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import CustomInput from "@/components/CustomInput.vue";
import SuggestList from "@/components/SuggestList.vue";

export default {
  name: "App",
  components: {
    CustomInput,
    SuggestList
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
