<template>
  <div id="app">
    <h1>{{time}}</h1>

    <div id="text">{{text}}</div>

    <base-input ref="usernameInput"></base-input>
    <button @click="getChildFocus">获取子组件焦点</button>
    <hr />
    <audio controls src="https://music.163.com/song/media/outer/url?id=346089.mp3"></audio>
    <button @click="musicPlay">播放</button>
  </div>
</template>

<script>
import BaseInput from "./components/BaseInput.vue";

export default {
  name: "App",
  data: function() {
    return {
      time: Date.now(),
      text: `例如，当你设置 vm.someData = 'new value'，该组件不会立即重新渲染。`
    };
  },
  components: {
    BaseInput
  },
  methods: {
    getChildFocus: function() {
      // dom操作 $refs挂载完成之后才可以取得到
      this.$refs.usernameInput.$el.querySelector("input").focus();
    },
    // 直接操作dom  DOM元素接口
    musicPlay: function() {
      var audio = this.$el.querySelector("audio");
      audio.play();

      // 
    }
  },

  // $refs 只会在组件渲染完成之后生效，并且它们不是响应式的。
  // 这仅作为一个用于直接操作子组件的“逃生舱”——你应该避免在模板或计算属性中访问 $refs。
  mounted() {
    
    

    // setInterval(() => {
    //   this.time = Date.now();
    // }, 1);

    // 获取某个元素 高度 DOM
    
  },
  watch: {
    text: function(newValue) {
      
      // 
      // 虽然数据变化了 但是视图需要的到VUE的下一帧 才会更新
      // 需要等到视图更新之后在获取高度
      this.$nextTick(function() {
        
      });
    }
  }
};

// this.$el 获取当前组件绑定挂载的元素
// this.$data.msg === this.msg

// this.$root  this.$parent  this this.$refs

// this.$nextTick

// $forceUpdate
</script>

<style>
</style>
