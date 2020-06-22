<template>
  <div class="input">
    <input type="text" v-model="inputText" />
    <input type="submit" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import getSuggest from "@/api/getSuggest.js";

export default {
  data: function() {
    return {
      inputText: ""
    };
  },
  methods: {
    ...mapMutations(["updateSuggests"])
  },
  watch: {
    inputText: function(newValue) {
      getSuggest(newValue, result => {
        //   
        // 
        // this.$store.commit({
        //   type: "updateSuggests",
        //   suggests: result.data.result
        // });
        this.updateSuggests({
          suggests: result.data.result
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>