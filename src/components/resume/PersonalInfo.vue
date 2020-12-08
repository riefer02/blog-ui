<template>
  <div class="personal">
    <h2>Personal Info</h2>
    <div class="personal-info">
      {{ personalInfo }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    personalInfo: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped></style>
