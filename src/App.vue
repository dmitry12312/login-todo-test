<template>
  <div id="app">
  <login-view/>
  </div>
</template>

<script>

import LoginView from "./views/LoginView";
export default {
  name: 'App',
  components: {
    LoginView

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  top: 0;
}
</style>
