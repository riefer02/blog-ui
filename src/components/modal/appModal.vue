<template>
  <div>
    <div class="overlay" v-if="modalConfig.modalActive">
      <div class="modal" v-if="modalConfig.modalActive">
        <button v-if="loggedIn" class="close-btn" @click="resetModal">
          <font-awesome-icon
            :icon="['fas', 'window-close']"
            class="close-icon"
          />
        </button>
        <div class="modal-content">
          <LoginUI v-if="modalMode === 'login'" key="1" />
          <SignUpUI v-else-if="modalMode === 'register'" key="2" />
          <EditorUI
            v-else-if="modalMode === 'editor'"
            key="3"
            :modalConfig="modalConfig"
          />
          <div v-else-if="modalMode === 'disabled'" key="4">
            <h3 class="modal-disabled-text">Modal Disabled</h3>
            <p>This is the default state of the modal</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authComputed } from '@/store/helper.js';
import LoginUI from '@/components/modal/LoginUI.vue';
import SignUpUI from '@/components/modal/SignUpUI.vue';
import EditorUI from '@/components/modal/EditorUI.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'Modal',
  props: {
    modalConfig: {
      type: Object,
      default: () => {
        return { modalType: 'disabled', modalActive: false, modalData: {} };
      },
    },
  },
  components: {
    FontAwesomeIcon,
    LoginUI,
    SignUpUI,
    EditorUI,
  },
  data: () => ({
    editBlogMode: false,
    messageContent: '',
  }),
  methods: {
    resetModal() {
      let resetConfig = {
        modalType: 'disabled',
        modalActive: false,
        modalData: {},
      };
      this.$store.commit('SET_MODAL', resetConfig);
    },
  },
  computed: {
    modalMode() {
      return this.modalConfig.modalType;
    },
    ...authComputed,
  },
};
</script>

<style lang="scss" scoped>
// Universal Modal Styles
.overlay {
  position: fixed;
  z-index: 9998;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(107, 45, 92, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;
  z-index: 9999;
  height: auto;
  max-height: 100%;
  width: 70%;
  max-width: 800px;
  padding: 1rem 1rem;
  margin: 2rem auto;
  border-radius: 0.25rem;
  background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  overflow: auto;

  &-content {
    overflow: auto;
  }
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

@media screen and (max-width: 900px) {
  .modal {
    width: 80%;
  }
}

@media screen and (max-width: 600px) {
  .modal {
    width: 90%;
  }
}

@media screen and (max-width: 380px) {
  .modal {
    width: 98%;
    margin: 0 auto;
  }
}
</style>
