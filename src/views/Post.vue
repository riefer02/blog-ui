<template>
  <div>
    <h3>{{ blog.title }}</h3>
    <h4>{{ blog.topic }}</h4>
    <p>{{ blog.summary }}</p>
  </div>
</template>

<script>
import BlogService from '../../services/BlogService';
export default {
  props: ['id'],
  data: () => ({
    blog: {}
  }),
  mounted() {
    BlogService.getBlog(this.id).then(response => {
      this.blog = response.data.blog[0];
    });
  }
};
</script>

<style lang="scss" scoped></style>
