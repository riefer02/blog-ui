<template>
  <div>
    <h2>Blog List</h2>
    <BlogCard v-for="blog in blogs" :key="blog.title" :blog="blog"></BlogCard>
  </div>
</template>

<script>
import BlogCard from '@/components/list/BlogCard.vue';
export default {
  components: {
    BlogCard
  },
  props: {
    blogs: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped></style>
