<template>
  <div>
    <h1 class="float-left d-block m-2">{{appTitle}}</h1>
    <div class="clearfix"></div>
    <div class="mb-3 ">
      <search-sticker @filterSticker="handleFilterUpdate"></search-sticker>
    </div>
    <div>{{this.filter}}</div>
    <div class="row">
    <wc-sticker v-for="sticker in this.filteredStickers" v-bind:key="sticker.id"
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
    filteredStickers: jsonData.stickers, 
    filter: ''
  }
  }, 
  
  mounted: function () {

  },
  
  methods: {
    handleFilterUpdate(value) {
      this.filter = value;
      this.updateFilteredStickers(value);
    
    }, 
    updateFilteredStickers(value) {
      this.filteredStickers = jsonData.stickers.filter((sticker) => {
      return sticker.name.toLowerCase().indexOf(value.toLowerCase())!=-1;
      });
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
