<template>
  <div>
    <div class="overlay" v-if="modalConfig.modalActive">
      <div class="modal" v-if="modalConfig.modalActive">
        <button class="close-btn" @click="resetModal">
          <font-awesome-icon
            :icon="['fas', 'window-close']"
            class="close-icon"
          />
        </button>
        <transition-group
          tag="div"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
          :css="false"
        >
          <LoginUI v-if="modalMode === 'login'" key="1" />
          <!-- Register New User -->
          <SignUpUI v-else-if="modalMode === 'register'" key="2" />
          <!-- Editor Mode -->
          <EditorUI
            v-else-if="modalMode === 'editor'"
            key="3"
            :modalConfig="this.modalConfig"
          />
          <!-- Disabled Mode -->
          <div v-else-if="modalMode === 'disabled'" key="4">
            <h3 class="modal-disabled-text">Modal Disabled</h3>
            <p>This is the default state of the modal</p>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import LoginUI from '@/components/modal/LoginUI.vue';
import SignUpUI from '@/components/modal/SignUpUI.vue';
import EditorUI from '@/components/modal/EditorUI.vue';
import Velocity from 'velocity-animate';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'Modal',
  props: {
    modalConfig: {
      type: Object
    }
  },
  components: {
    FontAwesomeIcon,
    LoginUI,
    SignUpUI,
    EditorUI
  },
  data: () => ({
    editBlogMode: false,
    messageContent: ''
  }),
  methods: {
    resetModal() {
      let resetConfig = {
        modalType: 'disabled',
        modalActive: false,
        modalData: {}
      };
      this.$store.commit('SET_MODAL', resetConfig);
      this.blog.title = '';
      this.blog.summary = '';
      this.blog.topic = '';
    },

    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      // var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 1 }, { complete: done });
      }, 500);
    },
    leave(el, done) {
      // var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, 0);
    }
  },
  computed: {
    modalMode() {
      return this.modalConfig.modalType;
    }
  }
};
</script>

<style lang="scss" scoped>
// Universal Modal Styles
.overlay {
  position: fixed;
  z-index: 9998;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(107, 45, 92, 0.5);
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #1abc9c;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  border: none;
  padding: 0.3rem 0.8rem;
  outline: none !important;
  box-shadow: none !important;
  transition: all 0.2s ease-in;
}
.close-icon {
  color: white;
  position: relative;
  right: 1px;
}

.close-btn:active,
.close-btn:hover,
.pop-fields-btn:active,
.pop-fields-btn:hover {
  background-color: #f25f5c;
  transform: scale(1.1);
}

// Disabled Mode Styles
.modal-disabled-text {
  padding: 1rem;
  color: white;
}

.modal {
  position: relative;
  width: auto;
  height: auto;
  z-index: 9999;
  margin: 0 auto;
  padding: 20px 30px;
  background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
}

@media screen and (min-width: 900px) {
  // Anything bigger than 900 px
  .modal {
    height: 80%;
    min-width: 400px;
  }
}
@media screen and (max-width: 768px) {
  // Anything 768 and smaller
  .modal {
    height: auto;
    width: 80%;
    padding: 3rem;
  }
}

@media screen and (max-width: 600px) {
  // Anything 600 and smaller
  .modal {
    height: 100vh;
    width: 100vw;
    padding: 2px;
  }
}
</style>
