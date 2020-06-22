<template>
  <div class="add-todo">
    <input type="text" v-model="newTodo" />
    <button @click="addTodo">Add</button>
    <!-- <span @click="$emit('updata:num', 10)">{{num}}</span> -->
    <span @click="xxx">{{num}}</span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "",
  data: function() {
    return {
      newTodo: ""
    };
  },
  props: {
    num: Number,
    isShow: Boolean
  },
  methods: {
    addTodo: function() {
      this.$emit("translate-new-todo", this.newTodo);
      // 
      this.newTodo = "";
    },
    xxx: function () {
        this.$emit('updata:num', 10)
    }
  },
  computed: {
    computedTitle: function() {
      return this.title * 2;
    }
  }

  //   DO NOT DO THIS
  //   created() {
  //       this.title = 30
  //       
  //   },

  // xx-yy xxYy js里面都用xxYy html里面标签名属性名xx-yy  事件名属性值依赖js data method
};
</script>

