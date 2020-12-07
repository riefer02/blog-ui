<template>
  <div class="home">
    <ImageTextLogo />
    <HomeMain />
  </div>
</template>

<script>
import ImageTextLogo from '@/components/logo/ImageTextLogo.vue';
import HomeMain from '@/components/layout/HomeMain.vue';

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home'
  },
  components: {
    ImageTextLogo,
    HomeMain
  }
};
</script>
