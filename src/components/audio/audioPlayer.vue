<template>
  <div class="audio-player">
    <div class="audio-player-body">
      <div class="audio-player-signature">
        Riefer Designs
      </div>
      <div class="audio-player-source">
        <audio
          ref="audio"
          :src="audio"
          crossorigin="anonymous"
          v-on:ended="endAudio()"
        ></audio>
      </div>
      <div class="control-panel">
        <div class="controllers">
          <!-- Volume Controller -->
          <div class="controller-volume">
            <input
              type="range"
              id="volume"
              class="volume-control"
              list="gain-vals"
              min="0"
              max="2"
              step="0.01"
              value="1"
              @input="updateVolume($event.target.value)"
            />
            <datalist id="gain-vals">
              <option value="0" label="min"> </option>
              <option value="2" label="max"> </option>
            </datalist>
            <label for="volume">Volume</label>
          </div>
          <!-- Compression Controller -->
          <div class="controller-compressor">
            <button class="compressor-button" @click="toggleCompressor()">
              <span>On/Off</span>
            </button>
            <label>Compressor</label>
          </div>
          <!-- Panning Controller -->
          <div class="controller-panner">
            <input
              type="range"
              id="panner"
              class="panner-control"
              list="pan-vals"
              min="-1"
              max="1"
              step="0.01"
              value="0"
              @input="updatePanning($event.target.value)"
            />
            <datalist id="pan-vals">
              <option value="-1" label="left"> </option>
              <option value="1" label="right"> </option>
            </datalist>
            <label for="panner">Panning</label>
          </div>
          <!-- Power Button -->
          <div class="controller-power">
            <button
              class="power-control"
              role="switch"
              aria-checked="false"
              data-power="on"
            >
              <span>On/Off</span>
            </button>
          </div>
          <!-- Play Button -->
          <div class="controller-play">
            <button class="play-button" role="switch" @click="playButton()">
              <span>Play/Pause</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudioPlayer',
  data: () => ({
    audio: require('../../assets/audio/tlc-intro.wav'),
    AudioContext: undefined,
    audioBuffer: undefined,
    audioCtx: undefined,
    audioPlaying: false,
    compressorOn: false,
    compressor: undefined,
    panner: undefined,
    gainNode: undefined,
    audioSource: undefined
  }),
  mounted: function() {
    // create audio environment
    this.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new this.AudioContext();
    // initialize plugins
    this.compressor = this.audioCtx.createDynamicsCompressor();
    this.compressor.threshold.value = -50;
    this.compressor.knee.value = 40;
    this.compressor.ratio.value = 12;
    this.compressor.attack.value = 0;
    this.compressor.release.value = 0.25;
    this.compressorOn = true;
    const pannerOptions = { pan: 0 };
    this.panner = new StereoPannerNode(this.audioCtx, pannerOptions);
    this.gainNode = this.audioCtx.createGain();
    // audio source
    this.audioSource = this.$refs.audio;
    this.track = this.audioCtx.createMediaElementSource(this.audioSource);

    // connect our graph
    this.track
      .connect(this.gainNode)
      .connect(this.compressor)
      .connect(this.panner)
      .connect(this.audioCtx.destination);
  },
  methods: {
    updateVolume(value) {
      this.gainNode.gain.value = value;
    },
    updatePanning(value) {
      this.panner.pan.value = value;
    },
    endAudio() {
      console.log('ending audio...');
      this.audioPlaying = false;
    },
    playButton() {
      if (!this.audioCtx) {
        this.init();
      }
      //check if content is suspended (autoplay policy)
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      if (this.audioPlaying === false) {
        this.audioSource.play().catch(err => {
          console.log(err);
        });
        this.audioPlaying = true;

        // if track is playing pause it
      } else if (this.audioPlaying === true) {
        this.audioSource.pause();
        this.audioPlaying = false;
      }
      //   let state = this.audioPlaying === true ? true : false;
      //   this.audioPlaying = state ? false : true;
    },
    toggleCompressor() {
      if (this.compressorOn === false) {
        console.log('activating compression');
        this.gainNode.disconnect(this.panner);
        this.gainNode.connect(this.compressor);
        this.compressor.connect(this.panner);
        this.compressorOn = true;
      } else if (this.compressorOn === true) {
        console.log('deactivating compression');
        this.gainNode.disconnect(this.compressor);
        this.compressor.disconnect(this.panner);
        this.gainNode.connect(this.panner);
        this.compressorOn = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.audio-player {
  &-body {
    background: rgb(209, 217, 230);
    background: linear-gradient(
      0deg,
      rgba(209, 217, 230, 1) 0%,
      rgba(192, 205, 235, 1) 50%,
      rgba(209, 217, 235, 1) 100%
    );
    display: inline-block;
    padding: 2rem;
    margin: 1rem;
    border: 2px solid rgba(21, 35, 39, 0.3);
    border-radius: 1px;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);
    color: rgb(33, 60, 133);
    text-shadow: 0 0 2px white;
  }
  &-signature {
    position: relative;
    top: 0;
    left: 0;
  }
}

.control-panel {
  padding: 2rem;
}

.controllers > * {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.5rem;
}
</style>
