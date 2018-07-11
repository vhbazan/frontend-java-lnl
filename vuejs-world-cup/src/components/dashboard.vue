<template>
  <div>
    <h1 class="float-left d-block m-2">{{appTitle}}</h1>
    <div class="clearfix"></div>
    <div class="mb-3 ">
      <search-sticker></search-sticker>
    </div>
    <div class="row">
    <wc-sticker v-for="sticker in this.stickers" v-bind:key="sticker.id"
        v-bind:stickerData="sticker"></wc-sticker>
    </div>
  </div>
</template>
<script>
import jsonData from '../assets/json/data.json';

export default {
  name: 'dashboard',
  data() { return   { 
    lunchAndLearnTitle: 'Java Lunch and Learn - Frontend Session ', 
    appTitle: '2018 FIFA World Cup Russia - Stickers catalogue',
    stickers: jsonData.stickers
  }
  }, 
  
  mounted: function () {

  },
  
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>

</style>
