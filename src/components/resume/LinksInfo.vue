<template>
  <div class="links">
    <h2>Links</h2>
    <ul class="links-list">
      <li class="links-item" v-for="link in links" :key="link">
        <a :href="link.link" target="_blank">{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.links {
  margin-bottom: 2rem;
  &-list {
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: center;
  }

  &-item {
    display: inline-block;
    list-style-type: none;
    margin-right: 1rem;
  }

  &-item a {
    text-decoration: none;
    color: inherit;
    font-size: 1.2rem;
    line-height: 1.7rem;
    padding-bottom: 1.5rem;
  }
}
</style>
