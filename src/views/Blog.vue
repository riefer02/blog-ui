<template>
  <div class="blog-container">
    <div class="toolbar-dodge">
      <h1>Welcome to the Blog Arena</h1>
      <p class="blog-view-text">
        This is an area where users can create blog posts and share them with
        visitors. If you are logged in you will be able to create a blog post.
      </p>
    </div>
    <button
      class="toggle-create-blog-btn"
      @click="toggleCreateBlog()"
      v-if="loggedIn"
    >
      Create Blog
    </button>
    <transition name="slide-up" mode="out-in">
      <CreateBlogPost v-if="loggedIn && activeCreateBlog" />
    </transition>
    <BlogList :blogs="blogs" />
  </div>
</template>

<script>
import { authComputed } from '@/store/helper.js';
import CreateBlogPost from '@/components/blog/CreateBlogPost.vue';
import BlogList from '@/components/blog/BlogList.vue';
export default {
  components: {
    CreateBlogPost,
    BlogList
  },
  data: () => ({
    activeCreateBlog: false
  }),
  methods: {
    toggleCreateBlog() {
      this.activeCreateBlog = !this.activeCreateBlog;
    }
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

.toggle-create-blog-btn {
  padding: 0.6rem 1.2rem;
  width: auto;
  background: #1abc9c;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.2s ease all;
  border-radius: 10px 0 10px 0;
  outline: none !important;
  box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.2);
}

@media screen and (min-width: 1200px) {
  .blog-container {
    min-height: 850px;
  }
}
</style>
