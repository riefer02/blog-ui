<template>
  <div>
    <div class="overlay" v-if="showModal" @click="changeModal">
      <!-- modal -->
      <div class="modal" v-if="showModal">
        <button class="close" @click="changeModal">x</button>
        <h3>Title</h3>
        <p>Description</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    showModal: {
      type: Boolean
    }
  },
  methods: {
    changeModal() {
      this.$emit('handle-modal', this.modalSwitch);
    }
  },
  computed: {
    modalSwitch() {
      let changedModalState = !this.showModal;
      return changedModalState;
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  z-index: 9998;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(107, 45, 92, 0.5);
  transform: translate(-50%, -50%);
  display:flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;
  width: 300px;
  z-index: 9999;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
