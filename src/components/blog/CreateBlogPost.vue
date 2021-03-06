<template>
  <div class="create-blog-form">
    <h1>Create New Blog</h1>
    <p v-if="userName">Author: {{ userName }}</p>
    <form @submit.prevent="formSubmit">
      <BaseSelect :options="categories" label="Topic" v-model="blog.topic" />
      <BaseInput label="Blog Title" type="text" v-model="blog.title" />
      <BaseTextArea label="Summary" v-model="blog.summary" />
      <button class="submit-btn">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BlogService from '@/services/BlogService.js';
import BaseInput from '@/components/inputs/BaseInput.vue';
import BaseSelect from '@/components/inputs/BaseSelect.vue';
import BaseTextArea from '@/components/inputs/BaseTextArea.vue';

export default {
  name: 'BlogForm',
  components: {
    BaseInput,
    BaseSelect,
    BaseTextArea,
  },

  data: () => ({
    messageContent: '',
    blog: {
      author: '',
      title: '',
      summary: '',
      topic: '',
    },
  }),
  methods: {
    formSubmit: async function () {
      try {
        let self = this;
        let { title, summary, topic, author } = self.blog;
        if (!title || !summary || !topic) {
          this.$store.commit('SET_SNACK', 'Validation Error');
          return;
        }
        const newBlog = {
          author,
          title,
          summary,
          topic,
        };
        await BlogService.createBlog(newBlog);
        self.blog.title = '';
        self.blog.summary = '';
        self.blog.topic = '';
        self.$store.commit(
          'SET_SNACK',
          'Your blog post has been saved to database successfully'
        );
        this.$store.dispatch('retrieveBlogs');
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.blog.author = this.userName;
  },
  computed: {
    userName() {
      return this.$store.state.user.username;
    },
    ...mapState({
      categories: (state) => state.blogTopics,
    }),
  },
};
</script>

<style lang="scss">
button {
  display: inline-flex;
  font-family: 'Open sans', sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

.clear-btn {
  border-radius: 10px;
  background-color: orangered;
  outline: none !important;
  box-shadow: none !important;
}

form {
  margin: 0 auto;
  width: 400px;
  height: auto;
  overflow: hidden;
  background: inherit;
}

.submit-btn {
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
  box-shadow: none !important;
}

.submit-btn:hover {
  transform: scale(1.02);
}

button:hover {
  opacity: 0.8;
}

button:active {
  opacity: 0.4;
}

@media screen and (max-width: 600px) {
  form {
    width: auto;
    padding: 0 1rem;
  }
}
</style>
