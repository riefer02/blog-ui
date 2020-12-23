<template>
  <div class="audio-player">
    <div class="audio-player-body">
      <div class="audio-player-signature">
        Riefer Designs
      </div>
      <div class="audio-player-source">
        <audio
          muted
          autoplay
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
            <label for="volume">Input Gain</label>
          </div>
          <!-- High Pass Filter Controller -->
          <div class="controller-hpf">
            <button class="hpf-button" @click="toggleHighPassFilter()">
              <span>On/Off</span>
            </button>
            <label>Highpass Filter</label>
          </div>
          <!-- Compression Controller -->
          <div class="controller-compressor">
            <button class="compressor-button" @click="toggleCompressor()">
              <span>On/Off</span>
            </button>
            <label>Compressor</label>
          </div>
          <!-- Reverb -->
          <!-- <div class="controller-reverb">
            <button class="reverb-button disabled" @click="toggleReverb()">
              <span>On/Off</span>
            </button>
            <label>Reverb</label>
          </div> -->
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
            <button class="power-control" @click="powerOnAudioPlayer()">
              <div class="power-control-indicator">
                <div
                  class="power-control-indicator-light"
                  :class="{ on: powerOn, off: !powerOn }"
                ></div>
                <div class="power-control-indicator-text">Power</div>
              </div>
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
    compressor: undefined,
    panner: undefined,
    inputGainNode: undefined,
    highPassFilter: undefined,
    reverb: undefined,
    audioSource: undefined,
    pluginController: {
      inputGainNode: true, // true = plugin on
      highPassFilter: true,
      compressor: true,
      reverb: false,
      panner: true,
      masterOut: true
    },
    powerOn: false,
    signalFlow: undefined
    // audioUnlocked: false
  }),
  mounted: function() {
    // create audio environment
    this.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new this.AudioContext({
      sampleRate: 44100
    });
    // console.log('state of audio on initial load is ' + this.audioCtx.state);
    // initialize plugins
    // compressor
    this.compressor = this.audioCtx.createDynamicsCompressor();
    this.compressor.threshold.value = -50;
    this.compressor.knee.value = 40;
    this.compressor.ratio.value = 12;
    this.compressor.attack.value = 0;
    this.compressor.release.value = 0.25;
    this.compressorOn = true;
    // panner
    const pannerOptions = { pan: 0 };
    this.panner = new StereoPannerNode(this.audioCtx, pannerOptions);
    // volume
    this.inputGainNode = this.audioCtx.createGain();
    // high pass filter @500Hz
    this.highPassFilter = new BiquadFilterNode(this.audioCtx);
    this.highPassFilter.type = 'highpass';
    this.highPassFilter.frequency.value = 500;
    this.highPassFilterOn = true;
    // reverb
    this.reverb = this.audioCtx.createConvolver();
    // audio source
    this.audioSource = this.$refs.audio;
    this.track = this.audioCtx.createMediaElementSource(this.audioSource);
    this.pluginSwitch(this.pluginController);
  },
  methods: {
    powerOnAudioPlayer() {
      this.$refs.audio.muted = !this.$refs.audio.muted;

      this.powerOn = !this.powerOn;

      // console.log(
      //   'the audio elements muted status is ' + this.$refs.audio.muted
      // );
      // console.log('the boolean powerOn is ' + this.powerOn);

      if (this.$refs.audio.muted === false) {
        this.audioCtx.resume().then(() => {
          // console.log('playback is ' + this.audioCtx.state);
        });
      } else if (this.$refs.audio.muted === true) {
        this.audioCtx.suspend().then(() => {
          // console.log('playback is ' + this.audioCtx.state);
        });
      }
    },
    playButton() {
      // console.log("the audio element's state is " + this.audioCtx.state);
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
      // console.log('the state of audioPlaying is ' + this.audioPlaying);
    },
    resetPluginNodes() {
      this.inputGainNode.disconnect();
      this.highPassFilter.disconnect();
      this.compressor.disconnect();
      this.reverb.disconnect();
      this.panner.disconnect();
    },
    pluginSwitch(controllerObj) {
      this.resetPluginNodes();
      let pluginChain = [];
      let keys = Object.keys(controllerObj);
      let filterByOn = keys.filter(k => controllerObj[k]);
      filterByOn.forEach(el => {
        let curPlugin = `.connect(this.${el})`;
        pluginChain.push(curPlugin);
      });
      pluginChain = pluginChain.join().replace(/,/g, '');
      pluginChain = pluginChain.replace('masterOut', 'audioCtx.destination');
      const myTrackStr = 'this.track';
      pluginChain = myTrackStr.concat(pluginChain);
      return eval(pluginChain);
    },
    updateVolume(value) {
      this.inputGainNode.gain.value = value;
    },
    updatePanning(value) {
      this.panner.pan.value = value;
    },
    endAudio() {
      console.log('ending audio...');
      this.audioPlaying = false;
    },

    toggleReverb() {
      console.log('reverb plugin in development');
      // this.pluginController.reverb = !this.pluginController.reverb;
      // this.pluginSwitch(this.pluginController);
    },
    toggleHighPassFilter() {
      this.pluginController.highPassFilter = !this.pluginController
        .highPassFilter;
      this.pluginSwitch(this.pluginController);
    },
    toggleCompressor() {
      this.pluginController.compressor = !this.pluginController.compressor;
      this.pluginSwitch(this.pluginController);
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

.disabled {
  opacity: 0.5;
  cursor: none;
}

@media screen and (max-width: 290px) {
  .audio-player {
    &-body {
      width: 180px;
    }
  }
}

.on {
  background-color: #b6ff00;
  -webkit-animation: on 1.5s ease-in-out infinite alternate;
  -moz-animation: on 1.5s ease-in-out infinite alternate;
  animation: on 1.5s ease-in-out infinite alternate;
}

.off {
  background-color: #ff1177;
  -webkit-animation: off 1.5s ease-in-out infinite alternate;
  -moz-animation: off 1.5s ease-in-out infinite alternate;
  animation: off 1.5s ease-in-out infinite alternate;
}

// Power Control
.power-control {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
}

.power-control-indicator {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;

  &-light {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin: 3px;
    margin-right: 0.2rem;
  }

  &-text {
    font-size: 0.7rem;
    align-self: center;
    padding: 0.2rem;
  }
}

@keyframes on {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #b6ff00,
      0 0 70px #b6ff00, 0 0 80px #b6ff00, 0 0 100px #b6ff00, 0 0 150px #b6ff00;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #b6ff00,
      0 0 35px #b6ff00, 0 0 40px #b6ff00, 0 0 50px #b6ff00, 0 0 75px #b6ff00;
  }
}

@keyframes off {
  from {
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177,
      0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;
  }
  to {
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff1177,
      0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177;
  }
}
</style>
