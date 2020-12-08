<template>
  <div class="summary">
    <div class="summary-section">
      <h2 class="summary-header">Summary</h2>
      <div class="summary-text">{{ summary }}</div>
    </div>
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

<style lang="scss" scoped>
.summary {
  margin: 0rem 0rem 1rem 0rem;
  .summary-section {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  &-text {
    font-size: 1.2rem;
    line-height: 1.7rem;
    padding-bottom: 1.5rem;
  }
}
</style>
