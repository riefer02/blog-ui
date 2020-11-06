<template>
  <div>
    <CreateBlogPost />
    <BlogList :blogs="blogs" />
  </div>
</template>

<script>
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
  }
};
</script>

<style lang="scss" scoped></style>
