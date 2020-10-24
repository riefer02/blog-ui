import { createStore } from 'vuex';
import blogService from '../../services/BlogService.js';

export default createStore({
  state: {
    user: { name: 'Andrew Riefenstahl', age: 32 },
    blogs: [],
    snack: ''
  },
  mutations: {
    SET_BLOGS(state, blogs) {
      state.blogs = blogs;
    },
    SET_SNACK(state, snack) {
      console.log(state.snack);
      console.log(snack);
      state.snack = snack;
    }
  },
  actions: {
    retrieveBlogs({ commit }) {
      blogService.getBlogs().then(response => {
        commit('SET_BLOGS', response.data.blogs);
      });
    }
  },
  getters: {
    snackMessage: state => {
      return state.snack;
    }
  },
  modules: {}
});
