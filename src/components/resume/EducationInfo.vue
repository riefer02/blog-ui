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
  width: 80%;
  margin: 0 auto;

  &-list {
    display: flex;
    justify-content: space-evenly;
  }

  &-item:first-child {
    margin-right: 0.5rem;
  }
  &-item {
    width: 50%;
    border-radius: 0.25rem;
    box-shadow: 0 20px 20px -14px rgba(0, 0, 0, 0.25);
    border: 1px solid  rgba(0, 0, 0, 0.25);
    padding: 1rem;
  }
}

@media screen and (max-width: 900px) {
  .education {
    width: 100%;
    &-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

     &-item:first-child {
    margin-right: 0rem;
  }

    &-item:last-child {
      margin-top: 1rem;
    }

    &-item {
      width: auto;
      
    }
  }
}
</style>
