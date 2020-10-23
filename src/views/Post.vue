<template>
  <div>
    <BlogSkeletonLoader v-if="loadState" width="300px" height="80px" />
    <div v-else>
      <h3>{{ blog.title }}</h3>
      <h4>{{ blog.topic }}</h4>
      <p>{{ blog.summary }}</p>
    </div>
  </div>
</template>

<script>
import BlogService from '../../services/BlogService';
import BlogSkeletonLoader from '@/components/utility/BlogSkeletonLoader.vue';

export default {
  name: 'BlogPost',
  components: {
    BlogSkeletonLoader
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    blog: {},
    loadState: true
  }),
  mounted() {
    BlogService.getBlog(this.id).then(response => {
      this.blog = response.data.blog[0];
      this.loadState = !this.loadState;
    });
  }
};
</script>

<style lang="scss" scoped></style>
