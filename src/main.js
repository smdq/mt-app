// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import VueRouter from 'vue-router';

import '@/common/css/icon.css'

Vue.config.productionTip = false
import Goods from './components/goods/Goods'
import Ratings from './components/ratings/Ratings'

Vue.use(vueRouter)

const routes = [
  {path:'/',redirect:'/goods'},
  {path:'/goods',component:Goods},
  {path:'/ratings',component:Ratings}
]
/* eslint-disable no-new */
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  router,
  components: { App },
  template: '<App/>'
})
