<template>
  <div>
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
      <button class="submit-btn" @click.prevent="updateBlog(this.blogID)">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/blog/BaseInput.vue';
import BaseSelect from '@/components/blog/BaseSelect.vue';
import BaseTextArea from '@/components/blog/BaseTextArea.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BlogService from '../../services/BlogService';
import { mapState } from 'vuex';
export default {
  props: {
    modalConfig: {
      type: Object
    }
  },
  data: () => ({
    blog: {
      title: '',
      summary: '',
      topic: ''
    }
  }),
  components: {
    BaseInput,
    BaseSelect,
    BaseTextArea,
    FontAwesomeIcon
  },
  methods: {
    populateFields() {
      this.blog.title = this.blogData.title;
      this.blog.topic = this.blogData.topic;
      this.blog.summary = this.blogData.summary;
    },
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
    async updateBlog(blogID) {
      try {
        let { title, summary, topic } = this.blog;
        if (!title || !summary || !topic) {
          this.messageContent = 'Validation Error';
          this.$store.commit('SET_SNACK', this.messageContent);
          return (this.ifMessage = true);
        }
        const updatedBlog = {
          title,
          summary,
          topic
        };
        BlogService.updateBlog(blogID, updatedBlog);
        this.blog.title = '';
        this.blog.summary = '';
        this.blog.topic = '';
        this.messageContent = 'Your blog post has been updated successfully';
        this.$store.commit('SET_SNACK', this.messageContent);
        this.resetModal();
        this.$store.dispatch('retrieveBlogs');
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    titlePlaceholder() {
      return this.modalConfig.modalData.title;
    },
    topicPlaceholder() {
      return this.modalConfig.modalData.topic;
    },
    summaryPlaceholder() {
      return this.modalConfig.modalData.summary;
    },
    blogID() {
      return this.modalConfig.modalData._id;
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
