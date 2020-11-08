<template>
  <div class="home">
    <ImageTextLogo width="480"/>
   
  </div>
</template>

<script>
import ImageTextLogo from '@/components/logo/ImageTextLogo.vue';

export default {
  name: 'Home',
  components: {
    ImageTextLogo
  }
  // computed: {
  //   screenWidth() {
  //     return window.innerWidth;
  //   }
  // }
};
</script>
