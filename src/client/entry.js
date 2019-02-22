

import bar from './js/bar';
import foo from './js/foo';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import Contact from './components/Contact.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/about', component: About }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.use(VueRouter);

library.add(faHeart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})



bar();
foo();



