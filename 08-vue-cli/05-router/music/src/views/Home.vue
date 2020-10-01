<template>
  <div class="home">
    <div class="personalized">
      <CardTitle>推荐歌单</CardTitle>
      <ul class="songlist">
        <SongListCard v-for="(item, index) in randomPersonalizeds()" :key="index" :item="item"></SongListCard>
      </ul>
    </div>

    <div class="newsong">
      <CardTitle>推荐音乐</CardTitle>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import CardTitle from "@/components/CardTitle.vue";
import SongListCard from "@/components/SongListCard.vue";

export default {
  name: "Home",
  data: function() {
    return {
      personalizeds: [],
      newsongs: []
    };
  },
  components: {
    // HelloWorld
    CardTitle,
    SongListCard
  },
  methods: {
    // 获取推荐歌单
    getPersonalized: function() {
      this.axios
        .get("/personalized")
        .then(response => {
          // 
          this.personalizeds = response.data.result;
        })
        .catch(function(error) {
          
        });
    },
    getNewSong: function() {},

    // 随机取六个推荐歌单
    randomPersonalizeds: function () {
      // 深拷贝数组
      var arr = [...this.personalizeds]
      
      var newArr = []
      for (let i = 0; i < 6; i++) {
        var r = Math.floor(Math.random()*arr.length)
        newArr.push(...arr.splice(r,1))
      }
      
      
      return newArr
    }
  },
  created() {
    // 每次创建组件都拿数据 太频繁 本地存储
    this.getPersonalized();
  }
};
</script>

<style lang="less">
.songlist {
  display: flex;
  flex-wrap: wrap;
}
</style>
