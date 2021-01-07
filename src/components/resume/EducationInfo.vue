<template>
  <div class="education">
    <h2>Education</h2>
    <div class="education-list">
      <div
        class="education-item"
        v-for="education in education"
        :key="education"
      >
        <h5 class="education-date">{{ education.date }}</h5>
        <h3 class="education-institute">{{ education.institute }}</h3>

        <h4 class="education-degree">{{ education.degree }}</h4>
        <h3 class="education-location">{{ education.location }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    education: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.education {
  width: 80%;
  margin: 0 auto;
  text-shadow: 0 0px 5px rgba(0, 0, 0, 0.25);

  &-list {
    display: flex;
    justify-content: space-evenly;
    font-size: 1.3rem;
  }

  &-item:first-child {
    margin-right: 0.5rem;
  }
  &-item {
    width: 50%;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-direction: column;
  }

  &-institute {
    color: #fff;
    font-size: 1.3rem;
    margin: 0;
  }

  &-location {
    text-shadow: none;
    font-size: 0.8rem;
    padding-bottom: 0.4rem
  }

  &-degree,
  &-date {
    text-shadow: none;
    font-size: 1rem;
  }

    &-date {
      font-size: 0.9rem;
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
      min-height: 180px;
    }
  }
}
</style>
