<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="updataRootState">直接更改跟组将状态</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
    msg: function() {
      return this.$root.msg;
    }
  },
  methods: {
    updataRootState: function () {
      this.$root.msg = 'root根组件状态 被修改'
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
