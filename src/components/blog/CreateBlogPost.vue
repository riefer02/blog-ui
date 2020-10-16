<template>
  <div class="create-blog-form">
    <h1>Create New Blog</h1>
    <p>Author: {{$store.state.user.name}}</p>
    <form @submit.prevent="formSubmit">
      <BaseSelect :options="categories" label="Topic" v-model="blog.topic" />
      <BaseInput label="Blog Title" type="text" v-model="blog.title" />
      <BaseTextArea label="Summary" v-model="blog.summary" />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/blog/BaseInput.vue';
import BaseSelect from '@/components/blog/BaseSelect.vue';
import BaseTextArea from '@/components/blog/BaseTextArea.vue';

export default {
  name: 'BlogForm',
  components: {
    BaseInput,
    BaseSelect,
    BaseTextArea
  },
  data: () => ({
    categories: ['music', 'web development'],
    blog: {
      title: '',
      summary: '',
      topic: ''
    }
  }),
  methods: {
    formSubmit: async function() {
      try {
        let self = this;
        let { title, summary, topic } = self.blog;
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
      } catch (error) {
        console.error(error);
      }
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
</style>
