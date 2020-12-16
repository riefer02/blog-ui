<template>
  <div class="blog-list-container">
    <h2>Blog List</h2>
    <div class="filter">
      <label for="filter" class="filter-label">Filter by Topic</label>
      <select class="filter-option" v-model="activeFilter">
        <option
          v-for="option in filterOptions"
          :value="option"
          :key="option"
          :selected="option === activeFilter"
          >{{ option }}</option
        ></select
      >
    </div>
    <div class="d-flex justify-center">
      <BlogCard
        v-for="blog in filteredBlogs"
        :key="blog.title"
        :blog="blog"
        :deleteBlog="deleteBlog"
        :loadState="loadState"
      ></BlogCard>
    </div>
  </div>
</template>

<script>
import BlogService from '../../services/BlogService';
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
  mounted() {
    this.$store.dispatch('retrieveBlogs');
  },
  data: () => ({
    activeFilter: '',
    loadState: true
  }),
  watch: {
    blogs() {
      this.loadState = false;
    }
  },
  computed: {
    filteredBlogs() {
      let blogList = this.blogs.filter(blog => {
        return blog.topic.match(this.activeFilter);
      });
      return blogList;
    },
    filterOptions() {
      let filterList = this.$store.state.blogTopics;
      filterList.unshift('');
      return filterList;
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

.filter {
  &-label {
    margin-right: 1rem;
    font-size: 1.2rem;
    line-height: 1.7rem;
  }

  &-option {
    margin: 15px 0;
    padding: 10px 10px;
    outline: none;
    border: 1px solid #bbb;
    border-radius: 20px;
    background-color: #fff;
    display: inline-block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -ms-transition: 0.2s ease all;
    -o-transition: 0.2s ease all;
    transition: 0.2s ease all;
    font-size: 1rem;
  }
}
</style>
