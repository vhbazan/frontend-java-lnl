import Vue from 'vue'
import App from './App.vue'

//generic components
import dashboard from './components/dashboard';

Vue.component('dashboard', dashboard);

new Vue({
  el: '#app',
  render: h => h(App)
})
