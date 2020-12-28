<template>
  <div>
    <h2>Welcome to</h2>
    <TextLogo :altColor="true" />
    <h3>Login</h3>
    <form @submit.prevent="formSubmit">
      <BaseInput
        type="text"
        v-model="loginCredentials.username"
        placeholder="Username"
      />
      <BaseInput
        type="password"
        v-model="loginCredentials.password"
        placeholder="Password"
      />
      <button class="login-btn" @click.prevent="loginUser()">Login</button>
      <div class="my-5">or</div>
      <button class="guest-login-btn" @click.prevent="loginGuest()">
        Guest
      </button>
      <hr />
      <p class="sign-up-text">Need an account?&nbsp;</p>
      <p class="sign-up-link" @click="switchToSignUpMode">
        Sign Up
      </p>
    </form>
  </div>
</template>

<script>
import TextLogo from '@/components/logo/TextLogo.vue';
import BaseInput from '@/components/inputs/BaseInput.vue';
export default {
  props: {
    modalConfig: {
      type: Object
    }
  },
  data: () => ({
    loginCredentials: {
      username: '',
      password: ''
    }
  }),
  components: {
    TextLogo,
    BaseInput
  },
  methods: {
    switchToSignUpMode() {
      let modalConfig = {
        modalType: 'register',
        modalActive: true,
        modalData: {}
      };
      this.$store.commit('SET_MODAL', modalConfig);
    },
    loginGuest() {
      let modalConfig = {
        modalType: 'disabled',
        modalActive: false,
        modalData: {}
      };
      this.$store.commit('SET_GUEST_DATA', 'Guest');
      this.$store.commit('SET_MODAL', modalConfig);
      let message = `Welcome Guest!`;
      this.$store.commit('SET_SNACK', message);
    },
    async loginUser() {
      let message;
      // Write form validation logic here...
      await this.$store
        .dispatch('loginUser', {
          username: this.loginCredentials.username,
          password: this.loginCredentials.password
        })
        .then(() => {
          let modalConfig = {
            modalType: 'disabled',
            modalActive: false,
            modalData: {}
          };
          this.$store.commit('SET_MODAL', modalConfig);
          message = `Welcome back ${this.loginCredentials.username}!`;
          this.$store.commit('SET_SNACK', message);
        })
        .catch(err => {
          message = `I'm sorry username and password are incorrect`;
          console.log(err);
          this.$store.commit('SET_SNACK', message);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-btn,
.guest-login-btn {
  padding: 15px 50px;
  width: auto;
  background: #1abc9c;
  border: none;
  color: white;
  cursor: pointer;
  display: inline-block;
  clear: right;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;
  border-radius: 10px 0 10px 0;
  outline: none !important;
  box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.2);
}

.login-btn:hover,
.guest-login-btn:hover {
  transform: scale(1.02);
}

.sign-up-text,
.sign-up-link {
  display: inline-block;
}

.sign-up-link {
  cursor: pointer;
}

.sign-up-link:hover {
  color: #fff;
}

.login-btn,
.guest-login-btn {
  padding: 15px 50px;
  width: auto;
  background: #1abc9c;
  border: none;
  color: white;
  cursor: pointer;
  display: inline-block;
  clear: right;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;
  border-radius: 10px 0 10px 0;
  outline: none !important;
  box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.2);
}

.login-btn:hover,
.guest-login-btn:hover {
  transform: scale(1.02);
}

h3 {
  margin-top: 0px;
}

hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, #ef8d9c, #e4536a, #ef8d9c);
}
</style>
