<template>
  <div id="app">
    <AddTodo
      @translate-new-todo="receiveNewTodo($event)"
      :is-show="false"
      v-bind:num="num"
      @updata:num="num=$event"
      
    >
    我是slot插槽内容
    </AddTodo>

    <transition name="custom-classes-transition" enter-active-class="animated rollIn" appear>
      <transition-group
        name="custom-classes-transition"
        tag="ul"
        enter-active-class="animated bounceInUp"
      >
        <TodoItem
          v-for="(todo, index) in todos"
          v-bind="todo"
          :key="index"
          @dblclick.native="todo.complated = !todo.complated"
        ></TodoItem>
      </transition-group>
    </transition>
    <BaseMyButton></BaseMyButton>
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
  name: "App",
  components: {
    AddTodo,
    TodoItem
  },
  data: function() {
    return {
      todos: [
        {
          complated: true,
          text: "代办项1"
        },
        {
          complated: false,
          text: "代办项2"
        }
      ],
      num: 20
    };
  },
  methods: {
    receiveNewTodo: function(v) {
      // 
      this.todos.push({
        text: v,
        complated: false
      });
    }
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
  overflow: hidden;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
