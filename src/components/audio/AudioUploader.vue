<template>
  <div class="audio-uploader-container">
    <form>
      <div class="audio-uploader-grid">
        <label for="audio-upload" class="audio-uploader-label"
          >Upload Audio</label
        >
        <input
          class="audio-uploader-input"
          type="file"
          id="audio-upload"
          title="Upload Audio File"
          @change="onFileChange"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AudioUploader',
  data() {
    return {
      audio: '',
      playlist: [],
    };
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) console.error('fuck');
      this.createAudio(files[0]);
    },
    createAudio(file) {
      console.log(file);
      var reader = new FileReader();
      reader.onload = (e) => {
        this.audio = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style lang="scss" scoped>
.audio-uploader {
  &-container {
    width: min-content;
    margin: 0 auto;
  }

  &-grid {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    background-color: pink;
    padding: 1rem;
  }
}
</style>
