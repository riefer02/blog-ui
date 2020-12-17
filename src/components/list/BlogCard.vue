<template>
  <div class="card-body">
    <BlogSkeletonLoader v-if="loadState" width="480px" height="200px" />
    <div v-else-if="loadState === false" class="cards-item">
      <div class="card">
        <div class="card-content">
          <router-link :to="'/blog/' + blog._id" @click="scrollToTop()">
            <h3 class="card-title">{{ blog.title }}</h3>
            <h4 v-if="blog.author" class="card-author">
              author: <span>@{{ blog.author }}</span>
            </h4>

            <h4 class="card-topic">{{ blog.topic }}</h4>

            <p class="card-text">{{ truncatedSummary }}</p>
          </router-link>
          <div class="card-details-row">
            <div class="card-details-left">
              <div class="card-details-likes">
                <FontAwesomeIcon class="heart-icon" icon="heart" />
                <div class="card-likes">{{ numberOfLikes }}</div>
              </div>
              <div class="card-details-comments">
                <FontAwesomeIcon class="heart-icon" icon="comment" />
                <div class="card-comments">{{ numberOfComments }}</div>
              </div>
            </div>
            <div class="card-btns">
              <button
                v-if="blog.author === curUserName"
                class="edit-btn"
                @click="editBlog(this.blog)"
              >
                <FontAwesomeIcon class="edit-icon" icon="wrench" />
              </button>
              <button
                class="delete-btn"
                @click.prevent="deleteBlog(blog._id)"
                v-if="blog.author === curUserName"
              >
                <FontAwesomeIcon class="trash-icon" icon="trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BlogSkeletonLoader from '@/components/utility/BlogSkeletonLoader.vue';

export default {
  components: {
    FontAwesomeIcon,
    BlogSkeletonLoader
  },
  props: {
    blog: {
      type: Object
    },
    deleteBlog: {
      type: Function
    },
    loadState: {
      type: Boolean
    }
  },
  methods: {
    editBlog(blog) {
      let newModalConfig = {
        modalActive: true,
        modalData: blog,
        modalType: 'editor'
      };
      this.$store.commit('SET_MODAL', newModalConfig);
    },
    truncatedText(str, num) {
      // If the length of str is less than or equal to num
      // just return str--don't truncate it.
      if (str.length <= num) {
        return str;
      }
      // Return str truncated with '...' concatenated to the end of str.
      return str.slice(0, num) + '...';
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  mounted() {
    if (this.$store.state.user) {
      this.curUserName = this.$store.state.user.username;
    } else {
      this.curUserName = 'Guest';
    }
  },
  data: () => ({
    curUserName: ''
  }),
  computed: {
    truncatedSummary() {
      return this.truncatedText(this.blog.summary, 120);
    },
    numberOfLikes() {
      return this.blog.likes.length;
    },
    numberOfComments() {
      return this.blog.comments.length;
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #2c3e50;
}
.card-body {
  width: 33.3%;
  margin: 5px;
  transition: all 0.3s ease;
}

.card-body:hover {
  transform: scale(1.03);
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &-details-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // &-topic {
  // }

  &-details {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    &-left {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    &-likes {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    &-comments {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }

  &-likes,
  &-comments {
    text-shadow: 0 0px 5px rgba(0, 0, 0, 0.25);
    margin-left: 0.4rem;
    color: #fff;
  }
}

.card-content {
  padding: 1rem;
  background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
  min-height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-title,
.card-text {
  text-shadow: 0 0px 5px rgba(0, 0, 0, 0.25);
}

.card-title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.card-author {
  font-size: 0.8rem;
}

.card-author span {
  color: #fff;
}

.card-text {
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
@media only screen and (max-width: 600px) {
  .card-body {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) and (max-width: 760px) {
  .card-body {
    width: 90%;
  }
}

.card-btns {
  align-self: flex-end;
}

.delete-btn,
.edit-btn {
  background-color: #1abc9c;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  border: none;
  padding: 0.3rem 0.8rem;
  outline: none !important;
  box-shadow: none !important;
  transition: all 0.2s ease-in;
}
.delete-btn:active,
.delete-btn:hover,
.edit-btn:active,
.edit-btn:hover {
  background-color: #f25f5c;
  transform: scale(1.1);
}

.trash-icon,
.edit-icon {
  color: white;
  position: relative;
  right: 1px;
}

.heart-icon {
  color: #1abc9c;
  margin-left: 0.7rem;
}
</style>
