<template>

  <div class="ui-snackbar-container">
    <div class="ui-snackbar" v-show="show" transition="ui-snackbar-toggle">
      <div class="ui-snackbar-text">{{ snack }}</div>
      <div class="ui-snackbar-action">
        <button @click="resetSnack">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    resetSnack() {
      let clearMessage = '';
      this.$store.commit('SET_SNACK', clearMessage);
    }
  },
  computed: {
    snack() {
      return this.$store.getters.snackMessage;
    },
    show() {
      return this.$store.getters.snackMessage.length > 0 ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
.ui-snackbar-container {
  position: fixed;
  overflow: hidden;
  z-index: 10000;
  bottom: 0;
  left: 8px;
}

.ui-snackbar {
  display: inline-flex;
  align-items: center;

  min-width: 288px;
  max-width: 568px;
  min-height: 48px;

  padding: 14px 24px;
  margin: 4px 4px 8px 4px;

  border-radius: 2px;
  background-color: #323232;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.ui-snackbar-text {
  font-size: 14px;
  color: white;
}

.ui-snackbar-action {
  margin-left: auto;
  padding-left: 48px;

  button {
    border: none;
    background: none;
    margin: 0;
    padding: 0;

    font-size: 14px;
    text-transform: uppercase;

    color: #ffeb3b;
  }
}

.ui-snackbar-toggle-transition {
  transition: transform 0.3s ease;

  .ui-snackbar-text,
  .ui-snackbar-action {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
}

.ui-snackbar-toggle-enter,
.ui-snackbar-toggle-leave {
  transform: translateY(60px);

  .ui-snackbar-text,
  .ui-snackbar-action {
    opacity: 0;
  }
}
</style>
