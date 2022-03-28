<template>
  <div class="container">
    <div>
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
    <div>
      <button
          @click="login"
          @keyup.enter="login"
          type="submit"
          class="confirm-btn"
      >Login</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

const USERNAME = 'Admin';
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
  align-content: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 20px;
  height: 32vh;
  background: #FFFFFF;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
}

.base-inputs {
  height: 20px;
  width: 80%;
}

.confirm-btn {
  margin: 20px 0;
  padding: 5px 45px;
  font-size: 18px;
  background: #0076C0;
  color: #FFFFFF;
  border: 3px solid #0076C0;

  &:hover {
    background: #FFFFFF;
    color: #0076C0;
    border: 3px solid #0076C0;
  }
}

.username {
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
    font-size: 11px;
    background: #0076C0;
    color: #FFFFFF;
    border: 3px solid #0076C0;

  }
  .container{
    padding-left: 3px;
    width: 12vh;
    height: 17vh;
  }
  .username {
    font-size: 11px;
    margin: 7px 0;
  }
  .password{
    font-size: 11px;
  }
  .invalid-data {
    font-size: 9px
  }

}
</style>