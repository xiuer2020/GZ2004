<template>
  <!-- <li class="item" :class="{complated: todo.complated}">
    {{todo.text}}
    <BaseMyButton></BaseMyButton>
  </li> -->
  <li class="item" :class="{complated: complated}">
    {{text}}
    <BaseMyButton></BaseMyButton>-{{author}}
  </li>
</template>
<script>
// import BaseMyButton from "./bases/BaseMyButton";

export default {
  name: "TodoItem",
  // props: ["todo"],
  props: {
    // todo: Object
    complated: Boolean,
    text: String,
    author: {
      type: [String, Object],
      default: 'nicholas'
    }
  },

  components: {
    // BaseMyButton
  }
};
</script>
<style>
li {
  list-style: none;
}
li.complated {
  text-decoration: line-through;
}
</style>
