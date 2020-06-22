<template>
  <ul id="nav">
    <li>
      <router-link to="/">推荐音乐</router-link>
    </li>
    <li>
      <router-link to="/hot">热歌榜</router-link>
    </li>
    <li>
      <router-link to="/search">搜索</router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@red: #d43c33;
#nav {
  display: flex;
  text-align: center;
  border-bottom: 1px solid lightgray;
  height: 40px;
  box-sizing: border-box;
  li {
    flex: 1;
  }
  a {
    color: #2c3e50;
    text-decoration: none;
    line-height: 38px;
    display: inline-block;

    padding: 0 3px;
    box-sizing: border-box;

    &.router-link-exact-active {
      color: @red;
      border-bottom: 2px solid @red;
    }
  }
}
</style>