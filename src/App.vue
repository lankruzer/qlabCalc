<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Price v-if="this.$route.name !== 'Authorization'" ></Price>
  </div>
</template>

<script>
import Price from '@/components/Price'

export default {
  name: 'App',
  components: {
    Price
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
