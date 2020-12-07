<template>
  <div class="social-media-bar">
    <a
      href="https://github.com/riefer02"
      target="_blank"
      class="social-media-link"
      ><FontAwesomeIcon class="social-media-icon" :icon="['fab', 'github']"
    /></a>
    <a
      href="https://wa.me/18178974599?text=I'm%20found%20your%20portfolio%20site%20and%20just%20wanted%20to%20say%20hello!"
      target="_blank"
      class="social-media-link"
      ><FontAwesomeIcon class="social-media-icon" :icon="['fab', 'whatsapp']"
    /></a>
    <a
      href="https://www.instagram.com/riefer02/"
      target="_blank"
      class="social-media-link"
      ><FontAwesomeIcon class="social-media-icon" :icon="['fab', 'instagram']"
    /></a>
    <a href="#" class="social-media-link"
      ><FontAwesomeIcon class="social-media-icon" :icon="['fab', 'youtube']"
    /></a>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
.social-media {
  &-bar {
    position: absolute;
    right: 15px;
    top: 20px;
    display: flex;
    justify-content: center;
  }

  &-icon {
    font-size: 35px;
    // color: rgba(26, 188, 156, 1);
    color: #fff;
    transition: transform 0.5s;
  }
  // rgba(239, 141, 156, 1)
  &-link {
    display: flex;
    background-image: linear-gradient(
      45deg,
      #ffc39e,
      rgba(239, 141, 156, 1),
      rgba(255, 195, 158, 1)
    );
    height: 38px;
    width: 38px;
    margin: 0 8px;
    padding: 6px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(239, 141, 156, 0.7);
    transition: transform 0.2s;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  }

  &-link:hover {
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
      inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
      -0.5px -0.5px 0px -1px rgba(255, 255, 255, 1),
      0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
      0px 12px 10px -10px rgba(0, 0, 0, 0.05);
    transform: translateY(2px) scale(0.9);
  }
}

@media only screen and (max-width: 900px) {
  .social-media {
    &-bar {
      display: flex;
      flex-direction: column;
    }
    &-link {
      margin-bottom: 5px;
    }
    &-icon {
      font-size: 30px;
    }
  }
}

@media only screen and (min-width: 600px) and (max-width: 768px) {
  .social-media {
    &-bar {
      position: absolute;
      right: 15px;
      top: 20px;
    }

    &-link {
      margin-bottom: 5px;
    }
    &-icon {
      font-size: 30px;
    }
  }
}

@media only screen and (max-width: 600px) {
  .social-media {
    &-bar {
      right: 4px;
      top: 1rem;
      z-index: 500;
    }

    &-link {
      height: 25px;
      width: 25px;
      margin: 0 2.5px;
      margin-bottom: 5px;
    }
    &-icon {
      font-size: 25px;
    }
  }
}
</style>
