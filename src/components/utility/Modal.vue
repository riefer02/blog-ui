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
          <h3>Blog Editor Mode</h3>
          <p class="pop-field-opt-txt">
            Populate Fields
          </p>
          <button class="pop-fields-btn" @click.prevent="populateFields()">
            <font-awesome-icon
              :icon="['fas', 'feather-alt']"
              class="pop-field-icon"
            />
          </button>
          <form @submit.prevent="formSubmit">
            <!-- <div>{{ modalConfig.modalData }}</div> -->
            <BaseInput
              label="Blog Title"
              type="text"
              v-model="blog.title"
              :placeholder="titlePlaceholder"
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
            <button class="submit-btn">Submit</button>
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
    },
    populateFields() {
      this.blog.title = this.blogData.title;
      this.blog.topic = this.blogData.topic;
      this.blog.summary = this.blogData.summary;
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
    blogData() {
      return this.modalConfig.modalData;
    },
    ...mapState({
      categories: state => state.blogTopics
    })
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
.close-btn:hover,
.pop-fields-btn:active,
.pop-fields-btn:hover {
  background-color: #f25f5c;
  transform: scale(1.1);
}

.modal-disabled-text {
  padding: 1rem;
  color: white;
}

.pop-fields-btn {
  background-color: #1abc9c;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  border: none;
  padding: 0.3rem 0.8rem;
  outline: none !important;
  box-shadow: none !important;
  transition: all 0.2s ease-in;
  padding: 0.7rem;
  margin-left: 6px;
}

.pop-field-icon {
  color: white;
  position: relative;
  right: 1px;
}

.pop-field-opt-txt {
  position: relative;
  display: inline-block;
  top: -3px;

  font-size: 0.8rem;
}
</style>
