<template>
  <div>
    <h2>Welcome to</h2>
    <TextLogo />
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
      <button class="login-btn">Login</button>
      <div class="my-5">or</div>
      <button class="guest-login-btn">Guest</button>
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
import BaseInput from '@/components/blog/BaseInput.vue';
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

h3 {
  margin: 0px;
}
</style>
