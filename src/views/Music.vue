<template>
  <div>
    <div class="toolbar-dodge">
      <h1>Master Bus Processor Series</h1>
      <p>
        I have a strong background in music production. I discovered the audio
        API for web and started building my own custom channel strip. Please
        come back and visit to see each iteration.
      </p>
      <sub>Disclaimer: This application is not fully compatible with all browser platforms.</sub>
    </div>
    <div class="mb-5">
      <AudioPlayer />
    </div>
  </div>
</template>

<script>
import AudioPlayer from '@/components/audio/audioPlayer.vue';
export default {
  components: {
    AudioPlayer
  }
};
</script>

<style lang="scss" scoped></style>
