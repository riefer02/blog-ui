<template>
  <div class="post-section">
    <div class="post-container">
      <BlogSkeletonLoader v-if="loadState" width="300px" height="80px" />
      <div v-else class="post">
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
          <button class="post-btns-like">
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
        <div class="post-create-comment" v-if="createCommentState">
          <form>
            <textarea
              class="form-control"
              name="content"
              placeholder="Comment"
              v-model="comment"
            ></textarea>
            <div class="text-right">
              <button
                type="submit"
                class="btn btn-primary"
                @click.prevent="createComment(id)"
              >
                Post
              </button>
            </div>
          </form>
        </div>
        <CommentSection :comments="blog.comments" />
        <!-- <div class="post-comments">

        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { authComputed } from '@/store/helper.js';
import CommentService from '../services/CommentService';
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
    comment: ''
  }),
  mounted() {
    BlogService.getBlog(this.id).then(response => {
      this.blog = response.data.blog[0];
      this.loadState = !this.loadState;
    });
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
    }
  },
  computed: {
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
  &-title {
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
