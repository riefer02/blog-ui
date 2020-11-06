<template>
  <div class="home">
      <ImageTextLogo width="500" />
    <CreateBlogPost/>
  </div>
</template>

<script>
import ImageTextLogo from '@/components/logo/ImageTextLogo.vue';
import CreateBlogPost from '@/components/blog/CreateBlogPost.vue';

export default {
  name: 'Home',
  components: {
    CreateBlogPost,
     ImageTextLogo
  },
  // computed: {
  //   screenWidth() {
  //     return window.innerWidth;
  //   }
  // }
}
</script>
