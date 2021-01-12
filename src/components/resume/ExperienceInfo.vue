<template>
  <div>
    <div class="experience-container">
      <h2 class="experience-header">Experience</h2>
      <div class="experience-list">
        <div
          class="experience-item"
          v-for="experience in experience"
          :key="experience"
        >
          <h3 class="experience-role">{{ experience.roleTitle }}</h3>
          <hr />
          <div class="experience-details-row">
            <h4 class="experience-date">{{ experience.date }}</h4>
            <h4 class="experience-employer-company">
              {{ experience.employer }}
            </h4>
            <h5 class="experience-employer-location">
              {{ experience.location }}
            </h5>
          </div>
          <ul class="experience-description-list">
            <li
              class="experience-description-item"
              v-for="description in experience.description"
              :key="description"
            >
              <FontAwesomeIcon
                class="experience-description-icon"
                :icon="['fa', 'caret-right']"
              />
              {{ description }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  name: 'ExperienceInfo',
  components: {
    FontAwesomeIcon,
  },
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.experience {
  &-header {
    margin-bottom: 2rem;
  }

  &-container {
    width: 80%;
    margin: 0 auto;
  }

  &-details-row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-item {
    margin-bottom: 0.9rem;
    padding: 1rem 0;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
  }

  &-role {
    font-size: 1.3rem;
  }

  &-role,
  &-description-item,
  &-employer-company {
    text-shadow: 0 0px 5px rgba(0, 0, 0, 0.25);
    color: #fff;
  }

  &-date {
    margin: 0 1rem 0 0;
    display: inline-block;
    font-size: 0.9rem;
  }

  &-employer {
    &-company {
      display: inline-block;
      margin-right: 1rem;
      text-transform: uppercase;
      font-size: 1.1rem;
    }

    &-location {
      display: inline-block;
      text-transform: uppercase;
      font-size: 0.9rem;
    }
  }

  &-description {
    &-list {
      margin: 0;
      padding: 0 0 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-item {
      list-style-type: none;
      padding: 0.27rem;
      width: 80%;
      line-height: 1.7rem;
      text-align: left;
    }

    &-icon {
      color: #2c3e51;
      font-size: 1rem;
      padding-right: 5px;
    }
  }
}

@media screen and (min-width: 1400px) {
  .experience-role {
    font-size: 2.1rem;
  }

  .experience-description-item {
    line-height: 2rem;
  }
  .experience-description-list {
    padding: 0 2.8rem 1rem 2.8rem;
  }
}

@media screen and (max-width: 600px) {
  .experience {
    &-container {
      width: 95%;
    }

    &-role {
      padding: 0 1rem;
    }

    &-description-list {
      font-size: 0.9rem;
    }

    &-details-row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &-employer-company {
      margin-right: 0;
    }

    &-employer-location {
      margin-top: 0;
    }

    &-date {
      margin-top: 0.9rem;
      text-align: center;
      margin-right: 0;
    }
  }
}
</style>
