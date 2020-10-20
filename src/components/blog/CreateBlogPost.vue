<template>
  <div class="create-blog-form">
    <h1>Create New Blog</h1>
    <p>Author: {{ userName }}</p>
    <form @submit.prevent="formSubmit">
      <BaseSelect :options="categories" label="Topic" v-model="blog.topic" />
      <BaseInput label="Blog Title" type="text" v-model="blog.title" />
      <BaseTextArea label="Summary" v-model="blog.summary" />
      <button>Submit</button>
    </form>
    <p v-if="postSuccess">
      Your blog post has been saved to database successfully
      <button @click="clearMessage" class="clear-btn">Close</button>
    </p>
    <BlogList :blogs="blogs" />
  </div>
</template>

<script>
import BaseInput from '@/components/blog/BaseInput.vue';
import BaseSelect from '@/components/blog/BaseSelect.vue';
import BaseTextArea from '@/components/blog/BaseTextArea.vue';
import BlogList from '@/components/list/BlogList.vue';

export default {
  name: 'BlogForm',
  components: {
    BaseInput,
    BaseSelect,
    BaseTextArea,
    BlogList
  },
  mounted() {
    this.$store.dispatch('retrieveBlogs');
  },
  data: () => ({
    postSuccess: false,
    categories: ['music', 'web development'],
    blog: {
      title: '',
      summary: '',
      topic: ''
    },
  }),
  methods: {
    clearMessage: function() {
      this.postSuccess = !this.postSuccess;
    },
    formSubmit: async function() {
      try {
        let self = this;
        let { title, summary, topic } = self.blog;
        if (!title || !summary || !topic) {
          return console.log('form validation failure');
        }
        const newBlog = {
          title,
          summary,
          topic
        };
        const response = await self.axios.post(
          'http://localhost:6969/blog/create',
          newBlog
        );
        console.log(response);
        self.blog.title = '';
        self.blog.summary = '';
        self.blog.topic = '';
        self.postSuccess = true;
      } catch (error) {
        console.error(error);
      }
    }
  },
  computed: {
    userName() {
      return this.$store.state.user.name;
    },
    blogs() {
      return this.$store.state.blogs
    }
  }
};
</script>

<style lang="scss">
button,
label,
input,
optgroup,
select,
textarea {
  display: inline-flex;
  font-family: 'Open sans', sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

.clear-btn {
  border-radius: 10px;
  background-color: orangered;
}
</style>
