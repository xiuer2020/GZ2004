<template>
  <ul>
    <SuggestItem v-for="(item, index) in suggests" :item='item' :key="index"></SuggestItem>
  </ul>
</template>

<script>
import { mapState } from "vuex";
import SuggestItem from "@/components/SuggestItem.vue";

export default {
  components: {
    SuggestItem
  },
  computed: {
    ...mapState(["suggests"])
  }
};
</script>

<style lang="less" scoped>
</style>