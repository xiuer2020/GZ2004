<template>
  <div class="base-layout">
    <header>
      <!-- 我们希望把页头放这里 -->
      <slot name="header"></slot>
    </header>
    <main>
      <!-- 我们希望把主要内容放这里 -->
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
      <!-- 我们希望把页脚放这里 -->
    </footer>
  </div>
</template>

<script>
export default {
  props: ["msg"]
};
</script>

<style scoped>
header {
  background: red;
}
</style>