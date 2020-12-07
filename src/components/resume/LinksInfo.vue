<template>
  <div class="links">
    <ul class="links-list">
      <li class="link-item" v-for="link in links" :key="link">
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

<style lang="scss" scoped></style>
