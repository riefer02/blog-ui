<template>
  <div class="nav">
    <input type="checkbox" class="nav-checkbox" id="nav-toggle" />
    <label for="nav-toggle" class="nav-btn">
      <span class="nav-icon">&nbsp;</span>
    </label>
    <div class="nav-bg">&nbsp;</div>

    <nav class="nav-nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/" class="nav-link" @click="scrollToTop()"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/blogs" class="nav-link" @click="scrollToTop()"
            >Blog</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/three" class="nav-link" @click="scrollToTop()"
            >Three</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/music" class="nav-link" @click="scrollToTop()"
            >Music</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/resume" class="nav-link" @click="scrollToTop()"
            >Resume</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            v-if="loggedIn"
            to="/"
            class="nav-link"
            @click.prevent="logout()"
            >Logout</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            v-if="!loggedIn"
            to="/"
            @click.prevent="activateLoginModal()"
            class="nav-link"
          >
            Login
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { authComputed } from '@/store/helper.js';
export default {
  name: 'Nav',
  watch: {
    $route() {
      document.getElementById('nav-toggle').checked = false;
    },
  },
  computed: {
    ...authComputed,
  },
  methods: {
    activateLoginModal() {
      let modalConfig = {
        modalType: 'login',
        modalActive: true,
        modalData: {},
      };
      this.$store.commit('SET_MODAL', modalConfig);
    },
    logout() {
      this.$store.dispatch('logout');
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  &-checkbox {
    display: none;
    backface-visibility: hidden;
  }

  &-btn {
    background-color: #1abc9c;
    height: 5.6rem;
    width: 5.6rem;
    position: fixed;
    top: 1.8rem;
    left: 2.3rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba(#000, 0.1);
    text-align: center;
    cursor: pointer;
    overflow: hidden;

    &:after {
      animation: shine 5s cubic-bezier(1, -0.43, 1, 1) infinite;
      animation-fill-mode: forwards;
      content: '';
      position: absolute;
      top: -110%;
      left: -210%;
      width: 200%;
      height: 200%;
      opacity: 0;
      transform: rotate(30deg);
      background: rgba(255, 255, 255, 0.13);
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.13) 0%,
        rgba(255, 255, 255, 0.13) 77%,
        rgba(255, 255, 255, 0.5) 92%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &:active:after {
      opacity: 0;
    }
  }

  &-bg {
    height: 4.7rem;
    width: 4.7rem;
    border-radius: 50%;
    position: fixed;
    top: 2.3rem;
    left: 2.8rem;
    background-image: radial-gradient(#ef8d9c, #ffc39e);
    z-index: 1000;
    transition: transform 0.8s cubic-bezier(0.47, 0.15, 0.2, 1.19);
  }

  &-nav {
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1500;
    opacity: 0;
    width: 0%;
    transition: all 0.8s cubic-bezier(0.47, 0.15, 0.2, 1.19);
  }

  &-list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
    width: 100%;
  }
  &-item {
    margin: 0.7rem;
    overflow: hidden;
  }
  &-link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 2.7rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: #ffffff;
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #ffffff 50%
      );
      background-size: 234%;
      transition: all 0.4s;
      span {
        margin-right: 1.5rem;
        display: inline-block;
      }
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: #1abc9c;
      transform: translateX(1rem);
    }
  }
  &-checkbox:checked ~ &-bg {
    transform: scale(66.5);
  }
  &-checkbox:checked ~ &-nav {
    opacity: 1;
    width: 100%;
  }

  &-icon {
    position: relative;
    margin: auto;
    margin-top: 2.7rem;
    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: white;
      display: inline-block;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }

  &-btn:hover &-icon::before {
    top: -1rem;
  }
  &-btn:hover &-icon::after {
    top: 1rem;
  }

  &-checkbox:checked + &-btn &-icon {
    background-color: transparent;
  }
  &-checkbox:checked + &-btn &-icon::before {
    top: 0;
    transform: rotate(135deg);
  }
  &-checkbox:checked + &-btn &-icon::after {
    top: 0;
    transform: rotate(-135deg);
  }

  &-checkbox:checked + &-btn {
    box-shadow: 0px 0px 50px rgba(#fff, 0.5);
  }
}

@media only screen and (max-width: 600px) {
  .nav {
    &-btn {
      height: 3rem;
      width: 3rem;
      position: fixed;
      top: 1rem;
      left: 1.2rem;
    }
    &-bg {
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      position: fixed;
      top: 1.5rem;
      left: 2.1rem;
    }

    &-icon {
      position: relative;
      margin: auto;
      margin-top: 1.4rem;
      &,
      &::before,
      &::after {
        width: 2rem;
        height: 1px;
        background-color: white;
        display: inline-block;
      }

      &::before,
      &::after {
        content: '';
        position: absolute;
        left: 0;
        transition: all 0.2s;
      }

      &::before {
        top: -0.6rem;
      }
      &::after {
        top: 0.6rem;
      }
    }
    &-list {
      left: 47%;
      margin: 0;
      padding: 0;
    }
    &-btn:hover &-icon::before {
      top: -0.7rem;
    }
    &-btn:hover &-icon::after {
      top: 0.7rem;
    }

    &-link {
      &:link,
      &:visited {
        font-size: 2rem;
      }
    }
  }
}
</style>
