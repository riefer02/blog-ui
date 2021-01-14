<template>
  <div>
    <Navigation />
    <SocialMedia />
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Snackbar />
    <Modal :modalConfig="modalConfig" @handleModal="handleModal(modalState)" />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Modal from '@/components/modal/appModal.vue';
import Snackbar from '@/components/utility/Snackbar.vue';
import Navigation from '@/components/navigation/Nav.vue';
import SocialMedia from '@/components/socialmedia/SocialMedia.vue';
import Footer from '@/components/layout/Footer.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faWrench,
  faTrash,
  faWindowClose,
  faFeatherAlt,
  faLayerGroup,
  faServer,
  faBezierCurve,
  faCaretRight,
  faArrowLeft,
  faHeart,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Axios from 'axios';
library.add(
  faWrench,
  faTrash,
  faWindowClose,
  faFeatherAlt,
  faGithub,
  faInstagram,
  faWhatsapp,
  faYoutube,
  faLayerGroup,
  faServer,
  faBezierCurve,
  faCaretRight,
  faArrowLeft,
  faHeart,
  faComment
);

export default {
  name: 'App',
  components: {
    Snackbar,
    Navigation,
    FontAwesomeIcon,
    Modal,
    SocialMedia,
    Footer,
  },
  data: () => ({}),
  methods: {},
  computed: {
    ...mapState({
      modalConfig: (state) => state.modalConfig,
    }),
  },
  created() {
    // store user data to bypass login...
    const userString = localStorage.getItem('user');
    if (userString) {
      const userData = JSON.parse(userString);
      this.$store.commit('SET_USER_DATA', userData);
    }
    // if user data persists do not load initial login/register modal...
    console.log(this.$store.state.user);
    if (this.$store.state.user) {
      let modalConfig = {
        modalType: 'disabled',
        modalActive: false,
        modalData: {},
      };
      this.$store.commit('SET_MODAL', modalConfig);
    }
    // Auto logout if hacker attempts to create fake user data...
    Axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          this.$store.dispatch('logout');
        }
        return Promise.reject(error);
      }
    );
  },
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

body {
  margin: 0 auto;
}

html {
  scroll-behavior: smooth;
}

hr {
  width: 80%;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(239, 141, 156, 0.8),
    rgba(44, 62, 81, 1),
    rgba(239, 141, 156, 0.8)
  );
}

/* Utility Classes */

.toolbar-dodge {
  padding: 2rem 20rem 1rem 20rem;
}

@media screen and (max-width: 1300px) {
  .toolbar-dodge {
    padding: 3rem 17rem 1rem 17rem;
  }
}
@media screen and (max-width: 1000px) {
  .toolbar-dodge {
    padding: 3rem 15rem 1rem 15rem;
  }
}
@media screen and (max-width: 970px) {
  .toolbar-dodge {
    padding: 4rem 11rem 1rem 11rem;
  }
}
@media screen and (max-width: 722px) {
  .toolbar-dodge {
    padding: 4rem 9.5rem 1rem 9.5rem;
  }
}
@media screen and (max-width: 600px) {
  .toolbar-dodge {
    padding: 3rem 3.4rem 1rem 3.4rem;
  }
}

.pt-5 {
  padding-top: 5px;
}

.my-5 {
  margin-top: 5px;
  margin-bottom: 5px;
}

.mb-5 {
  margin-bottom: 3rem;
}

.d-flex {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: stretch;
}

.flex-column {
  flex-direction: column;
}

.justify-center {
  justify-content: center;
}

/*** Transitions ***/

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Slide-Fade */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
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

/* Slide Up */
.slide-up-enter-from {
  transform: translateY(10px); /* start 10px down*/
  opacity: 0;
}

.slide-up-leave-from {
  opacity: 1;
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-active {
  transition: all 0.4s ease;
}

@keyframes shine {
  10% {
    opacity: 1;
    top: -220%;
    left: -420%;
    transition-property: left, top, opacity;
    transition-duration: 0.7s, 0.7s, 0.15s;
    transition-timing-function: ease;
  }

  65% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
  }
}
</style>
