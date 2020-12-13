<template>
  <div class="comments-container">
    <div class="comments-section">
      <h2 class="comments-header">Comments</h2>
      <hr />
      <div class="comments-list">
        <div class="comments-item" v-for="comment in comments" :key="comment">
          <div class="comments-content">{{ comment.content }}</div>
          <div class="comments-content-right">
            <div class="comments-author">
              @{{ comment.author }}
            </div>
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
    // background-color: orangered;
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
    margin: 0.3rem 1rem;
    padding: 0.3rem 1.3rem;
    display: flex;
    justify-content: space-between;
    text-shadow: 0 0px 5px rgba(0, 0, 0, 0.25);
  }

  &-content {
    text-align: left;
    font-size: 0.9rem;
    padding: 0.3rem;
  }

  &-content-right {
    color: #fff;
    display: flex;
    justify-content: space-evenly;
    font-size: 0.8rem;
    align-items: flex-end;
    width: auto;

    padding: 0.3rem;
  }

  &-author {
    margin-right: 1rem;

    & span {
      color: #2c3e51;
    }
  }

  &-date {
    white-space: nowrap;
  }
}

@media screen and (max-width: 900px) {
  .comments {
    &-container {
      margin: 0.5rem 0.5rem;
    }

    &-item {
      padding: 0.2rem 0.2rem;
    }
  }
}

@media screen and (max-width: 700px) {
  .comments {
    &-item {
      flex-direction: column;
    }

    &-content-right {
      align-self: flex-end;
    }
  }
}

@media screen and (max-width: 400px) {
  .comments {
    &-item {
      margin: 0;
    }
  }
}
</style>
