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
    <transition name="fade">
      <p v-if="ifMessage">
        {{ messageContent }}
        <button @click="clearMessage" class="clear-btn">Close</button>
      </p>
    </transition>
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
    ifMessage: false,
    messageContent: '',
    categories: ['music', 'web development'],
    blog: {
      title: '',
      summary: '',
      topic: ''
    }
  }),
  methods: {
    clearMessage: function() {
      this.ifMessage = !this.ifMessage;
      this.messageContent = '';
    },
    formSubmit: async function() {
      try {
        let self = this;
        let { title, summary, topic } = self.blog;
        if (!title || !summary || !topic) {
          this.messageContent = 'Validation Error';
          return (this.ifMessage = true);
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
        self.message = true;
        self.messageContent =
          'Your blog post has been saved to database successfully';
        this.$store.dispatch('retrieveBlogs');
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
      return this.$store.state.blogs;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-leave-to,
.fade-enter {
  opacity: 0;
}
</style>
