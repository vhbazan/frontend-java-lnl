<template>
<div>
  <div className="input-group m-3">
    <input className="w-50" type="search" v-model="filter" class="form-control" placeholder="Search sticker" 
    v-on:input="handleFilterChange" aria-label="stickerFilter"  />
  </div>
</div>
  
</template>

<script>

export default {
  name: 'searchSticker',

  props: {
  
  }, 
  
  data() { return   { 
    filter: ''
    }
  }, 
  
  mounted: function () {
      
  },
  
  methods: {
    handleFilterChange(event) {
      let self = this;
      self.$emit('filterSticker', event.target.value );
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
