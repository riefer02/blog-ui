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
    <div v-show="blogs.length === 0">
      I'm sorry but database is offline
    </div>
    <div class="d-flex justify-center blog-list-item-container">
      <BlogCard
        v-for="blog in filteredBlogs"
        :key="blog.title"
        :blog="blog"
        :deleteBlog="deleteBlog"
        :loadState="loadState"
      ></BlogCard>

      <Observer @intersect="intersected" />
    </div>
  </div>
</template>

<script>
import BlogService from '../../services/BlogService';
import BlogCard from '@/components/blog/BlogCard.vue';
import Observer from '@/components/utility/Observer.vue';
export default {
  name: 'BlogList',
  components: {
    BlogCard,
    Observer
  },
  props: {
    blogs: {
      type: Array
    }
  },
  created() {
    this.loadState = true;
    this.$store.dispatch('retrieveBlogs');
  },
  mounted() {
    setTimeout(() => {
      this.loadState = false;
    }, 1500);
  },
  data: () => ({
    activeFilter: '',
    loadState: undefined
    // page: 0,
    // blogList: [],
    // chunkSize: 6
  }),
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
    // intersected() {
    //   if (this.blogList.length === 0) {
    //     return (this.blogList = this.filteredBlogs.slice(0, 5));
    //   }
    //   console.log('intersected');
    //   this.page++;
    //   const start = this.page * this.chunkSize;
    //   console.log(start);
    //   const end = start + this.chunkSize;
    //   console.log(end);
    //   const newChunk = this.filteredBlogs.slice(start, end);
    //   this.blogList = [...this.blogList, ...newChunk];
    // },
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

.blog-list-item-container {
  // min-height: 500px;
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
