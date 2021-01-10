<template>
  <picture>
    <source
      media="(max-width:600px)"
      :srcset="require('../../assets/images/' + image + '-600-400.jpg')"
    />
    <img
      class="adjust-img-pos"
      :src="require('../../assets/images/' + image + '-2550-1700.jpg')"
      :alt="alt"
      style="width: auto"
    />
  </picture>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.adjust-img-pos {
  position: relative;
  top: -140%;
}

@media screen and (max-width: 600px) {
  .adjust-img-pos {
    top: 0%;
  }
}
</style>
