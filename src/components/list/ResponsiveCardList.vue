<template>
  <div class="card-list">
    <div v-for="item in items" :key="item.id" class="card-body">
      <h3 class="card-header">{{ item.name }}</h3>
      <p class="card-text">{{ item.summary }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
