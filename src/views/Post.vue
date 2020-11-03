<template>
  <div>
    <BlogSkeletonLoader v-if="loadState" width="300px" height="80px" />
    <div v-else class="blog-card">
      <h3 class="blog-card-title">{{ blog.title }}</h3>
      <h4 class="blog-card-topic">{{ blog.topic }}</h4>
      <p class="blog-card-text">{{ blog.summary }}</p>
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

<style lang="scss" scoped>
.blog-card {
  width: 270px;
  height: 300px;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  backface-visibility: hidden;
  padding: 15px;
  vertical-align: middle;
  padding: 1rem;
  background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
}

.blog-card-title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.blog-card-text {
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
</style>
