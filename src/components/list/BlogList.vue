<template>
  <div class="blog-list-container">
    <h2>Blog List</h2>
    <div class="d-flex justify-center">
      <BlogCard
        v-for="blog in blogs"
        :key="blog.title"
        :blog="blog"
        :deleteBlog="deleteBlog"
      ></BlogCard>
    </div>
  </div>
</template>

<script>
import BlogService from '../../../services/BlogService';
import BlogCard from '@/components/list/BlogCard.vue';
export default {
  components: {
    BlogCard
  },
  props: {
    blogs: {
      type: Array
    }
  },
  methods: {
    deleteBlog(id) {
      console.log('Blog deletion process has begun...');
      BlogService.deleteBlog(id).then(() => {
        console.log(
          'Blog was successfully deleted from database. Filtering and rerendering blog list...'
        );
        let newBlogList = this.$store.state.blogs;
        newBlogList = newBlogList.filter(blogs => blogs._id != id);
        this.$store.commit('SET_BLOGS', newBlogList);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-list-container {
  margin-bottom: 5rem;
}
</style>
