<template>
  <div>
    <div class="main"></div>
    <div class="login-block">
      <login-component></login-component>
    </div>
  </div>
</template>

<script>
import LoginComponent from "../components/LoginComponent";

export default {
  name: "LoginView",
  components: {LoginComponent}
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 105, 204, 0.1);
}

.login-block {
  margin-top: -600px;
  max-height: 700px;
}
</style>