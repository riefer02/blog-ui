<template>
  <div>
    <h2>Welcome to</h2>
    <TextLogo :altColor="true" />
    <h3>Register</h3>
    <form @submit.prevent="formSubmit">
      <BaseInput
        type="text"
        v-model="registration.username"
        placeholder="Username"
      />
      <BaseInput
        type="email"
        v-model="registration.email"
        placeholder="Email"
      />
      <BaseInput
        type="password"
        v-model="registration.password"
        placeholder="Password"
      />
      <button class="login-btn" @click.prevent="registerNewUser()">
        Register
      </button>

      <hr />
      <p class="sign-up-text">Have an Account?&nbsp;</p>
      <p class="sign-up-link" @click="activateLoginModal">Log In</p>
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
    registration: {
      username: '',
      email: '',
      password: ''
    }
  }),
  components: {
    TextLogo,
    BaseInput
  },
  methods: {
    validateEmail(emailAddr) {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          emailAddr
        )
      ) {
        return true;
      }
      return false;
    },

    checkPassword(password) {
      var passwordRules = /^[A-Za-z]\w{7,14}$/;
      if (password.match(passwordRules)) {
        return true;
      } else {
        return false;
      }
    },

    activateLoginModal() {
      let modalConfig = {
        modalType: 'login',
        modalActive: true,
        modalData: {}
      };
      this.$store.commit('SET_MODAL', modalConfig);
    },
    async registerNewUser() {
      // Validate Username
      if (this.registration.username.length <= 2) {
        this.$store.commit(
          'SET_SNACK',
          'Username must be greater than one characters'
        );
        return;
      }
      // Validate Email
      let emailValidity = this.validateEmail(this.registration.email);
      if (!emailValidity) {
        this.$store.commit('SET_SNACK', 'Email is not valid');
        return;
      }
      // Validate Password
      let passwordValidity = this.checkPassword(this.registration.password);
      if (!passwordValidity) {
        this.$store.commit(
          'SET_SNACK',
          'Password must be between 7 to 16 alphanumeric characters, underscore, and first character must be a letter'
        );
        return;
      }
      await this.$store
        .dispatch('registerNewUser', {
          username: this.registration.username,
          password: this.registration.password,
          email: this.registration.email
        })
        .then(() => {
          let modalConfig = {
            modalType: 'disabled',
            modalActive: false,
            modalData: {}
          };

          this.$store.commit('SET_MODAL', modalConfig);
          let message = `Welcome to riefer.io ${this.registration.username}!`;
          this.$store.commit('SET_SNACK', message);
        })
        .catch(err => {
          console.log(err);
          this.$store.commit(
            'SET_SNACK',
            "I'm sorry we had an error during registration"
          );
        });
    }
  }
};
</script>

<style lang="scss" scoped>
// Login Mode Styles
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
