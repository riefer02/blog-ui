<template>
  <div>
    <router-link :to="'/blog/' + blog._id"
      ><h3>{{ blog.title }}</h3>
      <h4>{{ blog.topic }}</h4>
      <p>{{ blog.summary }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #2c3e50;
}
</style>
