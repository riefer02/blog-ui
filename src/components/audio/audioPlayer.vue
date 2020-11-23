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
              min="0"
              max="2"
              value="1"
              list="gain-vals"
              step="0.01"
              data-action="volume"
            />
            <datalist id="gain-vals">
              <option value="0" label="min"> </option>
              <option value="2" label="max"> </option>
            </datalist>
            <label for="volume">Volume</label>
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
              value="0"
              step="0.01"
              data-action="panner"
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
            <!-- Play Button -->
          </div>
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
    AudioContext: window.AudioContext || window.webkitAudioContext,
    audioCtx: undefined,
    track: undefined,
    audioPlaying: false,
    audio: require('../../assets/audio/tlc-intro.wav')
  }),
  computed: {
    audioElement() {
      return this.$refs.audio;
    }
  },
  methods: {
    endAudio() {
      console.log('ending audio...');
      this.audioPlaying = false;
    },
    init() {
      this.audioCtx = new AudioContext();
      this.track = this.audioCtx.createMediaElementSource(this.audioElement);

      // volume
      const gainNode = this.audioCtx.createGain();

      const volumeControl = document.querySelector('[data-action="volume"]');
      volumeControl.addEventListener(
        'input',
        function() {
          gainNode.gain.value = this.value;
        },
        false
      );
      // panning
      const pannerOptions = { pan: 0 };
      const panner = new StereoPannerNode(this.audioCtx, pannerOptions);

      const pannerControl = document.querySelector('[data-action="panner"]');
      pannerControl.addEventListener(
        'input',
        function() {
          panner.pan.value = this.value;
        },
        false
      );

      // connect our graph
      this.track
        .connect(gainNode)
        .connect(panner)
        .connect(this.audioCtx.destination);
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
        this.audioElement.play().catch(err => {
          console.log(err);
        });
        this.audioPlaying = true;

        // if track is playing pause it
      } else if (this.audioPlaying === true) {
        this.audioElement.pause();
        this.audioPlaying = false;
      }
      //   let state = this.audioPlaying === true ? true : false;
      //   this.audioPlaying = state ? false : true;
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
      rgba(192, 205, 237, 1) 50%,
      rgba(204, 210, 237, 0) 100%
    );
    display: inline-block;
    padding: 2rem;
    margin: 1rem;
    border: 2px solid rgba(21, 35, 39, 0.3);
    color: rgb(33, 60, 133);
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
