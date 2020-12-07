<template>
  <div class="knowledges">
    <ul class="knowledges-list">
      <li
        class="knowledges-item"
        v-for="knowledge in knowledges"
        :key="knowledge"
      >
        {{ knowledge }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    knowledges: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped></style>
