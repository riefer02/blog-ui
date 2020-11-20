<template>
  <div>
    <Navigation />
    <SocialMedia />
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <transition appear name="slide-fade" mode="out-in">
      <Snackbar />
    </transition>
    <Modal
      :showModal="showModal"
      :modalConfig="modalConfig"
      @handleModal="handleModal(modalState)"
    />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Modal from '@/components/utility/Modal.vue';
import Snackbar from '@/components/utility/Snackbar.vue';
import Navigation from '@/components/navigation/Nav.vue';
import SocialMedia from '@/components/socialmedia/SocialMedia.vue';
import Footer from '@/components/layout/Footer.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faInstagram,
  faWhatsapp,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faWrench,
  faTrash,
  faWindowClose,
  faFeatherAlt,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(
  faWrench,
  faTrash,
  faWindowClose,
  faFeatherAlt,
  faGithub,
  faInstagram,
  faWhatsapp,
  faYoutube,
  faLayerGroup
);

export default {
  name: 'App',
  components: {
    Snackbar,
    Navigation,
    FontAwesomeIcon,
    Modal,
    SocialMedia,
    Footer
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
  box-sizing: border-box;
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

/* Utility Classes */

.pt-5 {
  padding-top: 5px;
}

.my-5 {
  margin-top: 5px;
  margin-bottom: 5px;
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
