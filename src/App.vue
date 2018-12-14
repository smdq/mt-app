<template>
  <div id="app">

    <app-header :poiInfo ="poiInfo"></app-header>

    <app-nav :commentNum="commentNum"></app-nav>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
export default {
  name: 'App',
  data(){
   return {
     poiInfo:{},
     commentNum:0
   }
  },
  components:{
    'app-header':Header,
    'app-nav':Nav
  },
  created(){
    fetch('/api/goods')
    .then(res =>res.json())
    .then(response => {
      if(response.code ==0){
        this.poiInfo = response.data.poi_info
        console.log(this.poiInfo)
      }
    })

    fetch('/api/ratings')
    .then(res => res.json())
    .then(response => {
      if(response.code ==0){
        this.commentNum = response.data.comment_num
        console.log(response)
      }
    })
  }
}
</script>

<style>

</style>
