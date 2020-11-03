<template>
  <div>
    <Navigation />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/three">Three</router-link>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <transition name="fade" mode="out-in">
      <Snackbar />
    </transition>
    <Modal
      :showModal="showModal"
      :modalConfig="modalConfig"
      @handleModal="handleModal(modalState)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Modal from '@/components/utility/Modal.vue';
import Snackbar from '@/components/utility/Snackbar.vue';
import Navigation from '@/components/navigation/Nav.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faWrench,
  faTrash,
  faWindowClose,
  faFeatherAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faWrench, faTrash, faWindowClose, faFeatherAlt);

export default {
  name: 'App',
  components: {
    Snackbar,
    Navigation,
    FontAwesomeIcon,
    Modal
  },
  data: () => ({
    showModal: true
  }),
  methods: {
    handleModal(state) {
      return (this.showModal = state);
    }
  },
  computed: mapState({
    modalConfig: state => state.modalConfig
  })
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e51;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  margin: 0 auto;
}

.d-flex {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: stretch;
}

.justify-center {
  justify-content: center;
}

/*** Transitions ***/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter {
  opacity: 0;
  transform: translateX(10px);
}

.slide-fade-enter-from {
  opacity: 0;
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.slide-up-enter {
  transform: translateY(10px); /* start 10px down*/
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.2s ease;
}
</style>
