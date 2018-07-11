<template>
  <div class="card col-md-3" style="">
      <h5 class="card-title text-center align-middle mb-1">{{stickerData.name}}</h5>
      <div class="col-md-12 mt-0 card-body">
      <img class="card-img-top md-1"  v-bind:alt="stickerData.name"
          v-bind:src="getStickerUrl(stickerData.img_url)">
      
        <div style="height:100px" class="row mt-2">
          <img class="d-inline col-md-4 h-25" v-bind:src="require(`../assets/img/${stickerData.country_code}.svg`)" alt="Card image cap">
          <span class="h-auto m-0 p-0 d-inline align-top text-justify col-md-8 overflow-hidden stickerDescription">
          {{stickerData.description}}</span>
        </div>
        <div style="height:50px" class="row m-2 text-center vertical-middle">
        <span  v-bind:class="['stickerPosition', 'stickerPosition'+ stickerData.position]" 
               class="d-inline mr-4"></span>
        <a href="#" style="font-size:1.5em;" class="d-inline w-75 col-md-offset-0 btn btn-primary
             text-center font-weight-light btn btn-primary">Traded</a>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sticker',

  props: {
    stickerData : Object
  }, 
  
  data() { return   { 
    
    }
  }, 
  
  mounted: function () {
      
  },
  
  methods: {

    getStickerUrl: function (fileName) {
      var images = require.context('../assets/img', false, /\.svg$/);
      return images('./'+ fileName )
    }
    
  }
}
</script>
<style lang="scss" scoped>
.stickerDescription {
  font-size: 10px;  
 
}
.stickerPosition {
    height: 25px;
    width: 25px;
    border-radius: 20px;
    position: relative;
    top: 11px;
}

.stickerPositionGoalkeeper {
  background-color: #0033cc;
}
.stickerPositionDefender {
  background-color: #ff6600;
}

.stickerPositionMidfielder {
  background-color: #ffcc00;
}

.stickerPositionForward {
  background-color: #009933;
}
</style>
