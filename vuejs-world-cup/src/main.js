import Vue from 'vue'
import App from './App.vue'

//generic components
import dashboard from './components/dashboard';
import sticker from './components/sticker';
import searchSticker from './components/searchSticker';

Vue.component('dashboard', dashboard);
Vue.component('wc-sticker', sticker);
Vue.component('search-sticker', searchSticker);

new Vue({
  el: '#app',
  render: h => h(App)
})
