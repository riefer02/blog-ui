<template>
  <div class="education">
    <h2>Education</h2>
    <div class="education-list">
      <div
        class="education-item"
        v-for="education in education"
        :key="education"
      >
        <h5>{{ education.date }}</h5>
        <h3>{{ education.institute }}</h3>
        <h4>{{ education.degree }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    education: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.education {
  &-list {
display: flex;
justify-content: space-evenly;
  }

  &-item {
  }
}
</style>
