<template>
  <div class="card-container">
    <div v-for="item in items" :key="item.id" class="card-item">
      <FontAwesomeIcon class="card-icon" :icon="['fa', item.icon]" />
      <h3 class="card-header">{{ item.name }}</h3>
      <p class="card-text">{{ item.summary }}</p>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
.card {
  &-container {
    width: 85%;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-template-rows: auto auto;
    grid-gap: 4rem;
    align-items: start;
  }

  &-item {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: auto auto;
    grid-column-gap: 1rem;
  }

  &-icon {
    font-size: 3.1rem;
    grid-row: 1 / span 2;
    position: relative;
    right: 22px;
  }

  &-header {
    justify-self: start;
  }

  &-text {
    font-size: 1.1rem;
    justify-self: start;
    text-align: left;
  }
}

@media screen and (max-width: 600px) {
  .card {
    &-container {
      grid-template-columns: 1fr;
    }

    &-icon {
      right: 0px;
      grid-column: 1;
      grid-row: 1;
      justify-self: flex-end;
    }

    &-header {
      grid-column: 2;
      justify-self: flex-end;
    }

    &-text {
      grid-row: 2;
      grid-column: 1/-1;
      text-align: center;
    }
  }
}
</style>
