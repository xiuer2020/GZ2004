<template>
  <div id="test">{{msg}}</div>
</template>

<script>
export default {
  name: "Test",
  components: {},
  props: ["msg"]
};
</script>

<style>
#test {
  color: red;
}
</style>