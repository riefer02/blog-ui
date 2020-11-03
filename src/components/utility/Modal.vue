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
        <div v-if="modalMode === 'editBlog'">
          <form>
            <h3>Blog Editor Mode</h3>
            <!-- <div>{{ modalConfig.modalData }}</div> -->
            <BaseInput
              label="Blog Title"
              type="text"
              v-model="this.blog.title"
            />
            <BaseSelect
              :options="categories"
              label="Topic"
              :placeholder="topicPlaceholder"
              v-model="blog.topic"
            />
            <BaseTextArea
              label="Summary"
              :placeholder="summaryPlaceholder"
              v-model="blog.summary"
            />
          </form>
        </div>
        <div v-else-if="modalMode === 'disabled'">
          <h3 class="modal-disabled-text">Modal Disabled</h3>
          <p>This is the default state of the modal</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BaseInput from '@/components/blog/BaseInput.vue';
import BaseSelect from '@/components/blog/BaseSelect.vue';
import BaseTextArea from '@/components/blog/BaseTextArea.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'Modal',
  props: {
    modalConfig: {
      type: Object
    }
  },
  components: {
    BaseInput,
    BaseSelect,
    BaseTextArea,
    FontAwesomeIcon
  },
  data: () => ({
    editBlogMode: false,
    blog: {
      title: '',
      summary: '',
      topic: ''
    }
  }),
  methods: {
    resetModal() {
      let resetConfig = {
        modalType: 'disabled',
        modalActive: false,
        modalData: {}
      };
      this.$store.commit('SET_MODAL', resetConfig);
    }
  },
  computed: {
    modalMode() {
      return this.modalConfig.modalType;
    },
    titlePlaceholder() {
      return this.modalConfig.modalData.title;
    },
    topicPlaceholder() {
      return this.modalConfig.modalData.topic;
    },
    summaryPlaceholder() {
      return this.modalConfig.modalData.summary;
    },
    ...mapState({
      categories: state => state.blogTopics
    })
  },
  created() {
    this.blog.title = this.titlePlaceholder;
  }
};
</script>

<style lang="scss" scoped>
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

.modal {
  position: relative;
  width: auto;
  z-index: 9999;
  margin: 0 auto;
  padding: 20px 30px;
  background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
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
.close-btn:hover {
  background-color: #f25f5c;
  transform: scale(1.1);
}

.modal-disabled-text {
  padding: 1rem;
  color: white;
}
</style>
