<template>
  <div class="post-section">
    <div class="post-container">
      <BlogSkeletonLoader v-if="loadState" width="300px" height="80px" />
      <div v-else class="post">
        <div class="post-detail-display">
          <div class="post-detail-display-item">
            <FontAwesomeIcon icon="heart" class="post-detail-heart" />
            <div class="post-likes">{{ numberOfLikes }}</div>
          </div>
        </div>
        <h1 class="post-title">{{ blog.title }}</h1>
        <h3 class="post-topic"><span>Topic:</span> {{ blog.topic }}</h3>
        <h3 class="post-author"><span>Author:</span> @{{ blog.author }}</h3>
        <p class="post-text">{{ blog.summary }}</p>

        <div class="post-btns">
          <router-link to="/blogs">
            <button class="post-btns-return">
              <FontAwesomeIcon icon="arrow-left" />
            </button>
          </router-link>
          <button
            class="post-btns-like"
            @click.prevent="likeBlogPost(this.id, this.curUserID)"
          >
            <FontAwesomeIcon icon="heart" />
          </button>
          <button
            class="post-btns-comment"
            @click="toggleCreateComment()"
            v-if="loggedIn"
          >
            <FontAwesomeIcon icon="comment" />
          </button>
        </div>
        <transition name="slide-up" mode="out-in">
          <div class="post-create-comment" v-if="createCommentState">
            <form>
              <textarea
                class="post-create-textarea"
                name="content"
                placeholder="Comment"
                v-model="comment"
              ></textarea>
              <div class="text-right">
                <button
                  type="submit"
                  class="post-create-comment-btn"
                  @click.prevent="createComment(id)"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </transition>
        <CommentSection :comments="blog.comments" />
      </div>
    </div>
  </div>
</template>

<script>
import { authComputed } from '@/store/helper.js';
import CommentService from '../services/CommentService';
import LikeService from '../services/LikeService';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BlogService from '../services/BlogService';
import BlogSkeletonLoader from '@/components/utility/BlogSkeletonLoader.vue';
import CommentSection from '@/components/list/CommentSection.vue';

export default {
  name: 'BlogPost',
  components: {
    BlogSkeletonLoader,
    FontAwesomeIcon,
    CommentSection
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    blog: {},
    loadState: true,
    createCommentState: false,
    comment: '',
    curUserID: undefined
  }),
  mounted() {
    BlogService.getBlog(this.id).then(response => {
      this.blog = response.data.blog[0];
      this.loadState = !this.loadState;
    });

    if (this.loggedIn) {
      this.curUserID = this.$store.state.user._id;
    }
  },
  methods: {
    toggleCreateComment() {
      this.createCommentState = !this.createCommentState;
      return;
    },
    createComment(id) {
      const commentData = {
        content: this.comment,
        author: this.$store.state.user.username,
        authorID: this.$store.state.user.id
      };
      CommentService.createComment(id, commentData).then(response => {
        console.log(response);
        this.comment = '';
        this.$store.commit('SET_SNACK', 'Thanks for commenting!');
        this.createCommentState = false;
        BlogService.getBlog(this.id).then(response => {
          this.blog = response.data.blog[0];
        });
      });
    },
    likeBlogPost(id, userID) {
      const likeData = {
        blogID: id,
        userID: userID
      };
      LikeService.likeBlogPost(id, likeData).then(response => {
        console.log(response.data.uniqueLike);
        if (response.data.uniqueLike) {
          this.$store.commit('SET_SNACK', 'You liked a post!');
          BlogService.getBlog(this.id).then(response => {
            this.blog = response.data.blog[0];
          });
        } else {
          this.$store.commit('SET_SNACK', 'You already liked this post!');
        }
      });
    }
  },
  computed: {
    numberOfLikes() {
      return this.blog.likes.length;
    },
    ...authComputed
  }
};
</script>

<style lang="scss" scoped>
.post {
  width: 60%;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  backface-visibility: hidden;
  padding: 15px;
  vertical-align: middle;
  background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  padding: 2rem 1rem;

  &-create-comment-btn {
    padding: 0.4rem 1rem;
    width: auto;
    background: #1abc9c;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.2s ease all;
    border-radius: 10px 0 10px 0;
    outline: none !important;
    box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.2);
  }
  &-create-textarea {
    font-family: 'Open sans', sans-serif;
    line-height: 1.15;
    width: 90%;
    margin: 1.8rem 1rem 1rem 1rem;
    outline: none;
    border: 1px solid #bbb;
    border-radius: 15px;
    padding: 0.4rem 0.7rem;
    height: 50px;
    transition: 0.2s ease all;
  }

  &-section {
    // background-color: pink;
    margin-bottom: 2.5rem;
  }

  &-container {
    // background-color: orangered;
    width: 80%;
    margin: 0 auto;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
  }

  &-detail-display {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 3.5rem;

    &-item {
      display: flex;
      align-items: center;
      position: relative;
    }
  }

  &-detail-heart {
    color: #1abc9c;
    position: relative;
    font-size: 2rem;
    z-index: 0;
    top: 50%;
    left: 50%;
    margin: 0 auto;
  }

  &-likes {
    color: #fff;
    position: relative;
    right: 1px;
    z-index: 1;
    margin: 0 auto;
  }

  &-title {
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 0px;
  }

  &-topic {
    font-size: 1.3rem;
    & span {
      color: #fff;
    }
  }

  &-author {
    color: #fff;
    & span {
      color: #2c3e51;
    }
  }

  &-text {
    color: #ffffff;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    font-weight: 400;
    padding: 0 1rem;
  }

  &-text,
  &-title,
  &-likes {
    text-shadow: 0 0px 5px rgba(0, 0, 0, 0.25);
  }

  &-btns {
    &-return,
    &-like,
    &-comment {
      background-color: #1abc9c;
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      border: none;
      padding: 0.3rem 0.8rem;
      outline: none !important;
      box-shadow: none !important;
      transition: all 0.2s ease-in;
      padding: 0.7rem;
      margin-left: 6px;
      color: #fff;
      padding: 1rem;
      transition: all 0.2s;
    }
    &-return:hover,
    &-like:hover,
    &-comment:hover {
      transform: scale(1.1);
      background-color: #f25f5c;
    }
  }
}

@media screen and (max-width: 1200px) {
  .post {
    width: 75%;
  }
}

@media screen and (max-width: 900px) {
  .post {
    width: 80%;
  }
}

@media screen and (max-width: 600px) {
  .post {
    width: 100%;
    &-container {
      width: 100%;
      margin: 0 auto;
      padding: 0;
    }
    &-title {
      padding: 2rem;
    }
  }
}

// @media screen and (max-width: 400px) {
//   .post {
//   }
// }
</style>
