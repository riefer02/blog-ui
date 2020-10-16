<template>
  <div class="home">
    <CreateBlogPost/>
  </div>
</template>

<script>
import CreateBlogPost from '@/components/blog/CreateBlogPost.vue';

export default {
  name: 'Home',
  components: {
    CreateBlogPost,
  }
}
</script>
