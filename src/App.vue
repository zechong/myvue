<template>
  <div id="app">
    <!--<img src="./assets/images/logo.png" class="img-circle">-->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
import '@/assets/js/common'
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
</style>
