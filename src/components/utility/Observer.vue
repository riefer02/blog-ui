<template>
  <div class="observer"></div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object
    }
  },
  data: () => ({
    observer: null
  }),
  mounted() {
    const options = this.options || {};
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        // What happens...
        this.$emit('intersect');
      }
    }, options);

    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  }
};
</script>

<style lang="scss" scoped></style>
