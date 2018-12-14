// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import VueRouter from 'vue-router';

Vue.config.productionTip = false
import Goods from './components/goods/Goods'

Vue.use(vueRouter)

const routes = [
  {path:'/',redirect:'/goods'},
  {path:'/goods',component:Goods}
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
