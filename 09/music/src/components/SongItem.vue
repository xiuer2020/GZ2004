<template>
  <li class="songitem" @click="$emit('tanslate-song', songItem)">
    <span class="order" v-if="order !== undefined">{{order + 1}}</span>
    <div class="main" :style="{marginLeft: order !== undefined? '0px':'10px'}">
      <h3>
        {{songItem.name}}
        <span class="alias">{{songItem.song.alias[0]}}</span>
      </h3>

      <div class="info">
        <i class="icon icon-quality"></i>
        <span class="artists">{{joinArtists(songItem.song.artists)}}</span>

        <span class="album">-{{songItem.song.album.name}}</span>
      </div>
    </div>
    <i class="icon icon-play"></i>
  </li>
</template>

<script>
export default {
  props: {
    order: Number,
    songItem: Object
  },
  methods: {
    joinArtists: function(artists) {
      return artists.map(artist => artist.name).join(" / ");
    }
  }
};
</script>

<style lang="less" scoped>
.icon {
  background-image: url("../assets/index_icon_2x.png");
  display: inline-block;
  background-size: 166px auto;

  &.icon-quality {
    width: 12px;
    height: 8px;
    margin: 0 5px 0 2px;
  }
  &.icon-play {
    width: 25px;
    height: 25px;
    background-position-x: -23px;
    margin: 0 10px;
  }
}

.songitem {
  display: flex;
  margin: 10px 0;
  align-items: center;

  .order {
    font-size: 18px;
    width: 2em;
    // background: red;
    text-align: center;
    color: rgb(189, 189, 189);
  }
  .main {
    flex: 1;
    width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 10px;
    h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .alias {
        color: rgb(189, 189, 189);
      }
    }
    .info {
      font-size: 12px;
      line-height: 2em;
      color: rgb(189, 189, 189);
    }
  }
}
</style>