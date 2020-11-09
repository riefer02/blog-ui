<template>
  <div class="home">
    <CreateBlogPost />

    <ImageTextLogo width="480" />
  </div>
</template>

<script>
import ImageTextLogo from '@/components/logo/ImageTextLogo.vue';

export default {
  name: 'Home',
  components: {
    CreateBlogPost
  }

    ImageTextLogo
  }
  // computed: {
  //   screenWidth() {
  //     return window.innerWidth;
  //   }
  // }

};
</script>
