<template>
  <div>
    <div class="text-center">
      <h1 class="col-md-12">{{ lunchAndLearnTitle }}</h1>
      <img src="../assets/logo.png">
      <h2>Vue.js &amp;&amp; Bootstrap 4</h2>
      <div class="clearfix"></div>
  </div>

    <h1 class="float-left d-block m-2">{{appTitle}}</h1>
    <div class="clearfix"></div>
  </div>
</template>
<script>

export default {
  name: 'dashboard',
  data() { return   { 
    lunchAndLearnTitle: 'Java Lunch and Learn - Frontend Session ', 
    appTitle: '2018 FIFA World Cup Russia - Stickers catalogue',
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
