<template>
  <div>
    <div class="toolbar-dodge">
      <h1>Welcome to the Blog Arena</h1>
      <p class="blog-view-text">
        This is an area where users can create blog posts and share them with
        visitors. If you are logged in you will be able to create a blog post.
      </p>
    </div>
    <CreateBlogPost v-if="loggedIn" />
    <BlogList :blogs="blogs" />
  </div>
</template>

<script>
import { authComputed } from '@/store/helper.js';
import CreateBlogPost from '@/components/blog/CreateBlogPost.vue';
import BlogList from '@/components/list/BlogList.vue';
export default {
  components: {
    CreateBlogPost,
    BlogList
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
    ...authComputed
  }
};
</script>

<style lang="scss" scoped>
.blog-view-text {
  font-size: 1.2rem;
  line-height: 1.7rem;
}
</style>
