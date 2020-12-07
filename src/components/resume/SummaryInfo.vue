<template>
  <div class="summary">
    <div class="summary-text">{{ summary }}</div>
  </div>
</template>

<script>
export default {
  props: {
    summary: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped></style>
