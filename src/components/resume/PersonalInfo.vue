<template>
  <div class="personal">
    <h2>Personal Info</h2>
    <div class="personal-info">
      <div class="personal-name">
        <div class="personal-name-label">Full Name:</div>
        <div class="personal-name-value">{{ personalInfo.name }}</div>
      </div>
      <div class="personal-phone">
        <div class="personal-phone-label">Phone:</div>
        <div class="personal-phone-value">{{ personalInfo.phone }}</div>
      </div>
      <div class="personal-email">
        <div class="personal-email-label">Email:</div>
        <div class="personal-email-value">
          {{ personalInfo.email }}
        </div>
      </div>
      <div class="personal-age">
        <div class="personal-age-label">Age:</div>
        <div class="personal-age-value">{{ personalInfo.age }}</div>
      </div>
      <div class="personal-dob">
        <div class="personal-dob-label">Date of Birth:</div>
        <div class="personal-dob-value">{{ personalInfo.dOB }}</div>
      </div>
      <!-- <div class="personal-heritage">
        <div>Heritage:</div>
        <div
          class="personal-heritage-item"
          v-for="heritage in personalInfo.heritage"
          :key="heritage"
        >
          {{ heritage }}
        </div>
      </div> -->
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

<style lang="scss" scoped>
.personal {
  &-info {
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
    text-shadow: 0 0px 5px rgba(0, 0, 0, 0.25);
    padding: 1.5rem;
    width: min-content;
    margin: 0 auto;
    text-align: left;

    & > * {
      margin-bottom: 1rem;
    }
  }

  &-name-value,
  &-email-value,
  &-age-value,
  &-dob-value,
  &-phone-value {
    text-shadow: 0 0px 5px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: 1.3rem;
  }
}
</style>
