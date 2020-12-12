<template>
  <div class="comments-container">
    <div class="comments-section">
      <h2 class="comments-header">Comments</h2>
      <div class="comments-list">
        <div class="comments-item" v-for="comment in comments" :key="comment">
          <div class="comments-content">{{ comment.content }}</div>
          <div class="comments-content-right">
            <div class="comments-author">@{{ comment.author }}</div>
            <div class="comments-date">
              {{ formatCompat(comment.created_at) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentSection',
  props: {
    comments: {
      type: Array
    }
  },
  computed: {},
  methods: {
    formatCompat(date) {
      let newDate = new Date(date);
      var ms = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ];
      return (
        newDate.getDate() +
        ' ' +
        ms[newDate.getMonth()] +
        ' ' +
        newDate.getFullYear()
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.comments {
  &-container {
    background-color: orangered;
    margin: 0.5rem 3rem;
  }

  &-header {
    padding: 1.5rem 1.5rem 0 1.5rem;
  }

  &-list {
    display: flex;
    flex-direction: column;
  }

  &-item {
    background-color: white;
    margin: 0.3rem 1rem;
    padding: 0.3rem 1.3rem;
    display: flex;
    justify-content: space-between;
  }

  &-content-right {
    display: flex;
    justify-content: space-evenly;
    font-size: 0.8rem;
    align-items: flex-end;
    width: auto;
  }

  &-author {
    margin-right: 1rem;
  }
}
</style>
