<template>
  <div id="app">

    <app-header></app-header>
    <app-nav></app-nav>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
export default {
  name: 'App',
  components:{
    'app-header':Header,
    'app-nav':Nav
  }
}
</script>

<style>

</style>
