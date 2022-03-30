<template>
  <div class="container">
    <div class="login-header">
      <h2>Welcome back</h2>
      <div>Enter your credentials to access your account</div>
    </div>
    <div class="login-container">
      <form
          @submit="login"
          class="username"
      >
        <div>Name</div>
        <input
            v-model="username"
            type="text"
            id="username"
            class="base-inputs"
            placeholder="Enter your username / Dmitry"
            required
        >
      </form>
      <form
          @submit="login"
          class="password"
      >
        <div>Password</div>
        <input
            v-model="password"
            type="password"
            id="password"
            class="base-inputs"
            placeholder="Enter your password / 12345"
            required
        >
      </form>
    </div>
    <div
        v-show="isError"
        class="invalid-data"
    >
      Your username or password is incorrect.
      Please, try again.
    </div>
    <div class="login-btn">
      <button
          @click="login"
          @keyup.enter="login"
          type="submit"
          class="confirm-btn"
      >Login
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

const USERNAME = 'Dmitry';
const PASSWORD = '12345';

export default {
  name: "usernameComponent",
  data() {
    return {
      name: this.username,
      USERNAME,
      PASSWORD,
      username: '',
      password: null,
      isError: false,
    }
  },
  methods: {
    ...mapActions([
      'setUsername',
      'setLogStatus',
    ]),

    login() {
      if (this.USERNAME === this.username && this.PASSWORD === this.password) {
        this.setUsername(this.username);
        this.setLogStatus(true);
        console.log('here');
        this.$router.push('/');
      } else {
        this.isError = true;
      }
    },
  },
  created() {
    if (this.getLogStatus) {
      this.$router.push({path: '/'});
    }
  },
  computed: {
    ...mapGetters(['getLogStatus']),
  },
}
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 20px;
  margin: 0 auto;
  max-width: 500px;
  width: 90%;
  max-height: 380px;
  background: #FFFFFF !important;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
}

.login-header {
  margin: 0 auto;
  text-align: center;
}

.login-container {
  width: 100%;
}

.base-inputs {
  padding: 8px 3px;
  margin: 3px 0;
  max-width: 450px;
  width: 95%;
  min-width: 100px;
  border: none;
  box-shadow: 2px 2px 4px 0 rgba(34, 60, 80, 0.2);
  border-radius: 9px;
}

  ::placeholder{
    padding-left: 10px;
    color: rgba(66, 66, 66, 0.5);

}

.login-btn {
  width: 95%;
}

.confirm-btn {
  max-width: 450px;
  width: 100%;
  min-width: 150px;
  padding: 7px 0;
  margin: 15px 0;
  font-size: 18px;
  background: #0076C0;
  color: #FFFFFF;
  border: 3px solid #0076C0;
  border-radius: 9px;

  &:hover {
    background: #FFFFFF;
    color: #0076C0;
    border: 3px solid #0076C0;
  }
}

.username {
  margin: 15px 0;
  padding-bottom: 20px;
}

.password {
  margin: 15px 0;
}

.invalid-data {
  color: red;
}

@media (max-width: 450px) {
  .base-inputs {
    height: 10px;
  }

  .confirm-btn {
    margin: 10px 0;
    padding: 2px 8px;
    font-size: 17px;
    background: #0076C0;
    color: #FFFFFF;
    border: 3px solid #0076C0;

  }
  .container {
    padding-left: 15px;
  }


}
</style>