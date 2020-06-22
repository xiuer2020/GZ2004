<template>
  <div class="user">
    <h3>{{$route.params.username}} 的个人主页</h3>
    
    <router-link to="profile">个人面板</router-link> | 
    <router-link to="posts">所有文章</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  // 生命周期 创建完成
  // 多个用户共用一个组件 user/nick => user/nicholas 组件的生命周期钩子不会再被调用。
  created() {
    
  },
  // 监听路由变化
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      
    }
  },

  // 路由守卫
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
    
    next();
  }
};
</script>
