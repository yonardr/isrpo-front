<template>
<Navbar/>
  <div class="container">
    <router-view></router-view>
  </div>

</template>

<script>


import Navbar from "@/components/Navbar.vue";

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
.container{
  margin-top: 50px;
}
</style>
