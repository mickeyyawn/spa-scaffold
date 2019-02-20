

import bar from './js/bar';
import foo from './js/foo';
import Vue from 'vue';
import App from './app.vue';

/*
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
}) */



Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})



bar();
foo();



