<template>
  <div class="knowledges">
    <h2 class="knowledges-header">Knowledges</h2>
    <div class="knowledges-section">
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

<style lang="scss" scoped>
.knowledges {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 0rem;

  &-section {
    width: 100%;
    padding: 1rem 1rem 0rem 1rem;
    align-self: center;
  }

  &-list {
    margin: 0px;
    padding: 0px;
  }

  &-item {
    margin: 0.3rem 0.5rem;
    padding: 1rem 1rem;
    list-style-type: none;
    display: inline-block;
    background-color: white;
    color: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
    text-shadow: 0 0px 5px rgba(0, 0, 0, 0.25);
  }
}

@media screen and (max-width: 600px) {
  .knowledges {
    padding: 0.5rem;
    // &-list {

    // }
  
    &-item {
      padding: 0.5rem;
    }
  }
}
</style>
