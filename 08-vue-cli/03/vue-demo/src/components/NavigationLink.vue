<template>
  <div class="navigation-link">
    <h3>navigation-link {{url}}</h3>
    <header>酱油党</header>
    <slot>
        <mark>这里是默认插槽</mark>
    </slot>
  </div>
</template>

<script>
export default {
    props: {
        url: String
    }
};
</script>

<style scoped>
header {
  background: green;
}
</style>