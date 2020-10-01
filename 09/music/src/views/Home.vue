<template>
  <div class="home">
    <div class="loading" v-if="showLoading">
      <img src="../assets/loading.svg" alt />
    </div>
    <HomeLink></HomeLink>

    <div class="personalized">
      <CardTitle>推荐歌单</CardTitle>
      <ul class="songlist">
        <SongListCard v-for="(item, index) in randomPersonalizeds()" :key="index" :songList="item"></SongListCard>
      </ul>
    </div>

    <div class="newsong">
      <CardTitle>推荐音乐</CardTitle>
      <ul>
        <!-- <SongItem v-for="(item, index) in newsongs" :key="index" :songItem="item" :order="index"></SongItem> -->
        <SongItem
          v-for="(item, index) in newsongs"
          :key="index"
          :songItem="item"
          @tanslate-song="$emit('tanslate-song', $event)"
        ></SongItem>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import CardTitle from "@/components/CardTitle.vue";
import SongListCard from "@/components/SongListCard.vue";
import HomeLink from "@/components/HomeLink.vue";
import SongItem from "@/components/SongItem.vue";

export default {
  name: "Home",
  data: function() {
    return {
      personalizeds: [],
      newsongs: [],
      showLoading: false
    };
  },
  components: {
    // HelloWorld
    CardTitle,
    SongListCard,
    HomeLink,
    SongItem
  },
  methods: {
    // 获取推荐歌单
    getPersonalized: function() {
      this.axios
        .get("/personalized")
        .then(response => {
          // 如果数据正确
          // 
          this.personalizeds = response.data.result;
          // 获取到的数据放入本地存储
          window.localStorage.setItem(
            "personalizeds",
            // 过期时间1小时
            JSON.stringify({
              expire: Date.now() + 1 * 60 * 60 * 1000,
              result: response.data.result
            })
          );
        })
        .catch(function(error) {
          
        });
    },
    getNewSong: function() {
      this.axios
        .get("/personalized/newsong")
        .then(response => {
          // 如果数据正确
          // 
          this.newsongs = response.data.result;
          // 获取到的数据放入本地存储
          window.localStorage.setItem(
            "newsongs",
            // 过期时间1小时
            JSON.stringify({
              expire: Date.now() + 1 * 60 * 60 * 1000,
              result: response.data.result
            })
          );
        })
        .catch(function(error) {
          
        });
    },

    // 随机取六个推荐歌单
    randomPersonalizeds: function() {
      // 截取前六个
      return [...this.personalizeds].slice(0, 6);

      // 深拷贝数组
      // var arr = [...this.personalizeds];

      // var newArr = [];
      // for (let i = 0; i < 6; i++) {
      //   var r = Math.floor(Math.random() * arr.length);
      //   newArr.push(...arr.splice(r, 1));
      // }
      // 

      // return newArr;
    }
  },
  created() {
    // 每次创建组件都拿数据 太频繁 本地存储
    const cachePersonalizeds = JSON.parse(
      window.localStorage.getItem("personalizeds")
    );
    if (cachePersonalizeds && cachePersonalizeds.expire > Date.now()) {
      // 存在并且还没有过期
      this.personalizeds = cachePersonalizeds.result;
    } else {
      // 已经过期
      this.getPersonalized();
    }

    const cacheNewsongs = JSON.parse(window.localStorage.getItem("newsongs"));
    if (cacheNewsongs && cacheNewsongs.expire > Date.now()) {
      // 存在并且还没有过期
      this.newsongs = cacheNewsongs.result;
    } else {
      // 已经过期
      this.getNewSong();
    }
  },

  // 路由守卫
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.showLoading = false;
    });
  },

  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // 
    this.showLoading = true;
    next();
  }
};
</script>

<style lang="less">
.songlist {
  display: flex;
  flex-wrap: wrap;
}
.home {
  position: relative;
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  img {
    width: 36px;
  }
}
</style>
