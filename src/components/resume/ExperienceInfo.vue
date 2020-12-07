<template>
  <div>
    <div class="experiences">
      <h2>Experience</h2>
      <div class="experience-list">
        <div
          class="experience-item"
          v-for="experience in experience"
          :key="experience"
        >
          <h3>{{ experience.roleTitle }}</h3>
          <h4>{{ experience.date }}</h4>
          <h4>{{ experience.employer }}</h4>
          <h5>{{ experience.location }}</h5>
          <ul>
            <li
              v-for="description in experience.description"
              :key="description"
            >
              {{ description }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
