<template>
  <div class="music-container">
    <div class="toolbar-dodge">
      <h1>Master Bus Processor Series</h1>
      <p>
        I have a strong background in music production. I discovered the audio
        API for web and started building my own custom channel strip. Please
        come back and visit to see each iteration.
      </p>
      <h3>
        <span>Disclaimer:</span> This application is not fully compatible with
        all browser platforms.
      </h3>
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
    AudioPlayer,
  },
};
</script>

<style lang="scss" scoped>
.music-container {
  min-height: 845px;
}

h3 span {
  background-color: red;
  color: white;
  padding: 0.2rem;
  border-radius: 2px;
}

@media screen and (max-width: 600px) {
  h3 span {
    padding: 0 0.2rem;
  }
}
</style>
